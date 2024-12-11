class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */

  hasDuplicate(nums) {
    const set = new Set();
    for (const num of nums) {
      if (set.has(num)) return true;
      set.add(num);
    }
    return false;
  }
}

const test = new Solution();

console.log(test.hasDuplicate([1, 2, 3, 3]));
console.log(test.hasDuplicate([1, 2, 3, 4]));
