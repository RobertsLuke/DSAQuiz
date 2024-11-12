export const dsaFundamentalsQuiz1 = {
  id: 3,
  name: "DSA Fundamentals: Data Structures & Big-O",
  questions: [
    {
      id: 1,
      text: "Which one of the following definitions describes a linear data structure?",
      options: [
        "A data structure where each node will have no predecessors and no successors",
        "A data structure where each node has a unique predecessor and a unique successor",
        "A data structure where each node has a unique predecessor and many successors",
        "A data structure where each node has many predecessors and a unique successor",
        "A data structure where each node has many predecessors and many successors",
        "None of the above",
      ],
      correctAnswer:
        "A data structure where each node has a unique predecessor and a unique successor",
      explanation:
        "A linear data structure is characterized by elements arranged in a sequential manner where each element (except the first and last) has exactly one predecessor and one successor, forming a linear sequence.",
    },
    {
      id: 2,
      text: "An Abstract Data Type (ADT) is dependent on the implementation while a data structure is independent on the implementation.",
      options: ["True", "False"],
      correctAnswer: "False",
      explanation:
        "This statement is false. Actually, it's the opposite - an Abstract Data Type (ADT) is independent of implementation, while a data structure is a specific implementation of an ADT. ADTs define what operations can be performed but not how they are implemented.",
    },
    {
      id: 3,
      text: "Which one of the following definitions describes a graph data structure?",
      options: [
        "A data structure where each node has many predecessors and many successors",
        "A data structure where each node has a unique predecessor and many successors",
        "A data structure where each node has many predecessors and a unique successor",
        "A data structure where each node will have no predecessors and no successors",
        "A data structure where each node has a unique predecessor and a unique successor",
      ],
      correctAnswer:
        "A data structure where each node has many predecessors and many successors",
      explanation:
        "A graph data structure allows nodes (vertices) to have multiple connections to other nodes, meaning each node can have many predecessors and many successors. This flexibility in connections is what distinguishes graphs from other data structures.",
    },
    {
      id: 4,
      text: "Which one of the following definitions describes a hierarchical data structure?",
      options: [
        "A data structure where each node has a unique predecessor and a unique successor",
        "A data structure where each node has many predecessors and a unique successor",
        "A data structure where each node has many predecessors and many successors",
        "A data structure where each node will have no predecessors and no successors",
        "A data structure where each node has a unique predecessor and many successors",
      ],
      correctAnswer:
        "A data structure where each node has a unique predecessor and many successors",
      explanation:
        "A hierarchical data structure (like a tree) is characterized by nodes having exactly one predecessor (parent) and potentially multiple successors (children), creating a hierarchical relationship between elements.",
    },
    {
      id: 5,
      text: "An unsorted group of n elements are stored in the first n entries of a one dimensional array, indexed 1 to n. What is the order of complexity for an algorithm, which inserts an element into the array in the (n+1)th position?",
      options: ["O(n log₂n)", "O(1)", "O(n)", "O(log₂n)", "O(n²)"],
      correctAnswer: "O(1)",
      explanation:
        "When inserting an element at the end of an unsorted array, it's a constant time operation O(1) because we just need to place the element in the next available position, regardless of the array's size.",
    },
    {
      id: 6,
      text: "A sorted group of n elements are stored in the first n entries of a one dimensional array, indexed 1 to n. What is the order of complexity for an algorithm, which inserts an element into the sorted array in the correct position?",
      options: ["O(1)", "O(n)", "O(log₂n)", "O(n log₂n)", "O(n²)"],
      correctAnswer: "O(n)",
      explanation:
        "When inserting an element into a sorted array in the correct position, we may need to shift up to n elements to maintain the sorting order. Therefore, the time complexity is O(n) in the worst case.",
    },
    {
      id: 7,
      text: "Which statement describes the meaning of O(n)?",
      options: [
        "An algorithm operates in constant time",
        "An algorithm operates in linear time",
        "An algorithm operates in quadratic time",
        "An algorithm operates in exponential time",
        "An algorithm operates in logarithmic time",
      ],
      correctAnswer: "An algorithm operates in linear time",
      explanation:
        "O(n) indicates linear time complexity, meaning the algorithm's running time grows linearly with the input size. As the input size doubles, the time taken also doubles.",
    },
    {
      id: 8,
      text: "Five programmers have each developed a different algorithm to solve a given problem. Which programmer has created the most efficient algorithm?",
      options: [
        "Programmer A - Efficiency of O(n³)",
        "Programmer B - Efficiency of O(log₂n)",
        "Programmer C - Efficiency of O(n)",
        "Programmer D - Efficiency of O(n log₂n)",
        "Programmer E - Efficiency of O(n²)",
      ],
      correctAnswer: "Programmer B - Efficiency of O(log₂n)",
      explanation:
        "O(log₂n) is the most efficient among the given options. The order from most to least efficient is: O(log₂n) < O(n) < O(n log₂n) < O(n²) < O(n³).",
    },
    {
      id: 9,
      text: "What is the order of complexity (Big-O) of adding 1 to each element in a square two-dimensional array of integers of size n x n?",
      options: ["None of these", "O(1)", "O(n²)", "O(n)", "O(log₂ n)"],
      correctAnswer: "O(n²)",
      explanation:
        "For a square array of size n x n, we need to visit each element once to add 1 to it. This requires n iterations for each of the n rows, resulting in n * n = n² operations, hence O(n²) complexity.",
    },
    {
      id: 10,
      text: "A program takes nearly 3 hours to process 1000 items, but it can process 10 items in a second, and 100 items in just under 2 minutes. Using O( ) notation, estimate the performance of this program.",
      options: ["O(1)", "O(n)", "O(n²)", "O(log₂ n)", "None of the given ones"],
      correctAnswer: "O(n²)",
      explanation:
        "Looking at the processing times: 10 items ≈ 1 second, 100 items ≈ 120 seconds, 1000 items ≈ 10800 seconds. When the input size increases by a factor of 10, the time increases by a factor of about 100, indicating quadratic time complexity O(n²).",
    },
    {
      id: 11,
      text: "Which one of the following applications would be suitable to implement using a Stack?",
      options: [
        "An operating system is to process requests for computer resources by allocating the resources in the order in which they are requested.",
        "An inventory of parts to be processed by part number.",
        "A word processor has a special key that allows preceding commands to be redisplayed; the command that precedes the one currently displayed is to be displayed.",
        "The airplanes lining up on a runway at Heathrow airport, waiting for permission to takeoff.",
        "A shopping list.",
      ],
      correctAnswer:
        "A word processor has a special key that allows preceding commands to be redisplayed; the command that precedes the one currently displayed is to be displayed.",
      explanation:
        "A stack is perfect for this scenario because it follows Last-In-First-Out (LIFO) order, which matches the requirement of accessing previous commands in reverse order. Each new command is pushed onto the stack, and when you need to go back, you pop the most recent commands first.",
    },
    {
      id: 12,
      text: "Which one of the following applications would be suitable to implement using a Queue?",
      options: [
        "An operating system is to process requests for computer resources by allocating the resources in the order in which they are requested.",
        "Gamblers are to take numbers in the lottery and win if their numbers are picked.",
        "A program to solve a maze is to backtrack to an earlier position (the last place where a choice of direction taken was made) when a dead-end position is reached.",
        "An ailing company wants to evaluate employee records in order to lay off some workers on the basis of service time the most recently hired employee being laid off first.",
        "A program to receive a set of data that is to be saved and processed in the reverse order.",
      ],
      correctAnswer:
        "An operating system is to process requests for computer resources by allocating the resources in the order in which they are requested.",
      explanation:
        "A queue is ideal for this scenario because it follows First-In-First-Out (FIFO) order, which perfectly matches the requirement of processing requests in the order they were received.",
    },
    {
      id: 13,
      text: "Which one of the following statements describes the operation of a queue?",
      options: [
        "First in first out",
        "Last in First out",
        "First in Last out",
        "None of the above",
      ],
      correctAnswer: "First in first out",
      explanation:
        "A queue operates on the First-In-First-Out (FIFO) principle, meaning the first element added to the queue will be the first one to be removed. This is similar to a line of people waiting - the first person to join the line is the first person to be served.",
    },
    {
      id: 14,
      text: "A stack consisting of n elements is implemented using a 1D array with the position of the top adjustable. What is the time complexity (Big-O) of removing (pop) the top two elements from the stack while preserving the order of the remaining elements?",
      options: ["O(n)", "O(log₂ n)", "O(n²)", "O(n log₂ n)", "O(1)"],
      correctAnswer: "O(1)",
      explanation:
        "In a stack implementation with an adjustable top pointer, popping elements is always an O(1) operation regardless of how many elements you pop, as long as you're removing from the top. This is because you only need to adjust the top pointer and no shifting of elements is required.",
    },
    {
      id: 15,
      text: "Characters E, D, C, B, A are inserted into a stack (in the order given, E first followed by D etc), and then removed one at a time. In what order are they removed?",
      options: [
        "A B C D E",
        "C D B E A",
        "C B D A E",
        "E A D B C",
        "None of the above",
      ],
      correctAnswer: "A B C D E",
      explanation:
        "When elements are pushed onto a stack in the order E, D, C, B, A, they will be popped in reverse order (LIFO - Last In First Out). So A will be popped first (last in), followed by B, C, D, and finally E (first in).",
    },
    {
      id: 16,
      text: "Six data items A, B, C, D, E, F are input, in this order, into a stack. Assuming that items may be removed from the stack before all items have been inputted and no item can be re-inputted into the stack after it has been outputted, which output sequence is possible?",
      options: [
        "Output permutation (leftmost item first): D, B, A, C, E, F",
        "Output permutation (leftmost item first): B, D, C, F, E, A",
        "Output permutation (leftmost item first): A, E, B, D, C, F",
        "Output permutation (leftmost item first): A, B, F, D, E, C",
        "Output permutation (leftmost item first): E, B, F, C, D, A",
        "None of the above",
      ],
      correctAnswer:
        "Output permutation (leftmost item first): B, D, C, F, E, A",
      explanation:
        "This sequence is possible because you can push and pop items in a way that maintains the stack's LIFO property while achieving this order. You can push A and B, pop B, push C and D, pop D and C, push E and F, pop F and E, and finally pop A.",
    },
    {
      id: 17,
      text: "In a given application you insert 10, 20, 30, 40 and 50 into a queue and then remove four numbers from the queue. Which number is left in the queue?",
      options: ["10", "20", "30", "40", "50", "None"],
      correctAnswer: "50",
      explanation:
        "In a queue, elements are removed in FIFO (First-In-First-Out) order. After inserting 10, 20, 30, 40, 50 and removing four numbers, the first four numbers (10, 20, 30, 40) would be removed, leaving 50 as the only remaining element.",
    },
    {
      id: 18,
      text: "A queue consisting of n elements is implemented using a 1D array with the position of the head fixed. What is the time complexity (Big-O) of removing the second element from the queue (dequeue) while preserving the order of the remaining elements?",
      options: ["O(n log₂ n)", "O(1)", "O(log₂ n)", "O(n²)", "O(n)"],
      correctAnswer: "O(n²)",
      explanation:
        "With a fixed head position, removing the second element requires shifting all subsequent elements forward to maintain the queue's order. In a standard array implementation with a fixed head, this shifting operation has a quadratic complexity due to the need to maintain the relative ordering of elements.",
    },
    {
      id: 19,
      text: "A stack is represented by an array with an adjustable top position. What is the worse case time complexity (Big-O) of inserting an item into the stack? (Note: Assume there is space to insert the item.)",
      options: ["O(1)", "O(n)", "O(n²)", "O(log₂ n)", "None of the above"],
      correctAnswer: "O(1)",
      explanation:
        "In a stack implementation with an adjustable top pointer, pushing (inserting) an item is always an O(1) operation because it only requires placing the new element at the current top position and incrementing the top pointer. No other elements need to be moved or adjusted.",
    },
  ],
};
