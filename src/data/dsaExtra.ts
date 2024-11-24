export const dsaExtra = {
    id: 6,
    name: "DSA: Extra Questions",
    questions: [
      // Bubble Sort
      {
        id: 1,
        text: "What is the best-case time complexity of Bubble Sort?",
        options: ["O(n)", "O(n²)", "O(log₂n)", "O(1)", "O(n log₂n)"],
        correctAnswer: "O(n)",
        explanation:
          "Bubble Sort has a best-case time complexity of O(n) when the array is already sorted, as it will detect this and terminate early after one pass.",
      },
      {
        id: 2,
        text: "What is the worst-case time complexity of Bubble Sort?",
        options: ["O(n)", "O(n²)", "O(log₂n)", "O(n log₂n)", "O(1)"],
        correctAnswer: "O(n²)",
        explanation:
          "Bubble Sort’s worst-case time complexity is O(n²), as it must compare and potentially swap each element multiple times when the array is in reverse order.",
      },
      {
        id: 3,
        text: "Which sorting algorithm repeatedly swaps adjacent elements if they are in the wrong order, effectively 'bubbling' larger elements to the end of the list?",
        options: ["Merge Sort", "Bubble Sort", "Selection Sort", "Heap Sort"],
        correctAnswer: "Bubble Sort",
        explanation:
          "Bubble Sort repeatedly compares and swaps adjacent elements, causing larger values to move to the end of the list, resembling a bubbling effect.",
      },
  
      // Selection Sort
      {
        id: 4,
        text: "What is the best-case time complexity of Selection Sort?",
        options: ["O(n)", "O(n²)", "O(log₂n)", "O(1)", "O(n log₂n)"],
        correctAnswer: "O(n²)",
        explanation:
          "Selection Sort always performs O(n²) comparisons, even in the best case, as it looks for the minimum element in the unsorted portion each time.",
      },
      {
        id: 5,
        text: "What is the worst-case time complexity of Selection Sort?",
        options: ["O(n)", "O(n²)", "O(log₂n)", "O(n log₂n)", "O(1)"],
        correctAnswer: "O(n²)",
        explanation:
          "The worst-case time complexity for Selection Sort is O(n²), as it must iterate through all elements to find the minimum for each position.",
      },
      {
        id: 6,
        text: "Which sorting algorithm works by selecting the minimum element from the unsorted portion and swapping it with the first unsorted element, moving from the start to the end of the list?",
        options: ["Merge Sort", "Selection Sort", "Insertion Sort", "Bubble Sort"],
        correctAnswer: "Selection Sort",
        explanation:
          "Selection Sort works by repeatedly selecting the smallest element from the unsorted part and swapping it into its correct position.",
      },
  
      // Insertion Sort
      {
        id: 7,
        text: "What is the best-case time complexity of Insertion Sort?",
        options: ["O(n)", "O(n²)", "O(log₂n)", "O(1)", "O(n log₂n)"],
        correctAnswer: "O(n)",
        explanation:
          "Insertion Sort has a best-case time complexity of O(n) when the array is already sorted, as no shifting is necessary.",
      },
      {
        id: 8,
        text: "What is the worst-case time complexity of Insertion Sort?",
        options: ["O(n)", "O(n²)", "O(log₂n)", "O(n log₂n)", "O(1)"],
        correctAnswer: "O(n²)",
        explanation:
          "The worst-case time complexity of Insertion Sort is O(n²), which occurs when the array is sorted in reverse order, requiring maximum shifting.",
      },
      {
        id: 9,
        text: "Which sorting algorithm builds a sorted portion by repeatedly inserting elements into their correct positions within the sorted part?",
        options: ["Insertion Sort", "Quick Sort", "Heap Sort", "Bubble Sort"],
        correctAnswer: "Insertion Sort",
        explanation:
          "Insertion Sort works by building a sorted section, placing each new element into its correct position among the sorted elements.",
      },
  
      // Merge Sort
      {
        id: 10,
        text: "What is the best-case time complexity of Merge Sort?",
        options: ["O(n)", "O(n²)", "O(n log₂n)", "O(1)", "O(log₂n)"],
        correctAnswer: "O(n log₂n)",
        explanation:
          "Merge Sort consistently has a time complexity of O(n log₂n) across best, average, and worst cases, due to its divide-and-conquer approach.",
      },
      {
        id: 11,
        text: "What is the worst-case time complexity of Merge Sort?",
        options: ["O(n)", "O(n²)", "O(n log₂n)", "O(1)", "O(log₂n)"],
        correctAnswer: "O(n log₂n)",
        explanation:
          "Merge Sort always has a worst-case time complexity of O(n log₂n), as it divides the array in halves recursively and merges.",
      },
      {
        id: 12,
        text: "Which sorting algorithm divides the array into halves recursively, sorts each half, and merges them back together in sorted order?",
        options: ["Merge Sort", "Heap Sort", "Bubble Sort", "Quick Sort"],
        correctAnswer: "Merge Sort",
        explanation:
          "Merge Sort divides the array into two halves, sorts them recursively, and then merges them back in sorted order.",
      },
  
      // Quick Sort
      {
        id: 13,
        text: "What is the best-case time complexity of Quick Sort?",
        options: ["O(n)", "O(n²)", "O(n log₂n)", "O(log₂n)", "O(1)"],
        correctAnswer: "O(n log₂n)",
        explanation:
          "The best-case time complexity of Quick Sort is O(n log₂n) when the pivot selections consistently split the array evenly.",
      },
      {
        id: 14,
        text: "What is the worst-case time complexity of Quick Sort?",
        options: ["O(n)", "O(n²)", "O(n log₂n)", "O(log₂n)", "O(1)"],
        correctAnswer: "O(n²)",
        explanation:
          "Quick Sort’s worst-case time complexity is O(n²), occurring when pivots create unbalanced splits, as in an already sorted array with poor pivot choices.",
      },
      {
        id: 15,
        text: "Which sorting algorithm picks a pivot element and partitions the array into two halves, recursively sorting each half?",
        options: ["Merge Sort", "Quick Sort", "Selection Sort", "Bucket Sort"],
        correctAnswer: "Quick Sort",
        explanation:
          "Quick Sort selects a pivot and partitions elements around it, then recursively sorts each half.",
      },
  
      // Heap Sort
      {
        id: 16,
        text: "What is the best-case time complexity of Heap Sort?",
        options: ["O(n)", "O(n²)", "O(n log₂n)", "O(log₂n)", "O(1)"],
        correctAnswer: "O(n log₂n)",
        explanation:
          "Heap Sort has a consistent time complexity of O(n log₂n) across best, average, and worst cases, due to heap construction and extraction.",
      },
      {
        id: 17,
        text: "What is the worst-case time complexity of Heap Sort?",
        options: ["O(n)", "O(n²)", "O(n log₂n)", "O(log₂n)", "O(1)"],
        correctAnswer: "O(n log₂n)",
        explanation:
          "The worst-case time complexity of Heap Sort is O(n log₂n), as it uses a heap to extract elements in sorted order.",
      },
      {
        id: 18,
        text: "Which sorting algorithm utilises a binary heap data structure to organise elements before sorting them?",
        options: ["Heap Sort", "Quick Sort", "Merge Sort", "Bubble Sort"],
        correctAnswer: "Heap Sort",
        explanation:
          "Heap Sort uses a binary heap structure to repeatedly extract the maximum element and organise elements in sorted order.",
      },
  
      // Bucket Sort
      {
        id: 19,
        text: "What is the best-case time complexity of Bucket Sort?",
        options: ["O(n)", "O(n + k)", "O(n²)", "O(log₂n)", "O(1)"],
        correctAnswer: "O(n + k)",
        explanation:
          "The best-case time complexity of Bucket Sort is O(n + k) when elements are evenly distributed across the buckets.",
      },
      {
        id: 20,
        text: "What is the worst-case time complexity of Bucket Sort?",
        options: ["O(n)", "O(n + k)", "O(n²)", "O(log₂n)", "O(1)"],
        correctAnswer: "O(n²)",
        explanation:
          "Bucket Sort’s worst-case complexity is O(n²), which happens when all elements end up in one bucket, necessitating a slow sorting process within it.",
      },
      {
        id: 21,
        text: "Which sorting algorithm distributes elements into buckets, sorts each bucket, and then concatenates the results?",
        options: ["Bucket Sort", "Quick Sort", "Selection Sort", "Insertion Sort"],
        correctAnswer: "Bucket Sort",
        explanation:
          "Bucket Sort groups elements into multiple buckets, sorts each bucket individually, and combines them to form the sorted array.",
      },
  
      // Linear Search
      {
        id: 22,
        text: "What is the best-case time complexity of Linear Search?",
        options: ["O(n)", "O(log₂n)", "O(1)", "O(n²)", "O(n log₂n)"],
        correctAnswer: "O(1)",
        explanation:
          "In the best case, the target element is the first item in the list, so Linear Search only requires one comparison.",
      },
      {
        id: 23,
        text: "What is the worst-case time complexity of Linear Search?",
        options: ["O(n)", "O(log₂n)", "O(1)", "O(n²)", "O(n log₂n)"],
        correctAnswer: "O(n)",
        explanation:
          "The worst-case time complexity of Linear Search is O(n), as it may need to check every element in the list.",
      },
  
      // Binary Search
      {
        id: 24,
        text: "What is the best-case time complexity of Binary Search?",
        options: ["O(n)", "O(log₂n)", "O(1)", "O(n²)", "O(n log₂n)"],
        correctAnswer: "O(1)",
        explanation:
          "In the best case, the target element is the middle element in the list, so Binary Search only requires one comparison.",
      },
      {
        id: 25,
        text: "What is the worst-case time complexity of Binary Search?",
        options: ["O(n)", "O(log₂n)", "O(1)", "O(n²)", "O(n log₂n)"],
        correctAnswer: "O(log₂n)",
        explanation:
          "The worst-case time complexity of Binary Search is O(log₂n) as it repeatedly halves the search space.",
      },
      {
        id: 26,
        text: "What is the time complexity of Breadth-First Search (BFS) in a graph with V vertices and E edges?",
        options: ["O(V)", "O(E)", "O(V + E)", "O(V²)", "O(V log V)"],
        correctAnswer: "O(V + E)",
        explanation:
          "BFS has a time complexity of O(V + E), as it visits each vertex and edge once in an adjacency list representation.",
      },
      {
        id: 27,
        text: "What is the time complexity of Depth-First Search (DFS) in a graph with V vertices and E edges?",
        options: ["O(V)", "O(E)", "O(V + E)", "O(V²)", "O(V log V)"],
        correctAnswer: "O(V + E)",
        explanation:
          "DFS also has a time complexity of O(V + E), as it traverses each vertex and edge once in an adjacency list representation.",
      },
      {
        id: 28,
        text: "Which graph traversal algorithm uses a queue to keep track of the vertices to be visited next?",
        options: ["Depth-First Search (DFS)", "Breadth-First Search (BFS)", "Dijkstra's Algorithm", "Prim's Algorithm"],
        correctAnswer: "Breadth-First Search (BFS)",
        explanation:
          "BFS uses a queue data structure to maintain the order in which vertices are visited, allowing it to explore the graph level by level.",
      },
      {
        id: 29,
        text: "Which graph traversal algorithm uses a stack or recursion to explore each path as far as possible before backtracking?",
        options: ["Depth-First Search (DFS)", "Breadth-First Search (BFS)", "Kruskal's Algorithm", "Prim's Algorithm"],
        correctAnswer: "Depth-First Search (DFS)",
        explanation:
          "DFS uses a stack (or recursion) to explore each path to its end before backtracking, making it a depth-based exploration method.",
      },
      {
        id: 30,
        text: "Which traversal algorithm is better suited for finding the shortest path in an unweighted graph?",
        options: ["Depth-First Search (DFS)", "Breadth-First Search (BFS)", "Prim's Algorithm", "A* Search"],
        correctAnswer: "Breadth-First Search (BFS)",
        explanation:
          "BFS is ideal for finding the shortest path in an unweighted graph because it explores each level completely before moving to the next, ensuring the shortest path is found first.",
      },
      {
        id: 31,
        text: "Which traversal method would you use if you need to visit all nodes in a tree and perform an operation on each node, but you want to complete one entire branch before moving to other branches?",
        options: ["Depth-First Search (DFS)", "Breadth-First Search (BFS)", "Dijkstra's Algorithm", "Bellman-Ford Algorithm"],
        correctAnswer: "Depth-First Search (DFS)",
        explanation:
          "DFS is ideal for tasks requiring a complete traversal of one branch before moving on, as it dives deep into each path before backtracking to explore others.",
      },
      {
        id: 32,
        text: "Which traversal is most likely to find a solution faster in a graph where nodes are shallowly connected to the target node?",
        options: ["Depth-First Search (DFS)", "Breadth-First Search (BFS)", "Dijkstra's Algorithm", "Bellman-Ford Algorithm"],
        correctAnswer: "Breadth-First Search (BFS)",
        explanation:
          "BFS is more efficient for finding solutions where nodes are shallowly connected to the target, as it explores each level fully before moving deeper, helping it find the nearest connections sooner.",
      },
      {
        id: 33,
        text: "What is a key difference between DFS and BFS in terms of space complexity?",
        options: [
          "DFS has higher space complexity than BFS",
          "BFS has higher space complexity than DFS",
          "DFS and BFS have the same space complexity",
          "BFS and DFS are not comparable in space complexity",
        ],
        correctAnswer: "BFS has higher space complexity than DFS",
        explanation:
          "BFS typically has higher space complexity because it must store all nodes at the current level in the queue, which can grow significantly. DFS, especially when using recursion, requires less space as it only needs to store a single path at a time.",
      },
      {
        id: 34,
        text: "In which scenario would Depth-First Search (DFS) be preferable over Breadth-First Search (BFS)?",
        options: [
          "When searching for the shortest path in an unweighted graph",
          "When exploring a large graph where space usage is a concern",
          "When finding nodes that are shallowly connected",
          "When using a queue-based approach",
        ],
        correctAnswer: "When exploring a large graph where space usage is a concern",
        explanation:
          "DFS uses less space than BFS, making it more suitable for exploring large graphs where storing all nodes at a particular depth would be inefficient.",
      },
      {
        id: 35,
        text: "Which traversal algorithm would be more effective in checking if a path exists between two nodes in a graph?",
        options: ["Depth-First Search (DFS)", "Breadth-First Search (BFS)", "Dijkstra's Algorithm", "Bellman-Ford Algorithm"],
        correctAnswer: "Depth-First Search (DFS)",
        explanation:
          "Both DFS and BFS can determine if a path exists between two nodes, but DFS is often used for path existence checks as it explores each path fully, making it straightforward to determine connectivity.",
      },
 // Big-O Complexity Descriptions

 {
    id: 36,
    text: "What does O(1) or constant time complexity mean?",
    options: [
      "The runtime grows proportionally to the input size",
      "The runtime remains constant regardless of input size",
      "The runtime grows exponentially with the input size",
      "The runtime grows quadratically with the input size",
    ],
    correctAnswer: "The runtime remains constant regardless of input size",
    explanation:
      "O(1) or constant time complexity means the operation’s runtime does not change with the input size, such as accessing an element by index in an array.",
  },
  {
    id: 37,
    text: "Which of the following time complexities represents a linear relationship with the input size?",
    options: ["O(n)", "O(1)", "O(n²)", "O(log₂n)"],
    correctAnswer: "O(n)",
    explanation:
      "O(n) or linear time complexity means the runtime grows proportionally with the input size, like looping through an array once.",
  },
  {
    id: 38,
    text: "What does O(n²) or quadratic time complexity mean?",
    options: [
      "The runtime grows linearly with the input size",
      "The runtime remains constant regardless of input size",
      "The runtime grows quadratically with the input size",
      "The runtime grows logarithmically with the input size",
    ],
    correctAnswer: "The runtime grows quadratically with the input size",
    explanation:
      "O(n²) indicates quadratic time complexity, where the runtime grows with the square of the input size, common in algorithms with nested loops over the same data.",
  },
  {
    id: 39,
    text: "What does O(log₂n) or logarithmic time complexity mean?",
    options: [
      "The runtime remains constant regardless of input size",
      "The runtime grows quadratically with the input size",
      "The runtime grows linearly with the input size",
      "The runtime grows logarithmically with the input size",
    ],
    correctAnswer: "The runtime grows logarithmically with the input size",
    explanation:
      "O(log₂n) indicates logarithmic time complexity, where the runtime grows in proportion to the logarithm of the input size, typical in divide-and-conquer algorithms like Binary Search.",
  },
  {
    id: 40,
    text: "Which time complexity describes an exponential growth in runtime with respect to the input size?",
    options: ["O(n!)", "O(n)", "O(n²)", "O(1)"],
    correctAnswer: "O(n!)",
    explanation:
      "O(n!) represents factorial time complexity, where the runtime grows extremely quickly as input size increases. This is seen in algorithms that calculate all permutations, like the brute-force solution to the travelling salesman problem.",
  },
  {
    id: 41,
    text: "Match the following time complexities with their descriptions:\n- O(n): __ \n- O(log₂n): __ \n- O(n²): __",
    options: [
      "O(n) - Linear, O(log₂n) - Logarithmic, O(n²) - Quadratic",
      "O(n) - Constant, O(log₂n) - Linear, O(n²) - Exponential",
      "O(n) - Quadratic, O(log₂n) - Constant, O(n²) - Logarithmic",
      "O(n) - Logarithmic, O(log₂n) - Quadratic, O(n²) - Constant",
    ],
    correctAnswer: "O(n) - Linear, O(log₂n) - Logarithmic, O(n²) - Quadratic",
    explanation:
      "O(n) is linear time complexity, O(log₂n) is logarithmic time complexity, and O(n²) is quadratic time complexity.",
  },
  {
    id: 42,
    text: "Which Big-O notation best describes an algorithm that splits data into two equal parts and processes one part?",
    options: ["O(log₂n)", "O(n²)", "O(1)", "O(n) "],
    correctAnswer: "O(log₂n)",
    explanation:
      "O(log₂n) represents logarithmic complexity, typical in divide-and-conquer algorithms like Binary Search, where the data size is halved with each step.",
  },
],
};
  