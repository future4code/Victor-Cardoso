import { LinkedList } from "./Exercise1/LinkedList";
import { LinkedListNode } from "./Exercise1/LinkedListNode";
import { Stack } from "./Exercise2/Stack";
import { Queue } from "./Exercise3/Queue";

const nome = new LinkedListNode(
  "Victor",
  new LinkedListNode(
    "Cardoso",
    new LinkedListNode("Pudo", new LinkedListNode("Torres"))
  )
);

const queue = ["Victor", "Cardoso", "Pudo", "Torres"];

const empty = new LinkedListNode([]);
const linkedList = new LinkedList(nome);
const emptyList = new LinkedList(empty);
const emptyStack = new Stack(emptyList);
const myStack = new Stack(linkedList);
const myQueue = new Queue(queue);

linkedList.addToTail(25);

// console.log("Full List", linkedList);
// console.log("Search lastName", linkedList.searchValue(linkedList, "Torres"));
// console.log("Print", linkedList.printList());

// console.log("Stack isEmpty: ", emptyStack);

// myStack.push("Dev");
// console.log("Stack push: ", myStack.frames.printList());

// myStack.pop();
// console.log("Stack pop: ", myStack.frames.printList());

// myQueue.enQueue("Full Name: ");
// console.log("EnQueue: ", myQueue.items);
// myQueue.deQueue();
// console.log("EnQueue: ", myQueue.items);
