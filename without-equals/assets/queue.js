class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
  verifyExistence(element) {
    const userInput = element.trim().toLowerCase();
    if(this.isEmpty()) return;
    for (let i = this.lowestCount; i < this.count; i++) {
        return this.items[i].trim().toLowerCase() === userInput;
      }
    }
  enqueue(element) {
    const verify = this.verifyExistence(element);
    if(verify) return 'Item já cadastrado';
    this.items[this.count] = element;
    this.count++;
  }
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }
  isEmpty() {
    return this.count - this.lowestCount === 0;
  }
  size() {
    return this.count - this.lowestCount;
  }
  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }
    return objString;
  }
}
