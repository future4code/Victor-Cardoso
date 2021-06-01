import { LinkedList } from "../Exercise1/LinkedList";
import { LinkedListNode } from "../Exercise1/LinkedListNode";

export class Stack {
  constructor(public frames: LinkedList = new LinkedList()) {}

  public isEmpty(): boolean {
    return this.frames.start === null;
  }

  public push(value: any): void {
    return this.frames.addToTail(value);
  }

  public pop(): LinkedListNode | null {
    if (!this.isEmpty()) return null;

    let node: LinkedListNode | null = this.frames.start;
    let lastNode: LinkedListNode | null = null;

    while (node!.next) {
      lastNode = node;
      node = node!.next;
    }

    node!.next = null;
    return node;
  }
}
