class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    // if(nums.length <= 1) return nums.length;
    // if(nums.length === 2 && nums[0] - nums[1] !== 1) return 1

    // const output = new Set();

    // for (const num of nums) {
    //   if (!output.has(num)) {
    //     output.add(num);
    //   }
    // }

    // const values = Array.from(output.values()).sort((a, b) => a - b);
    // console.log(values);

    // let temp = [values[0]];
    // let result = [];

    // for (let i = 1; i < values.length; i++) {
    //   if (values[i] - values[i-1] === 1) {
    //     temp.push(values[i]);
    //   } else {
    //     temp = [values[i]];
    //   }
    //   if (temp.length > result.length) result = temp;
    // }
    // return result.length;

    const numSet = new Set(nums);
    let longest = 0;

    for(const num of nums) {
      if(!numSet.has(num - 1)) {
        let length = 0;
        while(numSet.has(num + length)) {
          length++;
        }
        longest = Math.max(length, longest);
      }
    }
    return longest;
  }
}

const t = new Solution();

console.log(t.longestConsecutive([2, 20, 4, 10, 3, 4, 5]));
console.log(t.longestConsecutive([0, 3, 2, 5, 4, 6, 1, 1]));
console.log(t.longestConsecutive([9,1,4,7,3,-1,0,5,8,-1,6]));
