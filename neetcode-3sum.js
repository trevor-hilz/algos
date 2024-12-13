class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums) {
    const res = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) break;
      if (i > 0 && nums[i] === nums[i - 1]) continue;
      let l = i + 1;
      let r = nums.length - 1;

      while (l < r) {
        let sum = nums[l] + nums[i] + nums[r];
        if (sum > 0) {
          r -= 1;
        } else if (sum < 0) {
          l += 1;
        } else {
          res.push([nums[l++], nums[i], nums[r]]);
          while (nums[l] === nums[l - 1] && l < r) {
            l += 1;
          }
        }
      }
    }
    return res;
  }
}

const t = new Solution();

console.log(t.threeSum([-1, 0, 1, 2, -1, 4]));
