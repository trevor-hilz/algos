class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    // if(s.length <= 1) return true;

    // const first = t.slice(0,1);
    // const last = t.slice(-1);
    // if (first === last) {
    //   const spliced = t.slice(1, -1)
    //   return this.isPalindrome(spliced);
    // } else {
    //   return false;
    // }

    let t = s.replace(/[^a-z0-9]+/gi, '').toLowerCase();
    if (t.length <= 1) return true;
    for (let i = 0; i < t.length / 2; i++) {
      if (t[i] !== t[t.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
}

const t = new Solution();

console.log(t.isPalindrome('Was it a car or a cat I saw?'));
console.log(t.isPalindrome('tab a cat'));
