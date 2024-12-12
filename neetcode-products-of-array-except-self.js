class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums) {
    // const res = new Array(nums.length).fill(1);

    // let temp = 1;

    // for (let i = 0; i < nums.length; i++) {
    //   temp = 1;
    //   for (let j = 0; j < nums.length; j++) {
    //     if (j === i) continue;
    //     temp *= nums[j];
    //   }
    //   res[i] = temp;
    // }
    // return res;

    const n = nums.length; 
    const res = new Array(n).fill(1);

    let prefix = 1;
    for(let i = 0; i < n; i++) {
      res[i] = prefix;
      prefix *= nums[i];
    }

    console.log(res);

    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
      res[i] *= suffix;
      suffix *= nums[i];
      console.log(res[i], suffix)
    }
    console.log(res);
    return res;
  }
}

const test = new Solution();

console.log(test.productExceptSelf([1, 2, 4, 6]));
