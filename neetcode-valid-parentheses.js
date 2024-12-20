class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s) {
    if (s.length % 2 !== 0 || s.length === 0) return false;
    const obj = {
      '(': ')',
      '{': '}',
      '[': ']',
    };
    const arr = [];
    for (let i = 0; i < s.length; i++) {
      if (/^[a-z0-9]+/i.test(s[i])) return false;
      if (obj[s[i]] !== undefined) {
        arr.push(s[i]);
      } else {
        if (s[i] !== obj[arr.pop()]) return false;
      }
    }
    if(arr.length > 0) return false;
    return true;
  }
}

const t = new Solution();

console.log(t.isValid('[]'));
console.log(t.isValid('[{}]'));
console.log(t.isValid('[({)]'));
console.log(t.isValid('[{aa}]'));
console.log(t.isValid('(('));
