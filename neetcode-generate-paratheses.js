class Solution {
  /**
   * @param {number} n
   * @return {string[]}
   */
  generateParenthesis(n) {
    const stack = [];
    const res = [];

    const helperfunc = (openN, closedN) => {
      if(openN === n && closedN === n) {
        return res.push(stack.join(''));
      }
      if(openN < n) {
        stack.push('(');
        helperfunc(openN + 1, closedN);
        stack.pop();
      }
      if(closedN < openN) {
        stack.push(')')
        helperfunc(openN, closedN + 1);
        stack.pop();
      }
    }
    helperfunc(0, 0);
    return res;
  }
}

const t = new Solution();
console.log(t.generateParenthesis(3));
