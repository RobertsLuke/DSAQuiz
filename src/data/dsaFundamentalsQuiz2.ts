export const dsaFundamentalsQuiz2 = {
  id: 4,
  name: "DSA Fundamentals: Search, Sort & Recursion",
  questions: [
    {
      id: 1,
      text: "What is the maximum number of elements that could be examined during a binary search of a sorted array of 200 elements?",
      options: ["12", "13", "8", "200", "1"],
      correctAnswer: "8",
      explanation:
        "For binary search, the maximum number of elements examined is log₂(n) rounded up. For 200 elements, log₂(200) ≈ 7.64, which rounds up to 8 comparisons maximum.",
    },
    {
      id: 2,
      text: "During an Insertion Sort what will happen to an item after it has been inserted into the partially sorted group?",
      options: [
        "The item will be moved out of this partially sorted group",
        "The item will never be moved again - it will be in the correct position",
        "The item will be never be shifted to the left (the opposite side of the unsorted group)",
        "The item will always be swapped with each item considered during the rest of the sort",
        "The partially sorted group in which the item was placed, will steadily decrease in size",
      ],
      correctAnswer:
        "The item will be never be shifted to the left (the opposite side of the unsorted group)",
      explanation:
        "In insertion sort, once an element is placed in its correct position within the sorted portion, it will never need to move leftward again, as all elements to its left are already smaller than it.",
    },
    {
      id: 3,
      text: "What is the maximum number of elements that could be examined during a linear search of an array of 200 elements?",
      options: ["8", "200", "50", "100", "1"],
      correctAnswer: "200",
      explanation:
        "In linear search, in the worst case (when the element is not found or is the last element), we need to examine every element in the array. Therefore, for an array of 200 elements, we might need to examine all 200 elements.",
    },
    {
      id: 4,
      text: "What is the worst case complexity of Linear Search in a sorted group of elements?",
      options: ["O(n²)", "O(n)", "O(nlog₂n)", "O(1)", "O(log₂n)"],
      correctAnswer: "O(n)",
      explanation:
        "Even in a sorted array, linear search still needs to potentially examine every element in the worst case (when the element is not found or is the last element), giving it O(n) complexity.",
    },
    {
      id: 5,
      text: "What is the best case complexity (Big O) of Selection Sort?",
      options: ["O(1)", "O(n²)", "O(log₂n)", "O(n)", "O(nlog₂n)"],
      correctAnswer: "O(n²)",
      explanation:
        "Selection sort always performs the same number of comparisons regardless of the initial arrangement of elements. Even in the best case, it must scan the entire unsorted portion to find the minimum element for each position.",
    },
    {
      id: 6,
      text: "What is the worst case complexity (Big O) of Selection Sort?",
      options: ["O(1)", "O(n)", "O(n²)", "O(nlog₂n)", "O(log₂n)"],
      correctAnswer: "O(n²)",
      explanation:
        "Selection sort's worst case is the same as its best case - O(n²). It always makes the same number of comparisons regardless of input order.",
    },
    {
      id: 7,
      text: "What is printed by the call Test(4)?",
      code: `Test(n)
     output n;
     if n > 0 then
        Test(n-2);
     end if;
     output n;
  end;`,
      options: [
        "4 4 2 2 0 0",
        "4 2 0 0 2 4",
        "4 2 0 2 4",
        "4 3 2 1 0 0 1 2 3 4",
        "4 2 2 4",
      ],
      correctAnswer: "4 2 0 0 2 4",
      explanation:
        "This recursive function outputs n before and after the recursive call. Following the execution: outputs 4, calls Test(2), outputs 2, calls Test(0), outputs 0, no more recursive calls, outputs 0 again, returns to Test(2) which outputs 2, returns to Test(4) which outputs 4.",
    },
    {
      id: 8,
      text: "How many hashes (#) are printed by the method call example(5)?",
      code: `example (n)
     if (n > 0) then
        example(n / 2);
        example(n / 2);
     end if;
     Output ("#");
  end;`,
      options: ["15", "11", "3", "Some other value", "7"],
      correctAnswer: "15",
      explanation:
        "Using integer division: example(5) calls example(2) twice, each example(2) calls example(1) twice, each example(1) calls example(0) twice. This forms a tree with 15 nodes total, each printing one #.",
    },
    {
      id: 9,
      text: "What is printed by the call cheers(2)?",
      code: `cheers (times)
     Output ("Hip");
     if (times > 0) then
        cheers(times - 1);
        Output ("Hooray");
     end if;
  end cheers;`,
      options: [
        "Hip Hip Hooray Hooray",
        "Hooray Hip Hip Hooray",
        "None of the combinations listed",
        "Hip Hooray Hooray Hip",
        "Hip Hooray Hip Hooray",
      ],
      correctAnswer: "None of the combinations listed",
      explanation:
        "The function outputs 'Hip', then recursively calls with times-1, and outputs 'Hooray' after the recursive call returns. For cheers(2), it prints: Hip Hip Hip Hooray Hooray.",
    },
    {
      id: 10,
      text: "What is printed by the call cheers(2)?",
      code: `cheers (times)
     if (times > 0) then
        Output ("Hip");
        cheers(times - 1);
        Output ("Hooray");
     end if;
  end cheers;`,
      options: [
        "Hip Hooray Hip Hooray",
        "Hooray Hip Hip Hooray",
        "Hip Hooray Hooray Hip",
        "Hip Hip Hooray Hooray",
        "None of the above",
      ],
      correctAnswer: "Hip Hip Hooray Hooray",
      explanation:
        "For times>0, the function prints 'Hip', makes a recursive call, then prints 'Hooray'. For cheers(2): prints Hip, calls cheers(1) which prints Hip, calls cheers(0) which does nothing, prints Hooray, returns to cheers(2) which prints Hooray.",
    },
    {
      id: 11,
      text: "Given the following recursive algorithm:",
      code: `cheers (times)
   Output ("Hip");
   if (times > 0) then
      cheers(times - 1);
      Output ("Hooray");
   end if;
end cheers;`,
      options: [
        "Hip Hooray Hip Hooray Hip",
        "Hip Hip Hooray Hooray Hooray",
        "Hip Hip Hip Hooray Hooray",
        "Hip Hip Hip Hooray Hooray Hooray",
        "None of the above",
      ],
      correctAnswer: "Hip Hip Hip Hooray Hooray",
      explanation:
        "The function outputs 'Hip', then recursively calls with times-1, and outputs 'Hooray' after the recursive call returns. For cheers(2), it prints: Hip, then calls cheers(1), which prints Hip, then calls cheers(0), which does nothing, then prints Hooray, then returns to cheers(2), which prints Hooray again.",
    },
    {
      id: 12,
      text: "Given the following recursive algorithm:",
      code: `cheers (times)
   if (times > 0) then
      Output ("Hip");
      cheers(times - 1);
   end if;
   Output ("Hooray");
end cheers;`,
      options: [
        "Hip Hooray Hip Hooray",
        "Hip Hip Hooray Hooray",
        "Hip Hooray Hooray",
        "Hip Hip Hooray",
        "None of the above",
      ],
      correctAnswer: "Hip Hooray Hooray",
      explanation:
        "For cheers(1), it first checks if times > 0, which is true, then prints Hip, makes a recursive call to cheers(0), which does nothing, then prints Hooray as it returns from cheers(1). Finally, Hooray is printed again when it completes the original call.",
    },

    {
      id: 13,
      text: "What is the effect of the statement: p = p.link on a singly linked list consisting of only one node referenced by p?",
      code: "p = p.link",
      options: [
        "The statement is valid. After execution of the statement, P will be assigned the value of the data item stored in the node.",
        "The statement is valid, but does something different to the other suggestions.",
        "The statement is invalid.",
        "The statement is valid. After execution of the statement, P will be assigned the value null.",
        "The statement is valid. After execution of the statement, the linked list will remain unchanged.",
      ],
      correctAnswer:
        "The statement is valid. After execution of the statement, P will be assigned the value null.",
      explanation:
        "In a singly linked list with only one node, the link field of that node is null. When p is assigned p.link, it will therefore be assigned null.",
    },
    {
      id: 14,
      text: "Which one of the following statements is a valid description for this linked list?",
      image: "/assets/singly-linked-list-1.png",
      options: [
        "The singly linked list can be used to represent a queue and can be used to represent a stack",
        "None of these are valid descriptions",
        "The singly linked list can be used to represent a queue but can not be used to represent a stack",
        "The singly linked list can be used to represent a binary tree",
        "The singly linked list can be used to represent a stack but can not be used to represent a queue",
        "The singly linked list can not be used to represent a queue and can not be used to represent a stack",
      ],
      correctAnswer:
        "The singly linked list can be used to represent a queue and can be used to represent a stack",
      explanation:
        "A singly linked list can be used to implement both stacks and queues. For a stack, we can add and remove from the same end (typically the head). For a queue, we can add at one end and remove from the other.",
    },
    {
      id: 15,
      text: "What is the output displayed by the following recursive algorithm Secret when applied to the singly linked list (SLL) given in the figure below?",
      code: `Secret (head)
     if (head != null) then
          Secret(head.link)
          Output head.data
     end if
end`,
      image: "/assets/singly-linked-list-2.png",
      options: [
        "Displays: D",
        "Displays: A B C D",
        "Displays: A A A A",
        "Displays: D C B A",
        "Displays: D D D D",
      ],
      correctAnswer: "Displays: D C B A",
      explanation:
        "This is a recursive algorithm that traverses to the end of the list first (due to the recursive call before the output), then prints each node's data as it returns. This results in printing the list in reverse order.",
    },
    {
      id: 16,
      text: "What is the effect of the following statement on the linked list as given in the figure below?",
      code: "p = p.link",
      image: "/assets/singly-linked-list-3.png",
      options: [
        "The statement is invalid.",
        "The statement is valid. After execution of the statement, P will be assigned the value null.",
        "The statement is valid. After execution of the statement, P will be assigned the value AA.",
        "The statement is valid. After execution of the statement, the linked list will remain unchanged.",
        "None of the above",
      ],
      correctAnswer:
        "The statement is valid. After execution of the statement, the linked list will remain unchanged.",
      explanation:
        "The statement p = p.link only changes where p points to, it doesn't modify the structure of the linked list itself. The list remains unchanged, though p's reference changes.",
    },
    {
      id: 17,
      text: "To easily remove a node that is not the head of a SLL conveniently, you need to have a reference to...",
      options: [
        "the node that comes after the node to be removed",
        "the node that precedes it",
        "the node itself",
        "impossible to determine",
      ],
      correctAnswer: "the node that precedes it",
      explanation:
        "To remove a node from a singly linked list, you need access to the preceding node so you can update its link field to skip over the removed node. Without the preceding node, you cannot properly maintain the list's structure.",
    },

    // Binary Trees Questions
    {
      id: 18,
      text: "A binary tree is a collection of items in which each item has:",
      options: [
        "at most three successors",
        "one successor",
        "exactly two sussessors",
        "no successors",
        "at most two successors",
      ],
      correctAnswer: "at most two successors",
      explanation:
        "A binary tree is defined by having at most two children (successors) for each node. This is a fundamental characteristic that distinguishes binary trees from other tree structures.",
    },
    {
      id: 19,
      text: "Which traversal of a binary tree does the following algorithm produce?",
      code: `Traverse (Root)
   if Root not equal to null then
      Output Root.Data
      Traverse (Root.Left)
      Traverse (Root.Right)
   end if
end`,
      options: [
        "PostOrder Traversal (LRV)",
        "Reverse PreOrder Traversal (VRL)",
        "PreOrder Traversal (VLR)",
        "InOrder Traversal (LVR)",
        "Reverse PostOrder Traversal (RLV)",
      ],
      correctAnswer: "PreOrder Traversal (VLR)",
      explanation:
        "This is a PreOrder traversal because it visits the node (V) first, then recursively traverses the left subtree (L), and finally the right subtree (R), following the pattern Visit-Left-Right (VLR).",
    },
    {
      id: 20,
      text: "Insert the following letters (in the order given) into an empty binary search tree: J R D G T E M H P A F Q. If the root node was deleted from the binary search tree which one of the following nodes could be used to replace the root node?",
      options: ["D", "T", "None of these letters", "R", "M"],
      correctAnswer: "M",
      explanation:
        "When replacing a deleted node in a BST, you need either the largest value from the left subtree (inorder predecessor) or the smallest value from the right subtree (inorder successor). In this case, M is the smallest value in the right subtree of J, making it a valid replacement for the root.",
    },
    {
      id: 21,
      text: "Insert the following letters (in the order given) into an empty binary search tree: J R D G T E M H P A F Q. In what order are the nodes of the binary search tree visited during a PostOrder traversal?",
      options: [
        "J D A G E F H R M P Q T",
        "J D R A G M T E H P F Q",
        "A D E F G H J M P Q R T",
        "A F E H G D Q P M T R J",
        "None of the above",
      ],
      correctAnswer: "A F E H G D Q P M T R J",
      explanation:
        "In a PostOrder traversal (LRV), we visit the left subtree, then the right subtree, and finally the root. This produces this specific sequence for the given BST structure.",
    },
    {
      id: 22,
      text: "Which formula gives the maximum number of nodes in a binary tree of height h? (Note: The height of a tree consisting of one node is one).",
      options: ["2h+1", "2h-1", "None of these suggestions", "2ʰ+1", "2ʰ-1"],
      correctAnswer: "2ʰ-1",
      explanation:
        "For a binary tree of height h, the maximum number of nodes is 2ʰ-1. This comes from summing the maximum number of nodes at each level (2⁰ + 2¹ + 2² + ... + 2ʰ⁻¹ = 2ʰ-1).",
    },
    {
      id: 23,
      text: "What function does the following algorithm called Secret perform?",
      code: `Secret (Root)
   if Root = null then
      return 0;
   else
      return 1 + Secret (Root.Left) + Secret (Root.Right);
   end if;
end;`,
      options: [
        "Determines the height of a binary tree",
        "Counts the number of children in a binary tree",
        "Counts the number of branches in a binary tree",
        "Counts the number of nodes in a binary tree",
        "Counts the number of leaves in a binary tree",
      ],
      correctAnswer: "Counts the number of nodes in a binary tree",
      explanation:
        "This recursive algorithm adds 1 for the current node and recursively counts nodes in both left and right subtrees. The sum gives the total number of nodes in the tree. It returns 0 for null subtrees.",
    },
    {
      id: 24,
      text: "What is the least number of leaf nodes in a binary tree of height 4? (Note: A binary tree with only one node has a height of 1)",
      options: ["1", "5", "4", "8", "None of these"],
      correctAnswer: "1",
      explanation:
        "A binary tree of height 4 can have as few as one leaf node. This occurs when each non-leaf node has exactly one child, forming a linear path of length 4 (like a linked list).",
    },
    {
      id: 25,
      text: "Which formula gives the maximum number of nodes in the nth level of a binary tree? (Note: The root is at level 0.)",
      options: ["n²", "n²-1", "2ⁿ", "2ⁿ+1", "None of the above"],
      correctAnswer: "2ⁿ",
      explanation:
        "At each level n of a binary tree, the maximum number of nodes is 2ⁿ. This is because each node can have at most 2 children, so the maximum doubles at each level (level 0: 2⁰=1, level 1: 2¹=2, level 2: 2²=4, etc).",
    },
    {
      id: 26,
      text: "Given a binary tree of 14 nodes. What is the minimum height of this tree? Note: The height of a tree consisting of 1 node is 1.",
      options: ["4", "2", "5", "3", "1"],
      correctAnswer: "4",
      explanation:
        "The minimum height occurs in the most compact form (complete binary tree). With 14 nodes, you need at least 4 levels to fit all nodes, as level 1 has 1 node, level 2 has 2 nodes, level 3 has 4 nodes, and level 4 has the remaining 7 nodes.",
    },
    {
      id: 27,
      text: "A binary tree is a binary search tree if:",
      options: [
        "Every non-leaf node has children whose keys are less than or equal to the parent.",
        "Every non-leaf node has children whose keys are greater than or equal to the parent.",
        "Every left child has a key less than the parent and every right child has a key greater or equal to the parent.",
        "In the path from the root node to every leaf node, the key of each node is greater than or equal to the key of its parent.",
        "Every non-leaf node has two child nodes",
      ],
      correctAnswer:
        "Every left child has a key less than the parent and every right child has a key greater or equal to the parent.",
      explanation:
        "This is the defining property of a binary search tree (BST). It ensures that for any node, all values in the left subtree are less than the node's value, and all values in the right subtree are greater than or equal to the node's value.",
    },
  ],
};
