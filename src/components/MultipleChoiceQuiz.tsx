"use client";

import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
// import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
// import { Label } from "../components/ui/label";
import { dsaFundamentalsQuiz1 } from "../data/dsaFundamentalsQuiz1";
import { dsaFundamentalsQuiz2 } from "../data/dsaFUndamentalsQuiz2";
import { ChevronLeft, ChevronRight, Flame } from "lucide-react";
import { cn } from "../lib/utils";

interface Question {
  id: number;
  text: string;
  code?: string;
  image?: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

interface Quiz {
  id: number;
  name: string;
  questions: Question[];
}

const quizzes: Quiz[] = [dsaFundamentalsQuiz1, dsaFundamentalsQuiz2];

export default function MultipleChoiceQuiz() {
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [isExplanationVisible, setIsExplanationVisible] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [randomizedOptions, setRandomizedOptions] = useState<string[]>([]);
  const [streak, setStreak] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<
    Record<
      number,
      {
        selected: string;
        isCorrect: boolean;
      }
    >
  >({});

  useEffect(() => {
    if (selectedQuiz) {
      randomizeOptions();
    }
  }, [selectedQuiz, currentQuestionIndex]);

  const randomizeOptions = () => {
    if (selectedQuiz) {
      const currentQuestion = selectedQuiz.questions[currentQuestionIndex];
      const shuffled = [...currentQuestion.options].sort(
        () => Math.random() - 0.5
      );
      setRandomizedOptions(shuffled);
    }
  };

  const handleQuizSelect = (quizId: string) => {
    const quiz = quizzes.find((q) => q.id === parseInt(quizId));
    setSelectedQuiz(quiz || null);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setIsExplanationVisible(false);
    setScore(0);
    setStreak(0);
    setQuizCompleted(false);
    setAnsweredQuestions({});
  };

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    const currentQuestion = selectedQuiz!.questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    if (isCorrect) {
      setScore(score + 1);
      setStreak(streak + 1);
    } else {
      setStreak(0);
    }

    setAnsweredQuestions({
      ...answeredQuestions,
      [currentQuestionIndex]: {
        selected: selectedAnswer,
        isCorrect,
      },
    });

    setIsAnswerSubmitted(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < selectedQuiz!.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(
        answeredQuestions[currentQuestionIndex + 1]?.selected || null
      );
      setIsAnswerSubmitted(!!answeredQuestions[currentQuestionIndex + 1]);
      setIsExplanationVisible(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedAnswer(
        answeredQuestions[currentQuestionIndex - 1]?.selected || null
      );
      setIsAnswerSubmitted(!!answeredQuestions[currentQuestionIndex - 1]);
      setIsExplanationVisible(false);
    }
  };

  const toggleExplanation = () => {
    setIsExplanationVisible(!isExplanationVisible);
  };

  const getOptionClassName = (option: string) => {
    if (!isAnswerSubmitted) return "hover:bg-gray-100";

    const currentQuestion = selectedQuiz!.questions[currentQuestionIndex];
    const isCorrectAnswer = option === currentQuestion.correctAnswer;
    const isSelectedAnswer = option === selectedAnswer;

    return cn("p-4 rounded-lg transition-colors", {
      "bg-green-100 hover:bg-green-200 border-2 border-green-500":
        isCorrectAnswer,
      "bg-red-100 hover:bg-red-200 border-2 border-red-500":
        isSelectedAnswer && !isCorrectAnswer,
      "hover:bg-gray-100": !isCorrectAnswer && !isSelectedAnswer,
    });
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-3xl font-bold mb-4">Multiple Choice Quiz</h1>

      <Select onValueChange={handleQuizSelect}>
        <SelectTrigger className="w-full mb-4">
          <SelectValue placeholder="Select a quiz" />
        </SelectTrigger>
        <SelectContent>
          {quizzes.map((quiz) => (
            <SelectItem key={quiz.id} value={quiz.id.toString()}>
              {quiz.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {selectedQuiz && !quizCompleted && (
        <>
          <div className="flex items-center justify-between mb-4 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg shadow-sm">
            <Button
              variant="outline"
              onClick={handlePrevQuestion}
              disabled={currentQuestionIndex === 0}
              className="hover:bg-blue-50"
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            <div className="text-center">
              <div className="text-lg font-medium">
                Question {currentQuestionIndex + 1} /{" "}
                {selectedQuiz.questions.length}
              </div>
              {streak > 0 && (
                <div className="text-sm text-orange-500 flex items-center justify-center mt-1">
                  <Flame className="h-4 w-4 mr-1 animate-pulse" />
                  {streak} streak! 🔥
                </div>
              )}
            </div>
            <Button
              variant="outline"
              onClick={handleNextQuestion}
              disabled={
                currentQuestionIndex === selectedQuiz.questions.length - 1
              }
              className="hover:bg-blue-50"
            >
              Next
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>

          <Card className="mt-4 shadow-md">
            <CardContent className="p-6">
              <div className="mb-6">
                <p className="text-lg font-medium mb-4">
                  {selectedQuiz.questions[currentQuestionIndex].text}
                </p>
                {selectedQuiz.questions[currentQuestionIndex].code && (
                  <SyntaxHighlighter
                    language="javascript"
                    style={vscDarkPlus}
                    className="mt-2 rounded"
                  >
                    {selectedQuiz.questions[currentQuestionIndex].code}
                  </SyntaxHighlighter>
                )}
                {selectedQuiz.questions[currentQuestionIndex].image && (
                  <img
                    src={selectedQuiz.questions[currentQuestionIndex].image}
                    alt="Question visual"
                    className="mt-2 max-w-full h-auto rounded-lg shadow-sm"
                  />
                )}
              </div>
              <div className="space-y-3">
                {randomizedOptions.map((option, index) => (
                  <div
                    key={index}
                    className={getOptionClassName(option)}
                    onClick={() =>
                      !isAnswerSubmitted && handleAnswerSelect(option)
                    }
                  >
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        className="form-radio h-4 w-4 text-blue-600"
                        checked={selectedAnswer === option}
                        onChange={() => handleAnswerSelect(option)}
                        disabled={isAnswerSubmitted}
                      />
                      <span className="text-sm md:text-base">{option}</span>
                    </label>
                  </div>
                ))}
              </div>

              {!isAnswerSubmitted ? (
                <Button
                  onClick={handleSubmitAnswer}
                  className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white"
                  disabled={selectedAnswer === null}
                >
                  Submit Answer
                </Button>
              ) : (
                <div className="mt-6 space-y-4">
                  <div
                    className={cn(
                      "p-4 rounded-lg text-center font-medium",
                      selectedAnswer ===
                        selectedQuiz.questions[currentQuestionIndex]
                          .correctAnswer
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    )}
                  >
                    {selectedAnswer ===
                    selectedQuiz.questions[currentQuestionIndex].correctAnswer
                      ? "Correct! 🎉"
                      : "Incorrect! Try again next time!"}
                  </div>
                </div>
              )}

              <Button
                onClick={toggleExplanation}
                variant="outline"
                className="w-full mt-4"
              >
                {isExplanationVisible ? "Hide Explanation" : "Show Explanation"}
              </Button>

              {isExplanationVisible && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold mb-2">Explanation:</h3>
                  <p className="text-gray-700">
                    {selectedQuiz.questions[currentQuestionIndex].explanation}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </>
      )}

      {quizCompleted && (
        <Card className="mt-4 shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Quiz Completed! 🎓</h2>
            <p className="text-lg mb-4">
              Your score: {score} out of {selectedQuiz!.questions.length}
            </p>
            <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
              <div
                className="bg-green-600 h-4 rounded-full transition-all duration-500"
                style={{
                  width: `${(score / selectedQuiz!.questions.length) * 100}%`,
                }}
              />
            </div>
            <Button
              onClick={() => handleQuizSelect(selectedQuiz!.id.toString())}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Restart Quiz
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
