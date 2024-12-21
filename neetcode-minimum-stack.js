class MinStack {
  constructor() {
    this.stack = [];
    this.min = Infinity;
    this.highest = 0;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    this.stack.push(val);
    if (val < this.min) this.min = val;
    this.highest = val;
  }

  /**
   * @return {void}
   */
  pop() {
    const popped = this.stack.pop();
    if (popped === this.min) {
      const min = Math.min.apply(Math, this.stack);
      this.min = min;
    }
    this.highest = this.stack[this.stack.length - 1];
  }

  /**
   * @return {number}
   */
  top() {
    return this.highest;
  }

  /**
   * @return {number}
   */
  getMin() {
    return this.min;
  }
}

const t = new MinStack();

// t.push(1);
// t.push(2);
// t.push(0);
// t.push(0);
// console.log(t);
// t.pop();
// console.log(t);
// console.log(t.top());
// console.log(t.getMin());

// t.push(1);
// t.push(2);
// t.push(0);
// console.log(t.getMin());
// t.pop();
// console.log(t);
// console.log(t.top());
// console.log(t.getMin());

// t.push(1);
// t.push(2);
// t.push(-2);
// t.push(-1);
// t.push(-2);
// t.push(3);
// t.pop();
// console.log(t);
// console.log(t.top());

t.push(10);
t.pop();
t.push(20);
console.log(t);
console.log(t.top());
t.push(-20);
console.log(t.getMin());
