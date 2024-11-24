export const interprocessQuiz = {
    id: 2,
    name: "OSI 6 - Interprocess Communication",
    questions: [
      {
        id: 2,
        text: "What is IPC?",
        options: [
          "OS mechanisms for process cooperation and data sharing",
          "Internet Protocol Connection",
          "Internal Process Control",
          "Input Process Configuration",
          "Integrated Program Communication"
        ],
        correctAnswer: "OS mechanisms for process cooperation and data sharing",
        explanation: "IPC (Interprocess Communication) consists of mechanisms provided by the operating system that enable processes to cooperate and share data with each other, facilitating process interaction and coordination."
      },
      {
        id: 2,
        text: "Why is IPC needed?",
        options: [
          "Processes have private address spaces, no shared variables",
          "To slow down process execution",
          "To isolate processes completely",
          "To increase memory usage",
          "To prevent process communication"
        ],
        correctAnswer: "Processes have private address spaces, no shared variables",
        explanation: "IPC is necessary because processes operate in private address spaces and cannot directly share variables. This isolation is a security feature, but means special mechanisms are needed for processes to communicate."
      },
      {
        id: 3,
        text: "What is the broader view of IPC?",
        options: [
          "Includes processes on the same and different systems",
          "Only works on single computers",
          "Only works between identical processes",
          "Only functions within one program",
          "Only operates in the kernel"
        ],
        correctAnswer: "Includes processes on the same and different systems",
        explanation: "The broader view of IPC encompasses communication between processes both on the same system and on different systems, enabling both local and distributed process communication."
      },
      {
        id: 4,
        text: "What are the advantages of process cooperation?",
        options: [
          "Information sharing, computation speed-up, and modularity",
          "Only data storage improvements",
          "Only process isolation",
          "Only memory management",
          "Only system security"
        ],
        correctAnswer: "Information sharing, computation speed-up, and modularity",
        explanation: "Process cooperation offers three main advantages: the ability to share information between processes, increased computation speed through parallel processing, and improved system modularity."
      },
      {
        id: 5,
        text: "What are the key questions about IPC?",
        options: [
          "How do processes share/communicate and what issues arise with sharing data",
          "How fast can processes run",
          "How much memory is needed",
          "What programming language to use",
          "When to terminate processes"
        ],
        correctAnswer: "How do processes share/communicate and what issues arise with sharing data",
        explanation: "The key questions in IPC focus on the mechanisms of process communication/sharing and the challenges that arise when sharing data between processes."
      },
      {
        id: 6,
        text: "What are the 4 main IPC mechanisms?",
        options: [
          "Pipes/sockets (stream-oriented), shared memory (memory-oriented), message passing (message-oriented), remote procedure call (procedure-oriented)",
          "Files, memory, CPU, and network",
          "Reading, writing, executing, and deleting",
          "Input, processing, output, and storage",
          "Keyboard, mouse, display, and printer"
        ],
        correctAnswer: "Pipes/sockets (stream-oriented), shared memory (memory-oriented), message passing (message-oriented), remote procedure call (procedure-oriented)",
        explanation: "The four main IPC mechanisms are pipes/sockets for stream-based communication, shared memory for direct memory access, message passing for discrete data exchange, and remote procedure calls for procedure-oriented communication."
      },
      {
        id: 7,
        text: "How do pipes and sockets work?",
        options: [
          "Continuous streams of bytes over connections",
          "Direct memory sharing",
          "Message queuing",
          "Remote procedure calls",
          "File system operations"
        ],
        correctAnswer: "Continuous streams of bytes over connections",
        explanation: "Pipes and sockets work by establishing connections between processes and enabling continuous streams of bytes to flow between them, providing a stream-oriented communication mechanism."
      },
      {
        id: 8,
        text: "How does shared memory work?",
        options: [
          "Shared variables in memory",
          "Through file system",
          "Via network protocols",
          "Using CPU registers",
          "Through external devices"
        ],
        correctAnswer: "Shared variables in memory",
        explanation: "Shared memory works by allowing multiple processes to access shared variables in memory, providing a direct and efficient way for processes to share data."
      },
      {
        id: 9,
        text: "What is message passing?",
        options: [
          "Sending discrete data chunks (messages)",
          "Sharing memory directly",
          "Using procedure calls",
          "Continuous data streaming",
          "File transfer protocols"
        ],
        correctAnswer: "Sending discrete data chunks (messages)",
        explanation: "Message passing is an IPC mechanism where processes communicate by sending discrete chunks of data (messages) to each other, rather than sharing memory or streaming continuous data."
      },
      {
        id: 10,
        text: "What is an RPC?",
        options: [
          "Communication via procedure calls",
          "Random Process Control",
          "Rapid Process Creation",
          "Remote Process Control",
          "Recursive Process Communication"
        ],
        correctAnswer: "Communication via procedure calls",
        explanation: "RPC (Remote Procedure Call) is a mechanism that enables processes to communicate through procedure calls, making distributed computing appear similar to local procedure calls."
      },
      {
        id: 11,
        text: "What do Process A and Process B rely on for communication in a single system?",
        image: "/DSAQuiz/assets/osi6-1-single-system-ipc.png",
        options: [
          "Users' IPC APIs and the Operating System",
          "Only direct memory access",
          "Only network protocols",
          "Only file systems",
          "Only hardware interfaces"
        ],
        correctAnswer: "Users' IPC APIs and the Operating System",
        explanation: "According to the diagram, processes A and B communicate through IPC APIs provided by the operating system. The diagram shows these processes interacting via the operating system layer, which provides the necessary APIs and mechanisms for communication."
      },
      {
        id: 12,
        text: "Who does the 'hard work' of IPC according to the diagram?",
        image: "/DSAQuiz/assets/osi6-1-single-system-ipc.png",
        options: [
          "The Operating System",
          "The user processes",
          "The hardware",
          "The network",
          "The applications"
        ],
        correctAnswer: "The Operating System",
        explanation: "The diagram clearly shows the operating system layer between the processes, indicating that it performs the 'hard work' of facilitating IPC by managing the underlying mechanisms, synchronization, and resource allocation needed for processes to communicate."
      },
      {
        id: 13,
        text: "According to the diagram, what resources might the OS manage during IPC?",
        image: "/DSAQuiz/assets/osi6-1-single-system-ipc.png",
        options: [
          "Disk, files, and other shared resources",
          "Only CPU time",
          "Only network bandwidth",
          "Only memory allocation",
          "Only process scheduling"
        ],
        correctAnswer: "Disk, files, and other shared resources",
        explanation: "The diagram shows the operating system managing shared resources between processes, including disk access, files, and other system resources. This management layer ensures proper coordination and access to these shared resources during interprocess communication."
      },
      {
        id: 14,
        text: "What type of IPC is illustrated in this diagram?",
        image: "/DSAQuiz/assets/osi6-1-single-system-ipc.png",
        options: [
          "IPC between processes within the same operating system",
          "IPC between different operating systems",
          "IPC across networks only",
          "IPC between virtual machines",
          "IPC between different computers"
        ],
        correctAnswer: "IPC between processes within the same operating system",
        explanation: "The diagram illustrates IPC occurring between Process A and Process B within a single operating system. This is shown by both processes communicating through the same operating system layer, representing local interprocess communication within a single system."
      }
,
{
    id: 15,
    text: "According to the diagram, how do processes on different systems communicate?",
    image: "/DSAQuiz/assets/osi6-2-ipc-different.png",
    options: [
      "Through Users' IPC APIs and network connections",
      "Through direct memory access",
      "Through shared file systems only",
      "Through physical hardware only",
      "Through user intervention"
    ],
    correctAnswer: "Through Users' IPC APIs and network connections",
    explanation: "The diagram shows that processes on different systems communicate using IPC APIs provided to users, with network connections bridging the gap between the different operating systems. This enables processes to communicate across system boundaries."
  },
  {
    id: 16,
    text: "What role does the network play in IPC across systems as shown in the diagram?",
    image: "/DSAQuiz/assets/osi6-2-ipc-different.png",
    options: [
      "It connects the operating systems to facilitate communication",
      "It stores the shared data",
      "It executes the processes",
      "It manages system resources",
      "It provides user interfaces"
    ],
    correctAnswer: "It connects the operating systems to facilitate communication",
    explanation: "The diagram illustrates that the network serves as the connecting layer between different operating systems, providing the infrastructure necessary for processes on different systems to communicate with each other."
  },
  {
    id: 17,
    text: "According to the diagram, who handles the complexity of cross-system communication?",
    image: "/DSAQuiz/assets/osi6-2-ipc-different.png",
    options: [
      "The Operating Systems on both ends",
      "The user processes directly",
      "The network hardware only",
      "The application software",
      "The end users"
    ],
    correctAnswer: "The Operating Systems on both ends",
    explanation: "The diagram shows that the operating systems on both ends handle the complexities of cross-system communication. They manage the network connections and provide the necessary abstractions for processes to communicate across system boundaries."
  },
  {
    id: 18,
    text: "Based on the diagram, what distinguishes cross-system IPC from single-system IPC?",
    image: "/DSAQuiz/assets/osi6-2-ipc-different.png",
    options: [
      "The use of a network for communication",
      "The type of processes involved",
      "The speed of communication",
      "The size of data transferred",
      "The number of processes involved"
    ],
    correctAnswer: "The use of a network for communication",
    explanation: "The key distinction shown in the diagram between cross-system and single-system IPC is the presence of a network layer connecting the operating systems. This network connection is necessary for processes on different systems to communicate, unlike in single-system IPC where processes communicate through the same operating system."
  }
,    {
    id: 19,
    text: "What is an API?",
    options: [
      "An interface to a library of software functions enabling communication between computers or programs",
      "A type of computer hardware",
      "A network protocol",
      "A programming language",
      "A type of operating system"
    ],
    correctAnswer: "An interface to a library of software functions enabling communication between computers or programs",
    explanation: "An API (Application Programming Interface) provides a standardized way for programs to communicate, offering a library of functions that enable interaction between different software components or systems."
  },
  {
    id: 20,
    text: "What are traditional APIs for IPC typically used for?",
    options: [
      "They are specific to IPC within a single system",
      "They are only for network communication",
      "They are used for hardware control",
      "They are for graphics processing",
      "They are for database management"
    ],
    correctAnswer: "They are specific to IPC within a single system",
    explanation: "Traditional IPC APIs were designed specifically for communication between processes running on the same system, focusing on local inter-process communication rather than distributed systems."
  },
  {
    id: 21,
    text: "What trend has emerged with IPC APIs?",
    options: [
      "Using different-systems APIs even for processes running on the same system",
      "Using only single-system APIs",
      "Eliminating APIs completely",
      "Using hardware-specific APIs",
      "Using only network protocols"
    ],
    correctAnswer: "Using different-systems APIs even for processes running on the same system",
    explanation: "A trend has emerged where distributed systems APIs are being used even for local communication, providing consistency in how processes communicate regardless of their location."
  },
  {
    id: 22,
    text: "What has been a focus in recent years for API development?",
    options: [
      "Developing APIs specifically for distributed systems",
      "Developing APIs only for single systems",
      "Removing API support entirely",
      "Creating hardware-specific APIs",
      "Limiting API functionality"
    ],
    correctAnswer: "Developing APIs specifically for distributed systems",
    explanation: "Recent API development has focused on distributed systems, recognizing the growing need for communication between processes across different systems and networks."
  },
  {
    id: 23,
    text: "What is a pipe in IPC?",
    options: [
      "A simple, stream-based communication mechanism with input and output ends",
      "A physical connection between computers",
      "A type of network cable",
      "A memory storage device",
      "A type of processor"
    ],
    correctAnswer: "A simple, stream-based communication mechanism with input and output ends",
    explanation: "A pipe is a fundamental IPC mechanism that provides a stream-based communication channel with distinct input and output ends, allowing processes to communicate through a byte stream."
  },
  {
    id: 24,
    text: "Where are pipes commonly used?",
    options: [
      "In UNIX-like systems, such as Linux",
      "Only in Windows systems",
      "Only in mobile devices",
      "Only in game consoles",
      "Only in web browsers"
    ],
    correctAnswer: "In UNIX-like systems, such as Linux",
    explanation: "Pipes are a common IPC mechanism in UNIX-like operating systems, including Linux, where they provide a simple and efficient way for processes to communicate."
  },
  {
    id: 25,
    text: "What happens if there's no data in a pipe when a process tries to read from it?",
    options: [
      "The reading process blocks until data is available",
      "The process crashes",
      "The pipe is automatically closed",
      "An error is returned immediately",
      "The process continues with empty data"
    ],
    correctAnswer: "The reading process blocks until data is available",
    explanation: "When a process attempts to read from an empty pipe, it enters a blocked state and waits until data becomes available. This blocking behavior is part of pipe's synchronization mechanism."
  },
  {
    id: 26,
    text: "How are pipes typically created and used?",
    options: [
      "A parent process creates a pipe to enable communication between two child processes",
      "Pipes are created automatically by the system",
      "Each process creates its own pipe",
      "Pipes are created by the network",
      "Pipes are created by user applications"
    ],
    correctAnswer: "A parent process creates a pipe to enable communication between two child processes",
    explanation: "In typical usage, a parent process creates a pipe before forking child processes, establishing a communication channel that the child processes can use to communicate with each other."
  },
  {
    id: 27,
    text: "How do pipes differ from files?",
    options: [
      "They are more efficient and operate as a one-way byte stream",
      "They are slower but more reliable",
      "They can only store small amounts of data",
      "They require special hardware",
      "They need constant maintenance"
    ],
    correctAnswer: "They are more efficient and operate as a one-way byte stream",
    explanation: "Unlike files, pipes operate as efficient one-way byte streams. They don't require disk access and are optimized for process-to-process communication, making them more efficient for IPC than file-based communication."
  },
  {
    id: 28,
    text: "How is data managed in pipes?",
    options: [
      "The kernel buffers the data",
      "The user process manages the data",
      "The data is stored on disk",
      "The network manages the data",
      "The data is stored in RAM only"
    ],
    correctAnswer: "The kernel buffers the data",
    explanation: "In pipe-based IPC, the kernel manages and buffers the data being transferred between processes, providing efficient and reliable data transfer without requiring process intervention in the buffering mechanism."
  },
  {
    id: 29,
    text: "What is the pipe buffer size in Linux?",
    options: [
      "64KB",
      "32KB",
      "128KB",
      "16KB",
      "256KB"
    ],
    correctAnswer: "64KB",
    explanation: "In Linux systems, pipes operate with a 64KB buffer size. This bounded buffer size helps manage memory usage while still providing sufficient space for efficient process-to-process communication."
  }
,
{
    id: 19,
    text: "What is an API?",
    options: [
      "An interface to a library of software functions enabling communication between computers or programs",
      "A type of computer hardware",
      "A network protocol",
      "A programming language",
      "A type of operating system"
    ],
    correctAnswer: "An interface to a library of software functions enabling communication between computers or programs",
    explanation: "An API (Application Programming Interface) provides a standardized way for programs to communicate, offering a library of functions that enable interaction between different software components or systems."
  },
  {
    id: 20,
    text: "What are traditional APIs for IPC typically used for?",
    options: [
      "They are specific to IPC within a single system",
      "They are only for network communication",
      "They are used for hardware control",
      "They are for graphics processing",
      "They are for database management"
    ],
    correctAnswer: "They are specific to IPC within a single system",
    explanation: "Traditional IPC APIs were designed specifically for communication between processes running on the same system, focusing on local inter-process communication rather than distributed systems."
  },
  {
    id: 21,
    text: "What trend has emerged with IPC APIs?",
    options: [
      "Using different-systems APIs even for processes running on the same system",
      "Using only single-system APIs",
      "Eliminating APIs completely",
      "Using hardware-specific APIs",
      "Using only network protocols"
    ],
    correctAnswer: "Using different-systems APIs even for processes running on the same system",
    explanation: "A trend has emerged where distributed systems APIs are being used even for local communication, providing consistency in how processes communicate regardless of their location."
  },
  {
    id: 22,
    text: "What has been a focus in recent years for API development?",
    options: [
      "Developing APIs specifically for distributed systems",
      "Developing APIs only for single systems",
      "Removing API support entirely",
      "Creating hardware-specific APIs",
      "Limiting API functionality"
    ],
    correctAnswer: "Developing APIs specifically for distributed systems",
    explanation: "Recent API development has focused on distributed systems, recognizing the growing need for communication between processes across different systems and networks."
  },
  {
    id: 23,
    text: "What is a pipe in IPC?",
    options: [
      "A simple, stream-based communication mechanism with input and output ends",
      "A physical connection between computers",
      "A type of network cable",
      "A memory storage device",
      "A type of processor"
    ],
    correctAnswer: "A simple, stream-based communication mechanism with input and output ends",
    explanation: "A pipe is a fundamental IPC mechanism that provides a stream-based communication channel with distinct input and output ends, allowing processes to communicate through a byte stream."
  },
  {
    id: 24,
    text: "Where are pipes commonly used?",
    options: [
      "In UNIX-like systems, such as Linux",
      "Only in Windows systems",
      "Only in mobile devices",
      "Only in game consoles",
      "Only in web browsers"
    ],
    correctAnswer: "In UNIX-like systems, such as Linux",
    explanation: "Pipes are a common IPC mechanism in UNIX-like operating systems, including Linux, where they provide a simple and efficient way for processes to communicate."
  },
  {
    id: 25,
    text: "What happens if there's no data in a pipe when a process tries to read from it?",
    options: [
      "The reading process blocks until data is available",
      "The process crashes",
      "The pipe is automatically closed",
      "An error is returned immediately",
      "The process continues with empty data"
    ],
    correctAnswer: "The reading process blocks until data is available",
    explanation: "When a process attempts to read from an empty pipe, it enters a blocked state and waits until data becomes available. This blocking behavior is part of pipe's synchronization mechanism."
  },
  {
    id: 26,
    text: "How are pipes typically created and used?",
    options: [
      "A parent process creates a pipe to enable communication between two child processes",
      "Pipes are created automatically by the system",
      "Each process creates its own pipe",
      "Pipes are created by the network",
      "Pipes are created by user applications"
    ],
    correctAnswer: "A parent process creates a pipe to enable communication between two child processes",
    explanation: "In typical usage, a parent process creates a pipe before forking child processes, establishing a communication channel that the child processes can use to communicate with each other."
  },
  {
    id: 27,
    text: "How do pipes differ from files?",
    options: [
      "They are more efficient and operate as a one-way byte stream",
      "They are slower but more reliable",
      "They can only store small amounts of data",
      "They require special hardware",
      "They need constant maintenance"
    ],
    correctAnswer: "They are more efficient and operate as a one-way byte stream",
    explanation: "Unlike files, pipes operate as efficient one-way byte streams. They don't require disk access and are optimized for process-to-process communication, making them more efficient for IPC than file-based communication."
  },
  {
    id: 28,
    text: "How is data managed in pipes?",
    options: [
      "The kernel buffers the data",
      "The user process manages the data",
      "The data is stored on disk",
      "The network manages the data",
      "The data is stored in RAM only"
    ],
    correctAnswer: "The kernel buffers the data",
    explanation: "In pipe-based IPC, the kernel manages and buffers the data being transferred between processes, providing efficient and reliable data transfer without requiring process intervention in the buffering mechanism."
  },
  {
    id: 29,
    text: "What is the pipe buffer size in Linux?",
    options: [
      "64KB",
      "32KB",
      "128KB",
      "16KB",
      "256KB"
    ],
    correctAnswer: "64KB",
    explanation: "In Linux systems, pipes operate with a 64KB buffer size. This bounded buffer size helps manage memory usage while still providing sufficient space for efficient process-to-process communication."
  }
,
{
    id: 30,
    text: "According to the diagram, what does process P1 do in a pipe?",
    image: "/DSAQuiz/assets/osi6-3-buffer.png",
    options: [
      "Writes data to the pipe",
      "Reads data from the pipe",
      "Manages the buffer",
      "Controls the kernel",
      "Monitors the communication"
    ],
    correctAnswer: "Writes data to the pipe",
    explanation: "The diagram shows process P1 as the writer process that writes data to the pipe's buffer. This illustrates the source end of the one-way communication channel in pipe-based IPC."
  },
  {
    id: 31,
    text: "According to the diagram, what does process P2 do in a pipe?",
    image: "/DSAQuiz/assets/osi6-3-buffer.png",
    options: [
      "Reads data from the pipe",
      "Writes data to the pipe",
      "Creates the buffer",
      "Manages the kernel",
      "Initializes the pipe"
    ],
    correctAnswer: "Reads data from the pipe",
    explanation: "The diagram shows process P2 as the reader process that reads data from the pipe's buffer. This represents the destination end of the one-way communication channel in the pipe system."
  },
  {
    id: 32,
    text: "What connects P1 and P2 in the pipe communication according to the diagram?",
    image: "/DSAQuiz/assets/osi6-3-buffer.png",
    options: [
      "A buffer managed by the kernel",
      "A direct memory connection",
      "A network connection",
      "A file system",
      "A shared memory segment"
    ],
    correctAnswer: "A buffer managed by the kernel",
    explanation: "The diagram illustrates that P1 and P2 are connected through a buffer that is managed by the kernel. This buffer serves as the intermediary storage for data being transferred between the two processes."
  },
  {
    id: 33,
    text: "According to the diagram, what happens if P2 tries to read but the buffer is empty?",
    image: "/DSAQuiz/assets/osi6-3-buffer.png",
    options: [
      "P2 blocks until data is available",
      "P2 continues execution",
      "P2 terminates",
      "P2 sends an error message",
      "P2 skips the read operation"
    ],
    correctAnswer: "P2 blocks until data is available",
    explanation: "The diagram shows that when P2 attempts to read from an empty buffer, it enters a blocked state and waits until data becomes available in the buffer. This blocking behavior is a key characteristic of pipe communication."
  },
  {
    id: 34,
    text: "What kind of data stream is used in the pipe according to the diagram?",
    image: "/DSAQuiz/assets/osi6-3-buffer.png",
    options: [
      "A one-way byte stream",
      "A two-way data stream",
      "A random access stream",
      "A bidirectional channel",
      "A circular buffer"
    ],
    correctAnswer: "A one-way byte stream",
    explanation: "The diagram illustrates that the pipe operates as a one-way byte stream, with data flowing in a single direction from P1 (writer) to P2 (reader) through the kernel-managed buffer."
  },
  {
    id: 35,
    text: "How is data transferred between processes in this model?",
    image: "/DSAQuiz/assets/osi6-3-buffer.png",
    options: [
      "P1 writes to the buffer, and P2 reads from the buffer",
      "P1 and P2 write simultaneously",
      "P2 writes and P1 reads",
      "P1 and P2 read simultaneously",
      "P1 and P2 exchange data directly"
    ],
    correctAnswer: "P1 writes to the buffer, and P2 reads from the buffer",
    explanation: "The diagram shows the data transfer process where P1 (the writer process) writes data to the kernel-managed buffer, and P2 (the reader process) reads data from this buffer, establishing a unidirectional flow of data."
  }
,
{
    id: 40,
    text: "What is the most familiar use of pipes in UNIX?",
    options: [
      "Commands like ls | more",
      "Network connections",
      "File system operations",
      "Memory management",
      "Process scheduling"
    ],
    correctAnswer: "Commands like ls | more",
    explanation: "The most common and familiar use of pipes in UNIX systems is in shell commands that connect multiple commands together using the pipe symbol (|), such as 'ls | more' which pipes the output of ls through more for paginated display."
  },
  {
    id: 41,
    text: "What does the shell do first when a pipe is used?",
    options: [
      "Creates a pipe with two ends using the pipe system call",
      "Executes the first command",
      "Creates child processes",
      "Opens a file",
      "Checks system resources"
    ],
    correctAnswer: "Creates a pipe with two ends using the pipe system call",
    explanation: "The first action the shell takes when encountering a pipe is to create a pipe using the pipe system call. This creates a communication channel with two ends (read and write) that will be used for process communication."
  },
  {
    id: 42,
    text: "What does the shell do after creating the pipe?",
    options: [
      "Uses the fork system call to create two child processes",
      "Closes the pipe immediately",
      "Executes both commands simultaneously",
      "Terminates the parent process",
      "Waits for user input"
    ],
    correctAnswer: "Uses the fork system call to create two child processes",
    explanation: "After creating the pipe, the shell uses the fork system call to create two child processes. These child processes will execute the commands on either side of the pipe operator and communicate through the pipe."
  },
  {
    id: 43,
    text: "What commands do the child processes execute in this example?",
    options: [
      "One executes ls, and the other executes more",
      "Both execute ls",
      "Both execute more",
      "One executes pipe, one executes ls",
      "One executes more, one executes pipe"
    ],
    correctAnswer: "One executes ls, and the other executes more",
    explanation: "In this example, the two child processes execute different commands: one process executes the ls command (to list directory contents), and the other executes the more command (to provide paginated output)."
  },
  {
    id: 44,
    text: "How do the ls and more processes communicate?",
    options: [
      "Through the inherited pipe",
      "Through shared memory",
      "Through file system",
      "Through direct communication",
      "Through the parent process"
    ],
    correctAnswer: "Through the inherited pipe",
    explanation: "The ls and more processes communicate through the pipe that they inherit from their parent shell process. This inherited pipe provides the communication channel between the two processes."
  },
  {
    id: 45,
    text: "Which end of the pipe does ls use?",
    options: [
      "The write end",
      "The read end",
      "Both ends",
      "Neither end",
      "The middle"
    ],
    correctAnswer: "The write end",
    explanation: "The ls process uses the write end of the pipe to output its data. This allows it to send its directory listing through the pipe to the more process."
  },
  {
    id: 46,
    text: "Which end of the pipe does more use?",
    options: [
      "The read end",
      "The write end",
      "Both ends",
      "Neither end",
      "The middle"
    ],
    correctAnswer: "The read end",
    explanation: "The more process uses the read end of the pipe to receive data. This allows it to read the directory listing sent by ls through the pipe and display it in a paginated format."
  }
,
{
    id: 47,
    text: "According to the diagram, what is required for safe sharing of files in IPC?",
    image: "/DSAQuiz/assets/osi6-5-traditional.png",
    options: [
      "File locking or record locking",
      "Network connections",
      "Special hardware",
      "Direct memory access",
      "Process termination"
    ],
    correctAnswer: "File locking or record locking",
    explanation: "The diagram shows that file locking or record locking is essential for safe file sharing between processes. These locks, represented by black rectangles, prevent simultaneous access that could lead to data corruption."
  },
  {
    id: 48,
    text: "What scope does file locking cover according to the diagram?",
    image: "/DSAQuiz/assets/osi6-5-traditional.png",
    options: [
      "Locks the whole file",
      "Locks only one byte",
      "Locks the process",
      "Locks the system",
      "Locks the network"
    ],
    correctAnswer: "Locks the whole file",
    explanation: "The diagram illustrates that file locking operates on the entire file, preventing other processes from accessing any part of the file while it's locked, ensuring complete file integrity during operations."
  },
  {
    id: 49,
    text: "What is the scope of record locking as shown in the diagram?",
    image: "/DSAQuiz/assets/osi6-5-traditional.png",
    options: [
      "Locks a portion of the file",
      "Locks the entire file system",
      "Locks all processes",
      "Locks the entire system",
      "Locks all files"
    ],
    correctAnswer: "Locks a portion of the file",
    explanation: "The diagram shows that record locking allows for locking specific portions of a file, enabling finer-grained control over file access and allowing multiple processes to work with different parts of the same file simultaneously."
  },
  {
    id: 50,
    text: "How do processes interact with shared files according to the diagram?",
    image: "/DSAQuiz/assets/osi6-5-traditional.png",
    options: [
      "Processes (e.g., P1, P2, P3) access a common file system with locks to ensure safety",
      "Processes communicate directly with each other",
      "Processes use network protocols",
      "Processes share memory directly",
      "Processes use system calls only"
    ],
    correctAnswer: "Processes (e.g., P1, P2, P3) access a common file system with locks to ensure safety",
    explanation: "The diagram illustrates multiple processes (P1, P2, P3) accessing a shared file system, with locks being used to ensure safe and coordinated access to the files."
  },
  {
    id: 51,
    text: "Why is locking necessary in shared files according to the diagram?",
    image: "/DSAQuiz/assets/osi6-5-traditional.png",
    options: [
      "To prevent data corruption and ensure synchronisation between processes",
      "To increase file size",
      "To improve system speed",
      "To reduce memory usage",
      "To enable network access"
    ],
    correctAnswer: "To prevent data corruption and ensure synchronisation between processes",
    explanation: "The diagram shows locking mechanisms as crucial for preventing data corruption and ensuring proper synchronization between processes when they access shared files, preventing conflicting simultaneous access."
  },
  {
    id: 52,
    text: "What is the role of the file system in this scenario?",
    image: "/DSAQuiz/assets/osi6-5-traditional.png",
    options: [
      "Acts as a shared resource for storing and accessing data",
      "Manages process creation",
      "Controls network access",
      "Handles memory allocation",
      "Manages CPU scheduling"
    ],
    correctAnswer: "Acts as a shared resource for storing and accessing data",
    explanation: "The diagram shows the file system serving as a shared resource where multiple processes can store and access data, providing a common ground for indirect process communication through files."
  },
  {
    id: 53,
    text: "How do processes communicate in this shared file system scenario?",
    image: "/DSAQuiz/assets/osi6-5-traditional.png",
    options: [
      "They communicate indirectly by reading from or writing to the shared file system",
      "They communicate directly with each other",
      "They use network protocols",
      "They share CPU time",
      "They use shared memory"
    ],
    correctAnswer: "They communicate indirectly by reading from or writing to the shared file system",
    explanation: "The diagram illustrates that processes communicate indirectly by reading from and writing to the shared file system, using files as an intermediate medium for data exchange."
  },
  {
    id: 54,
    text: "What happens if a process tries to access a locked section according to the diagram?",
    image: "/DSAQuiz/assets/osi6-5-traditional.png",
    options: [
      "It must wait until the lock is released",
      "It can override the lock",
      "It terminates immediately",
      "It crashes the system",
      "It skips the locked section"
    ],
    correctAnswer: "It must wait until the lock is released",
    explanation: "The diagram implies that when a process attempts to access a locked section, it must wait until the current lock holder releases the lock. This waiting mechanism ensures data integrity and prevents concurrent access conflicts."
  }
,
{
    id: 55,
    text: "What is System V in the context of IPC?",
    options: [
      "A UNIX dialect from the 1980s, foundational for modern IPC features",
      "A modern operating system",
      "A network protocol",
      "A programming language",
      "A hardware specification"
    ],
    correctAnswer: "A UNIX dialect from the 1980s, foundational for modern IPC features",
    explanation: "System V is a historically significant UNIX dialect from the 1980s that established many of the IPC features still used today. Its IPC mechanisms became so influential that they were later adopted into POSIX standards."
  },
  {
    id: 56,
    text: "What standards adopted System V features?",
    options: [
      "POSIX standards",
      "Windows standards",
      "Network protocols",
      "Hardware specifications",
      "Web standards"
    ],
    correctAnswer: "POSIX standards",
    explanation: "The POSIX standards adopted System V's IPC features, making these mechanisms standard across UNIX-like operating systems and ensuring compatibility between different implementations."
  },
  {
    id: 57,
    text: "What IPC mechanisms does System V support?",
    options: [
      "Shared memory segments, semaphores, and message queues",
      "Only file sharing",
      "Only network protocols",
      "Only process signals",
      "Only pipes"
    ],
    correctAnswer: "Shared memory segments, semaphores, and message queues",
    explanation: "System V supports three main IPC mechanisms: shared memory segments for direct memory sharing, semaphores for synchronization, and message queues for message passing between processes."
  },
  {
    id: 58,
    text: "What is the general rule for process memory?",
    options: [
      "Processes have private address spaces and don't share memory",
      "All processes share memory by default",
      "Processes always share memory",
      "Memory is globally accessible",
      "Memory is shared automatically"
    ],
    correctAnswer: "Processes have private address spaces and don't share memory",
    explanation: "By default, processes have private address spaces and cannot access each other's memory. This isolation is a fundamental security feature of modern operating systems."
  },
  {
    id: 59,
    text: "How can shared memory be created?",
    options: [
      "By using specific system calls to create memory areas accessible by multiple processes",
      "By default in all processes",
      "Through network connections",
      "By using regular variables",
      "Through file systems only"
    ],
    correctAnswer: "By using specific system calls to create memory areas accessible by multiple processes",
    explanation: "Shared memory is created using specific system calls that explicitly create memory segments that can be accessed by multiple processes, overriding the default memory isolation."
  },
  {
    id: 60,
    text: "How do you create a shared memory segment in C?",
    options: [
      "Using system calls like shmget and shmat",
      "Using regular malloc",
      "Using global variables",
      "Using file operations",
      "Using stack allocation"
    ],
    correctAnswer: "Using system calls like shmget and shmat",
    explanation: "In C, shared memory segments are created using specific system calls: shmget to create the shared memory segment and shmat to attach it to a process's address space."
  },
  {
    id: 61,
    text: "What does the shmget function do in the API example?",
    options: [
      "Creates a shared memory segment of size 1024 bytes",
      "Deletes shared memory",
      "Modifies existing memory",
      "Reads memory content",
      "Connects to network"
    ],
    correctAnswer: "Creates a shared memory segment of size 1024 bytes",
    explanation: "The shmget function is used to create a new shared memory segment with a specified size (1024 bytes in the example), returning an identifier for the created segment."
  },
  {
    id: 62,
    text: "What does shmat do in the API example?",
    options: [
      "Attaches the shared memory segment to the process's address space",
      "Creates new memory",
      "Deletes memory",
      "Modifies memory contents",
      "Disconnects memory"
    ],
    correctAnswer: "Attaches the shared memory segment to the process's address space",
    explanation: "The shmat function attaches (maps) the shared memory segment to the calling process's address space, making it accessible for read and write operations."
  },
  {
    id: 63,
    text: "What modern approach is used for shared memory?",
    options: [
      "The virtual memory system via memory-mapped files",
      "Direct hardware access",
      "Network protocols",
      "Database systems",
      "Cloud storage"
    ],
    correctAnswer: "The virtual memory system via memory-mapped files",
    explanation: "Modern systems typically use memory-mapped files through the virtual memory system as a more flexible and powerful approach to shared memory, providing file-backed shared memory regions."
  },
  {
    id: 64,
    text: "How are memory-mapped files implemented?",
    options: [
      "Using the POSIX mmap function",
      "Using regular file I/O",
      "Using network sockets",
      "Using system memory",
      "Using disk partitions"
    ],
    correctAnswer: "Using the POSIX mmap function",
    explanation: "Memory-mapped files are implemented using the POSIX mmap function, which maps a file into the process's address space, allowing file contents to be accessed like memory."
  },
  {
    id: 65,
    text: "What happens when multiple processes map the same file?",
    options: [
      "It creates a shared memory region",
      "The file gets corrupted",
      "Only one process can access it",
      "The system crashes",
      "The file gets locked"
    ],
    correctAnswer: "It creates a shared memory region",
    explanation: "When multiple processes map the same file using memory mapping, it effectively creates a shared memory region that all processes can access, providing a mechanism for inter-process communication."
  }
,
{
    id: 66,
    text: "According to the code in the diagram, what does 'key_t key;' do?",
    image: "/DSAQuiz/assets/osi6-6-code.png",
    options: [
      "Declares a variable key to store a unique identifier for the shared memory segment",
      "Creates a new memory segment",
      "Generates a random number",
      "Opens a file",
      "Sets up permissions"
    ],
    correctAnswer: "Declares a variable key to store a unique identifier for the shared memory segment",
    explanation: "The code shows key_t key; declaring a variable that will store a unique identifier (key) used to reference the shared memory segment. This key is essential for processes to access the same shared memory segment."
  },
  {
    id: 67,
    text: "What is the purpose of ftok() in the shown code?",
    image: "/DSAQuiz/assets/osi6-6-code.png",
    options: [
      "Generates a unique key using a file path and a project ID ('R' in this case)",
      "Creates a new file",
      "Opens an existing file",
      "Deletes a file",
      "Modifies file permissions"
    ],
    correctAnswer: "Generates a unique key using a file path and a project ID ('R' in this case)",
    explanation: "The code shows ftok() being used to generate a unique key by combining a file path and project identifier ('R'). This ensures different processes can generate the same key to access the same shared memory segment."
  },
  {
    id: 68,
    text: "What operation does shmget() perform in the code?",
    image: "/DSAQuiz/assets/osi6-6-code.png",
    options: [
      "Creates a shared memory segment of size 1024 bytes, with permissions 0644, and the flag IPC_CREAT to create if it doesn't exist",
      "Deletes a shared memory segment",
      "Modifies an existing segment",
      "Reads from shared memory",
      "Writes to shared memory"
    ],
    correctAnswer: "Creates a shared memory segment of size 1024 bytes, with permissions 0644, and the flag IPC_CREAT to create if it doesn't exist",
    explanation: "The diagram shows shmget() creating a shared memory segment with specific parameters: size (1024 bytes), permissions (0644), and the IPC_CREAT flag which creates the segment if it doesn't already exist."
  },
  {
    id: 69,
    text: "What function does shmat() serve in the code?",
    image: "/DSAQuiz/assets/osi6-6-code.png",
    options: [
      "Attaches the shared memory segment to the process's address space, returning a pointer to it",
      "Creates a new memory segment",
      "Deletes the memory segment",
      "Changes memory permissions",
      "Copies memory contents"
    ],
    correctAnswer: "Attaches the shared memory segment to the process's address space, returning a pointer to it",
    explanation: "The code shows shmat() being used to attach the shared memory segment (identified by shmid) to the process's address space. It returns a pointer that can be used to access the shared memory."
  },
  {
    id: 70,
    text: "What is the purpose of the assignment 'data = shmat(...)' in the code?",
    image: "/DSAQuiz/assets/osi6-6-code.png",
    options: [
      "Maps the shared memory segment into the process's address space for reading and writing",
      "Allocates new memory",
      "Frees memory",
      "Creates a backup",
      "Initializes memory contents"
    ],
    correctAnswer: "Maps the shared memory segment into the process's address space for reading and writing",
    explanation: "The diagram shows the assignment data = shmat(...) mapping the shared memory segment into the process's address space, providing a pointer (data) that can be used to read from and write to the shared memory."
  },
  {
    id: 71,
    text: "What does the permission value 0644 represent in the code?",
    image: "/DSAQuiz/assets/osi6-6-code.png",
    options: [
      "File permissions: Owner can read/write, others can only read",
      "All users have full access",
      "No users have access",
      "Only owner has access",
      "Everyone has write access"
    ],
    correctAnswer: "File permissions: Owner can read/write, others can only read",
    explanation: "In the code, 0644 represents Unix-style permissions where the owner has read and write permissions (6), while group and others have read-only permission (4). This is shown in octal notation where 6=110 (rw-) and 4=100 (r--)."
  }
,
{
    id: 72,
    text: "What issues arise with shared memory?",
    options: [
      "Data consistency, preventing interference during critical updates, ensuring orderly access patterns",
      "Only network connectivity issues",
      "Only memory size limitations",
      "Only processor speed issues",
      "Only file system problems"
    ],
    correctAnswer: "Data consistency, preventing interference during critical updates, ensuring orderly access patterns",
    explanation: "Shared memory faces three main challenges: maintaining data consistency across processes, preventing interference during critical updates, and ensuring that processes access shared data in an orderly manner to avoid conflicts."
  },
  {
    id: 73,
    text: "What solutions are used for shared memory issues?",
    options: [
      "Semaphores provided by System V and POSIX for process synchronisation",
      "Only file locking",
      "Only process termination",
      "Only memory isolation",
      "Only network protocols"
    ],
    correctAnswer: "Semaphores provided by System V and POSIX for process synchronisation",
    explanation: "System V and POSIX provide semaphores as synchronization mechanisms to address shared memory issues. These semaphores help coordinate process access to shared memory and prevent data corruption."
  },
  {
    id: 74,
    text: "How do processes communicate via message passing?",
    options: [
      "By sending and receiving messages",
      "Through shared memory only",
      "Through file systems only",
      "Through direct memory access",
      "Through hardware interrupts"
    ],
    correctAnswer: "By sending and receiving messages",
    explanation: "In message passing, processes communicate by explicitly sending and receiving discrete messages, providing a structured way to exchange data without sharing memory directly."
  },
  {
    id: 75,
    text: "What distinguishes message passing from pipes?",
    options: [
      "Messages are isolated data chunks of fixed size, while pipes use unstructured streams of bytes",
      "Messages are slower than pipes",
      "Pipes are more reliable",
      "Messages require more memory",
      "Pipes work across networks"
    ],
    correctAnswer: "Messages are isolated data chunks of fixed size, while pipes use unstructured streams of bytes",
    explanation: "Message passing differs from pipes in that it uses discrete, fixed-size data chunks (messages) rather than the continuous, unstructured byte streams used by pipes. This structured approach provides clearer data boundaries."
  },
  {
    id: 76,
    text: "Why is message passing called connectionless?",
    options: [
      "It doesn't require persistent connections between processes",
      "It requires continuous connection",
      "It uses network connections",
      "It needs physical connections",
      "It relies on hardware connections"
    ],
    correctAnswer: "It doesn't require persistent connections between processes",
    explanation: "Message passing is connectionless because processes can send messages without maintaining persistent connections. Each message can be sent independently, without establishing or maintaining a dedicated communication channel."
  },
  {
    id: 77,
    text: "What is a zero-capacity queue in message passing?",
    options: [
      "A queue with 0 messages, where the sender must wait for the receiver (rendezvous)",
      "A queue that never fills up",
      "A queue that automatically empties",
      "A queue with infinite capacity",
      "A queue that blocks all messages"
    ],
    correctAnswer: "A queue with 0 messages, where the sender must wait for the receiver (rendezvous)",
    explanation: "A zero-capacity queue forces synchronization between sender and receiver, as it has no buffer space. The sender must wait for the receiver to be ready, creating a rendezvous point in the communication."
  },
  {
    id: 78,
    text: "What is a bounded capacity queue?",
    options: [
      "A queue with finite length n, where the sender waits if full (e.g., MPI)",
      "An infinite queue",
      "A queue that never fills",
      "A queue without limits",
      "A queue that never blocks"
    ],
    correctAnswer: "A queue with finite length n, where the sender waits if full (e.g., MPI)",
    explanation: "A bounded capacity queue has a fixed maximum size (n). When the queue is full, any process trying to send a message must wait until space becomes available, as implemented in systems like MPI."
  },
  {
    id: 79,
    text: "What is the Java Message Service (JMS)?",
    options: [
      "An API for general messaging, implemented by vendors like Oracle and IBM",
      "A network protocol",
      "A file system",
      "A hardware interface",
      "A programming language"
    ],
    correctAnswer: "An API for general messaging, implemented by vendors like Oracle and IBM",
    explanation: "JMS is a standardized API for message-oriented middleware, providing a common interface for messaging implemented by various vendors including Oracle's Java System Message Queue and IBM's WebSphere."
  },
  {
    id: 80,
    text: "What is a socket?",
    options: [
      "A programming model for communication, often stream-oriented, similar to pipes",
      "A hardware component",
      "A type of memory",
      "A file system feature",
      "A process type"
    ],
    correctAnswer: "A programming model for communication, often stream-oriented, similar to pipes",
    explanation: "Sockets are a programming abstraction for network communication, providing a stream-oriented communication model similar to pipes but with the ability to connect processes across different computers."
  },
  {
    id: 81,
    text: "How do sockets differ from pipes?",
    options: [
      "Sockets can connect unrelated processes, even on different computers",
      "Sockets are faster than pipes",
      "Sockets use less memory",
      "Sockets are more secure",
      "Sockets are simpler to use"
    ],
    correctAnswer: "Sockets can connect unrelated processes, even on different computers",
    explanation: "Unlike pipes, which are limited to related processes on the same computer, sockets can connect any processes, even those running on different computers across a network, making them more versatile for distributed communication."
  }
,
{
    id: 82,
    text: "What does the SOCKET primitive do?",
    options: [
      "Creates a new communication endpoint",
      "Closes a connection",
      "Transfers data",
      "Establishes a connection",
      "Binds an address"
    ],
    correctAnswer: "Creates a new communication endpoint",
    explanation: "The SOCKET primitive creates a new communication endpoint, which is the first step in establishing socket-based communication. This endpoint serves as the foundation for subsequent socket operations."
  },
  {
    id: 83,
    text: "What is the purpose of BIND?",
    options: [
      "Attaches a local address to a socket",
      "Creates a new socket",
      "Closes a connection",
      "Sends data",
      "Receives data"
    ],
    correctAnswer: "Attaches a local address to a socket",
    explanation: "The BIND primitive attaches a local address to a socket, giving it a specific location (address and port) where it can be reached by other sockets wanting to communicate."
  },
  {
    id: 84,
    text: "What does LISTEN do?",
    options: [
      "Announces willingness to accept connections and specifies a queue size",
      "Creates a connection",
      "Sends data",
      "Closes a socket",
      "Binds an address"
    ],
    correctAnswer: "Announces willingness to accept connections and specifies a queue size",
    explanation: "The LISTEN primitive declares that a socket is ready to accept incoming connections and specifies how many pending connections can be queued before new connection attempts are rejected."
  },
  {
    id: 85,
    text: "What happens during ACCEPT?",
    options: [
      "Blocks the caller until a connection attempt is received",
      "Immediately creates a connection",
      "Closes the connection",
      "Sends data",
      "Changes socket properties"
    ],
    correctAnswer: "Blocks the caller until a connection attempt is received",
    explanation: "The ACCEPT primitive blocks (waits) until a client attempts to establish a connection. When a connection attempt arrives, ACCEPT creates a new socket for that specific connection."
  },
  {
    id: 86,
    text: "What does CONNECT do?",
    options: [
      "Actively attempts to establish a connection",
      "Waits for connections",
      "Closes a connection",
      "Creates a new socket",
      "Binds an address"
    ],
    correctAnswer: "Actively attempts to establish a connection",
    explanation: "The CONNECT primitive is used by a client to actively initiate a connection to a server socket at a specific address and port. It attempts to establish a connection with a listening socket."
  },
  {
    id: 87,
    text: "What is the role of SEND and RECEIVE in socket communication?",
    options: [
      "SEND sends data over the connection, RECEIVE receives data from the connection",
      "They create new connections",
      "They close connections",
      "They bind addresses",
      "They manage socket properties"
    ],
    correctAnswer: "SEND sends data over the connection, RECEIVE receives data from the connection",
    explanation: "SEND and RECEIVE are the primary data transfer primitives in socket communication. SEND transmits data over an established connection, while RECEIVE retrieves incoming data from the connection."
  },
  {
    id: 88,
    text: "What happens during CLOSE?",
    options: [
      "Releases the connection",
      "Creates a new connection",
      "Starts data transfer",
      "Binds a new address",
      "Begins listening"
    ],
    correctAnswer: "Releases the connection",
    explanation: "The CLOSE primitive releases an established connection and frees associated resources. This is the final step in socket communication, terminating the connection between endpoints."
  },
  {
    id: 89,
    text: "What does the server do after initializing a socket?",
    options: [
      "Calls accept() to wait for connections on a specified port",
      "Immediately sends data",
      "Closes the connection",
      "Creates another socket",
      "Connects to clients"
    ],
    correctAnswer: "Calls accept() to wait for connections on a specified port",
    explanation: "After socket initialization, the server calls accept() to wait for incoming client connections on a specified port. This puts the server in a listening state, ready to handle client connection requests."
  },
  {
    id: 90,
    text: "How does the client initiate communication?",
    options: [
      "Calls connect() with its local socket and the server's IP address + port number",
      "Waits for the server to connect",
      "Creates multiple sockets",
      "Sends data immediately",
      "Listens for connections"
    ],
    correctAnswer: "Calls connect() with its local socket and the server's IP address + port number",
    explanation: "A client initiates communication by calling connect(), specifying both its local socket and the target server's IP address and port number. This establishes the connection to the server."
  },
  {
    id: 91,
    text: "What happens when a connection succeeds?",
    options: [
      "The server's accept() returns a new socket",
      "The connection immediately closes",
      "The server shuts down",
      "The client disconnects",
      "The port number changes"
    ],
    correctAnswer: "The server's accept() returns a new socket",
    explanation: "When a connection is successfully established, the server's accept() call returns a new socket specifically for this connection. This new socket is used for communication with the connected client."
  },
  {
    id: 92,
    text: "How do the client and server exchange data?",
    options: [
      "Using send() and recv() calls to transfer byte arrays over the socket pair",
      "Through shared memory",
      "Using file transfers",
      "Through the operating system",
      "Via intermediate servers"
    ],
    correctAnswer: "Using send() and recv() calls to transfer byte arrays over the socket pair",
    explanation: "Once connected, client and server exchange data by using send() and recv() calls, which transfer byte arrays over the established socket connection. This provides a reliable, stream-oriented communication channel."
  }
,
{
    id: 93,
    text: "According to the diagram, what is the first step the server performs?",
    image: "/DSAQuiz/assets/osi6-7-clientclient.png",
    options: [
      "The server creates a socket using the socket() system call",
      "The server waits for connections",
      "The server binds to a port",
      "The server connects to clients",
      "The server starts sending data"
    ],
    correctAnswer: "The server creates a socket using the socket() system call",
    explanation: "The diagram shows that the server's first action is to create a socket using the socket() system call. This is the initial step in establishing the server's communication endpoint."
  },
  {
    id: 94,
    text: "What are the server's actions after creating the socket, as shown in the diagram?",
    image: "/DSAQuiz/assets/osi6-7-clientclient.png",
    options: [
      "Binds it to an IP address and port using bind(), and marks it as a server socket using listen()",
      "Immediately starts accepting connections",
      "Creates multiple sockets",
      "Connects to clients directly",
      "Starts sending data"
    ],
    correctAnswer: "Binds it to an IP address and port using bind(), and marks it as a server socket using listen()",
    explanation: "The diagram illustrates that after socket creation, the server performs two critical steps: binding the socket to a specific IP address and port using bind(), and then marking it as a server socket capable of accepting connections using listen()."
  },
  {
    id: 95,
    text: "How does the server wait for connections according to the diagram?",
    image: "/DSAQuiz/assets/osi6-7-clientclient.png",
    options: [
      "By calling accept(), which blocks until a client attempts to connect",
      "By continuously checking for clients",
      "By sending broadcast messages",
      "By creating new sockets",
      "By connecting to clients directly"
    ],
    correctAnswer: "By calling accept(), which blocks until a client attempts to connect",
    explanation: "The diagram shows the server using accept() to wait for client connections. This call blocks (waits) until a client attempts to establish a connection, making it a passive waiting mechanism."
  },
  {
    id: 96,
    text: "According to the diagram, what steps does the client take to initiate communication?",
    image: "/DSAQuiz/assets/osi6-7-clientclient.png",
    options: [
      "Creates its own socket using socket() and calls connect() to connect to the server's IP address and port",
      "Waits for the server to connect",
      "Creates multiple sockets",
      "Binds to a specific port",
      "Listens for connections"
    ],
    correctAnswer: "Creates its own socket using socket() and calls connect() to connect to the server's IP address and port",
    explanation: "The diagram illustrates the client's two-step process: first creating its own socket using socket(), then actively attempting to connect to the server by calling connect() with the server's IP address and port number."
  },
  {
    id: 97,
    text: "What happens when a connection is successful, as shown in the diagram?",
    image: "/DSAQuiz/assets/osi6-7-clientclient.png",
    options: [
      "The server's accept() creates a new socket connected to the client, and the client and server can now exchange data",
      "The original socket is closed",
      "A new server is created",
      "The client disconnects",
      "The connection is reset"
    ],
    correctAnswer: "The server's accept() creates a new socket connected to the client, and the client and server can now exchange data",
    explanation: "The diagram shows that upon successful connection, accept() creates a new socket specifically for this client connection. This new socket pair between client and server enables them to exchange data."
  },
  {
    id: 98,
    text: "What can the server do after establishing one connection, according to the diagram?",
    image: "/DSAQuiz/assets/osi6-7-clientclient.png",
    options: [
      "It can call accept() again to wait for other clients to connect",
      "It must close all connections",
      "It must restart",
      "It can only communicate with the first client",
      "It must create a new socket"
    ],
    correctAnswer: "It can call accept() again to wait for other clients to connect",
    explanation: "The diagram shows that after establishing a connection with one client, the server can call accept() again on its original listening socket to wait for additional client connections, allowing it to handle multiple clients."
  },
  {
    id: 99,
    text: "How do client and server communicate once connected, as depicted in the diagram?",
    image: "/DSAQuiz/assets/osi6-7-clientclient.png",
    options: [
      "By exchanging data over the socket pair using send() and recv() calls",
      "Through shared memory",
      "Using file transfers",
      "Through intermediate servers",
      "Via the operating system"
    ],
    correctAnswer: "By exchanging data over the socket pair using send() and recv() calls",
    explanation: "The diagram illustrates that once connected, the client and server communicate by exchanging data through their established socket pair using send() and recv() calls, creating a bi-directional communication channel."
  }
,
{
    id: 100,
    text: "Who proposed RPC and when?",
    options: [
      "Birrell and Nelson in 1984",
      "Thompson and Ritchie in 1970",
      "Dijkstra in 1975",
      "Knuth in 1980",
      "Tanenbaum in 1990"
    ],
    correctAnswer: "Birrell and Nelson in 1984",
    explanation: "Remote Procedure Call (RPC) was proposed by Birrell and Nelson in 1984. Their work laid the foundation for modern distributed computing by introducing the concept of making remote procedure calls appear like local ones."
  },
  {
    id: 101,
    text: "What is the goal of RPC?",
    options: [
      "To provide access-transparent call semantics, making remote calls look like local procedure calls",
      "To increase network speed",
      "To reduce memory usage",
      "To simplify programming languages",
      "To improve file system access"
    ],
    correctAnswer: "To provide access-transparent call semantics, making remote calls look like local procedure calls",
    explanation: "The primary goal of RPC is to provide transparency in distributed computing by making remote procedure calls appear identical to local procedure calls from the programmer's perspective. This abstraction simplifies distributed application development."
  },
  {
    id: 102,
    text: "What is required to enable RPC?",
    options: [
      "Conversion of procedure calls into network messages",
      "Special hardware",
      "New programming languages",
      "Local file systems",
      "Shared memory"
    ],
    correctAnswer: "Conversion of procedure calls into network messages",
    explanation: "RPC requires the conversion of procedure calls into network messages. This conversion process allows local procedure call syntax to be used for remote operations by transforming the calls into network communications."
  },
  {
    id: 103,
    text: "What is the server's role in RPC?",
    options: [
      "Exports modules of procedures for remote access",
      "Creates local procedures only",
      "Manages network hardware",
      "Stores client data",
      "Handles memory management"
    ],
    correctAnswer: "Exports modules of procedures for remote access",
    explanation: "In RPC, the server's role is to export modules containing procedures that can be accessed remotely. These exported procedures become available for clients to call as if they were local procedures."
  },
  {
    id: 104,
    text: "What does the client do in RPC?",
    options: [
      "Calls these exported procedures, appearing as local procedure calls",
      "Manages the server",
      "Creates new procedures",
      "Handles network routing",
      "Controls system resources"
    ],
    correctAnswer: "Calls these exported procedures, appearing as local procedure calls",
    explanation: "In RPC, the client calls the server's exported procedures as if they were local procedures. The RPC system handles the complexity of making these remote calls appear local to the client program."
  },
  {
    id: 105,
    text: "What is the underlying reality of RPC calls?",
    options: [
      "They are actually network messages in disguise",
      "They are direct memory transfers",
      "They are local function calls",
      "They are file system operations",
      "They are hardware interrupts"
    ],
    correctAnswer: "They are actually network messages in disguise",
    explanation: "While RPC calls appear to be normal procedure calls to the programmer, they are actually network messages being sent between computers. The RPC system handles the translation between procedure calls and network communications transparently."
  }
,
{
    id: 106,
    text: "According to the diagram, what does the client node do in RPC?",
    image: "/DSAQuiz/assets/osi6-8-servernode.png",
    options: [
      "Calls a function, y(a, b), that appears to be local but is actually executed on the server",
      "Executes the function locally",
      "Creates a new server",
      "Manages network connections",
      "Stores the function results"
    ],
    correctAnswer: "Calls a function, y(a, b), that appears to be local but is actually executed on the server",
    explanation: "The diagram shows the client node making what appears to be a local function call y(a, b), but this call is actually executed remotely on the server node. This illustrates the transparency of RPC."
  },
  {
    id: 107,
    text: "What happens when the client calls y(a, b) as shown in the diagram?",
    image: "/DSAQuiz/assets/osi6-8-servernode.png",
    options: [
      "The arguments (a, b) are sent from System A (client) to System B (server) as a network message",
      "The function executes locally",
      "The server is created",
      "The network is initialized",
      "The results are generated immediately"
    ],
    correctAnswer: "The arguments (a, b) are sent from System A (client) to System B (server) as a network message",
    explanation: "The diagram illustrates that when the client calls y(a, b), the arguments are packaged into a network message and sent from System A (client) to System B (server) for remote execution."
  },
  {
    id: 108,
    text: "According to the diagram, what does the server node do upon receiving the message?",
    image: "/DSAQuiz/assets/osi6-8-servernode.png",
    options: [
      "Executes the function y(c, d) using the received arguments (a, b)",
      "Returns the message to the client",
      "Creates a new connection",
      "Stores the arguments",
      "Forwards the message to another server"
    ],
    correctAnswer: "Executes the function y(c, d) using the received arguments (a, b)",
    explanation: "The diagram shows that when the server receives the message, it executes the function y(c, d) using the arguments (a, b) that were sent from the client, performing the actual computation on the server side."
  },
  {
    id: 109,
    text: "What does the server return to the client according to the diagram?",
    image: "/DSAQuiz/assets/osi6-8-servernode.png",
    options: [
      "The result of the function execution",
      "The original arguments",
      "A connection status",
      "An error message",
      "The function code"
    ],
    correctAnswer: "The result of the function execution",
    explanation: "The diagram illustrates that after executing the function, the server returns the computation result back to the client. This result is what the client receives as if it had executed the function locally."
  },
  {
    id: 110,
    text: "How does the client receive the result according to the diagram?",
    image: "/DSAQuiz/assets/osi6-8-servernode.png",
    options: [
      "The result is sent back from the server to the client as a network message, and the client assigns it to the variable i",
      "The client computes the result locally",
      "The result appears in shared memory",
      "The result is stored in a file",
      "The client retrieves it from a database"
    ],
    correctAnswer: "The result is sent back from the server to the client as a network message, and the client assigns it to the variable i",
    explanation: "The diagram shows the result being sent back to the client as a network message, where it's assigned to the variable i. This completes the illusion of a local function call, though the actual computation occurred remotely."
  },
  {
    id: 111,
    text: "What is the main advantage of RPC as illustrated in the diagram?",
    image: "/DSAQuiz/assets/osi6-8-servernode.png",
    options: [
      "Makes remote function calls look like local procedure calls, simplifying programming",
      "Increases network speed",
      "Reduces server load",
      "Improves data security",
      "Minimizes memory usage"
    ],
    correctAnswer: "Makes remote function calls look like local procedure calls, simplifying programming",
    explanation: "The diagram demonstrates RPC's main advantage: it abstracts away the complexity of network communication, making remote function calls appear as simple as local procedure calls. This significantly simplifies distributed systems programming."
  }
,
{
    id: 112,
    text: "What does RPC extend?",
    options: [
      "The conventional procedure call to the client/server model",
      "Network protocols only",
      "Database operations",
      "File systems",
      "Memory management"
    ],
    correctAnswer: "The conventional procedure call to the client/server model",
    explanation: "RPC extends the familiar concept of conventional procedure calls into distributed computing by allowing them to work across the client/server model, enabling remote execution while maintaining familiar programming patterns."
  },
  {
    id: 113,
    text: "What do remote procedures do in RPC?",
    options: [
      "Accept arguments and return results, like local procedures",
      "Only transfer data",
      "Only manage connections",
      "Only handle errors",
      "Only process files"
    ],
    correctAnswer: "Accept arguments and return results, like local procedures",
    explanation: "Remote procedures in RPC behave like local procedures by accepting arguments and returning results, maintaining the familiar programming model while actually executing on a remote system."
  },
  {
    id: 114,
    text: "How does RPC help programmers?",
    options: [
      "Simplifies program design and understanding, lets programmers focus on the application, not the communication protocol",
      "Increases program speed only",
      "Reduces memory usage only",
      "Improves network reliability only",
      "Enhances security only"
    ],
    correctAnswer: "Simplifies program design and understanding, lets programmers focus on the application, not the communication protocol",
    explanation: "RPC helps programmers by abstracting away the complexity of network communication, allowing them to focus on application logic rather than dealing with low-level communication protocols and network details."
  },
  {
    id: 115,
    text: "What foundational utilities use RPC?",
    options: [
      "Network File System (NFS) and Network Information Service (NIS) in UNIX-based systems",
      "Only web browsers",
      "Only email clients",
      "Only database systems",
      "Only gaming applications"
    ],
    correctAnswer: "Network File System (NFS) and Network Information Service (NIS) in UNIX-based systems",
    explanation: "RPC is the foundation for critical UNIX network services including NFS (for remote file access) and NIS (for distributed system information), demonstrating its importance in practical distributed systems."
  },
  {
    id: 116,
    text: "What is syntactic transparency in RPC?",
    options: [
      "RPC should have the same syntax as a local procedure call",
      "RPC should use different syntax",
      "RPC should modify procedure calls",
      "RPC should change programming languages",
      "RPC should alter function names"
    ],
    correctAnswer: "RPC should have the same syntax as a local procedure call",
    explanation: "Syntactic transparency means that calling a remote procedure should look identical to calling a local procedure, maintaining familiar programming patterns and reducing the learning curve."
  },
  {
    id: 117,
    text: "What is semantic transparency in RPC?",
    options: [
      "RPC semantics should be identical to those of a local procedure call",
      "RPC should change procedure behavior",
      "RPC should modify return values",
      "RPC should alter parameter passing",
      "RPC should change execution order"
    ],
    correctAnswer: "RPC semantics should be identical to those of a local procedure call",
    explanation: "Semantic transparency ensures that remote procedures behave exactly like local procedures in terms of their effects and results, maintaining consistency in program behavior regardless of where the procedure executes."
  },
  {
    id: 118,
    text: "Why is a standard data representation needed for RPC?",
    options: [
      "Machines may differ in: endianness, character encoding, and floating-point number representation",
      "Only for network speed",
      "Only for security purposes",
      "Only for error handling",
      "Only for performance reasons"
    ],
    correctAnswer: "Machines may differ in: endianness, character encoding, and floating-point number representation",
    explanation: "A standard data representation is crucial because different machines may represent data differently, including byte order (endianness), character encoding, and floating-point formats. Standardization ensures reliable data exchange between different systems."
  },
  {
    id: 119,
    text: "What standard is used for external data representation in RPC?",
    options: [
      "XDR (External Data Representation)",
      "JSON",
      "XML",
      "CSV",
      "HTML"
    ],
    correctAnswer: "XDR (External Data Representation)",
    explanation: "XDR (External Data Representation) is the standard used in RPC for ensuring consistent data representation across different types of machines and architectures, solving the data format compatibility issues."
  },
  {
    id: 120,
    text: "What are some implementations of RPC?",
    options: [
      "CORBA, Java RMI, SOAP Web Services, and Windows Communication Foundation (WCF)",
      "Only HTTP protocols",
      "Only FTP services",
      "Only email protocols",
      "Only file systems"
    ],
    correctAnswer: "CORBA, Java RMI, SOAP Web Services, and Windows Communication Foundation (WCF)",
    explanation: "RPC has been implemented in various forms including CORBA (for language-independent object-oriented RPC), Java RMI (for Java-specific remote invocation), SOAP Web Services (for web-based RPC), and WCF (Microsoft's unified programming model for distributed computing)."
  }
],
};