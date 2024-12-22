class Solution {
  /**
   * @param {string[]} tokens
   * @return {number}
   */
  evalRPN(tokens) {
    const ops = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => Math.trunc(a / b),
    };
    let cache = [];
    for (const token of tokens) {
      if (Object.hasOwn(ops, token)) {
        if (token in ops) {
          const b = cache.pop();
          const a = cache.pop();
          cache.push(ops[token](a, b));
        }
      } else {
        cache.push(parseInt(token));
      }
    }
    return cache[0];
  }
}

const t = new Solution();

console.log(t.evalRPN(['1', '2', '+', '3', '*', '4', '-']));
