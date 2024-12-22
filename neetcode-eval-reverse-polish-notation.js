class Solution {
  /**
   * @param {string[]} tokens
   * @return {number}
   */
  evalRPN(tokens) {
    let stack = [];
    for (const t of tokens) {
      if (t === '+') {
        stack.push(stack.pop() + stack.pop());
      } else if (t === '-') {
        const a = stack.pop();
        const b = stack.pop();
        stack.push(b - a);
      } else if (t === '*') {
        stack.push(stack.pop() * stack.pop());
      } else if (t === '/') {
        const a = stack.pop();
        const b = stack.pop();
        stack.push(Math.trunc(b / a));
      } else stack.push(parseInt(t));
    }
    return stack[0];
  }
}

const t = new Solution();

console.log(t.evalRPN(['1', '2', '+', '3', '*', '4', '-']));
console.log(t.evalRPN(['2', '1', '+', '3', '*']));
