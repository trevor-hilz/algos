class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums) {
    const res = new Array(nums.length).fill(1);

    let temp = 1;

    for (let i = 0; i < nums.length; i++) {
      temp = 1;
      for (let j = 0; j < nums.length; j++) {
        if (j === i) continue;
        temp *= nums[j];
      }
      res[i] = temp;
    }
    return res;
  }
}

const test = new Solution();

console.log(test.productExceptSelf([1, 2, 4, 6]));
