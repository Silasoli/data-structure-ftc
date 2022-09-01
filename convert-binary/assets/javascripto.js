class Pilha {
  constructor() {
    this.items = [];
  }

  pushStack(element) {
    this.items.push(element);
  }

  popStack() {
    return this.items.pop();
  }

  peekStack() {
    return this.items[this.items.length - 1];
  }

  isEmptyStack() {
    return this.items.length === 0;
  }

  sizeStack() {
    return this.items.length;
  }

  clearStack() {
    this.items = [];
  }
}
