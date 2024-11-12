export const reactHooksQuiz = {
  id: 2,
  name: "React Hooks",
  questions: [
    {
      id: 3,
      text: "Which hook is used for side effects in React?",
      options: ["useEffect", "useState", "useContext", "useReducer", "useMemo"],
      correctAnswer: "useEffect",
      explanation:
        "useEffect is the hook used for side effects in React. It allows you to perform side effects in function components, such as data fetching, subscriptions, or manually changing the DOM. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React class components.",
    },
    {
      id: 4,
      text: "What is the purpose of this hook?",
      code: "const [count, setCount] = useState(0)",
      options: [
        "To declare a state variable and a function to update it",
        "To create a memoized value",
        "To handle side effects",
        "To create a context",
        "To optimize performance",
      ],
      correctAnswer: "To declare a state variable and a function to update it",
      explanation:
        "useState is used to declare a state variable in a function component. It returns an array with two elements: the current state value and a function to update it. In this case, count is the state variable initialized to 0, and setCount is the function to update count.",
    },
  ],
};
