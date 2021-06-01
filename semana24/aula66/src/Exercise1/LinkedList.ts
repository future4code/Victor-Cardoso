import { LinkedListNode } from "./LinkedListNode";

export class LinkedList {
  constructor(public start: LinkedListNode | null = null) {}
  public addToTail(value: any): void {
    if (!this.start) {
      this.start = new LinkedListNode(value);
    } else {
      let node = this.start;
      while (node && node.next !== null) {
        node = node.next;
      }
      node.next = new LinkedListNode(value);
    }
  }

  public searchValue(_list: LinkedList, value: any) {
    let node: LinkedListNode | null = this.start;
    while (node && node.value !== value) {
      node = node.next;
    }
    return node;
  }

  public printList(): void {
    let node: LinkedListNode | undefined | null = this.start;
    let i = 1;
    while (node && node !== undefined) {
      console.log(`Indice ${i}: `, node!.value);
      node = node!.next;
      i++;
    }
  }
}
