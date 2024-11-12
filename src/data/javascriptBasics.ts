export const javascriptBasicsQuiz = {
  id: 1,
  name: "JavaScript Basics",
  questions: [
    {
      id: 1,
      text: "What is the output of this code?",
      code: "console.log(typeof null)",
      options: ["null", "undefined", "object", "number", "NaN"],
      correctAnswer: "object",
      explanation:
        "In JavaScript, typeof null returns 'object'. This is a known bug in JavaScript that has persisted for historical reasons. Despite null being its own primitive type, typeof null returns 'object'.",
    },
    {
      id: 2,
      text: "Which of the following is not a JavaScript data type?",
      options: ["String", "Number", "Boolean", "Float", "Object"],
      correctAnswer: "Float",
      explanation:
        "Float is not a distinct data type in JavaScript. Numbers in JavaScript are always stored as double precision floating point numbers, following the IEEE 754 standard. Both integers and floating-point numbers are of type 'number'.",
    },
  ],
};
