import { LinkedListNode } from "../Exercise1/LinkedListNode";

export class Queue {
  constructor(public items: any[] = []) {}

  public isEmpty(): boolean {
    return this.items.length === 0;
  }

  public enQueue(value: any): void {
    const index = this.items.length;

    return (this.items[index] = value);
  }

  public deQueue(): LinkedListNode | null {
    const removedItem = this.items[0];

    for (let i = 0; i < this.items.length; i++) {
      this.items[i] = this.items[i + 1];
    }

    this.items.length--;
    return removedItem;
  }
}
