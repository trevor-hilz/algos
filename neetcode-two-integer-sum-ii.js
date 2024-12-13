class Solution {
  /**
   * @param {number[]} numbers
   * @param {number} target
   * @return {number[]}
   */
  twoSum(numbers, target) {
  //   const set = new Set(numbers);
  //   console.log(set);
  //   for (let i = 0; i < numbers.length; i++) {
  //     if (set.has(target - numbers[i])) {
  //       const arr = Array.from(set);
  //       const pos = arr.indexOf(target - numbers[i]);
  //       return [i + 1, pos + 1];
  //     }
  //   }
  //   return false;
    let left = 0;
    let right = numbers.length - 1;

    for(const num of numbers) {
      let result = numbers[left] + numbers[right];
      console.log(result);
      if(result < target) {
        left++;
      } else if (result > target) {
        right--;
      } else if (result === target) {
        return [++left, ++right];
      }
    }
}
}

const t = new Solution();

console.log(t.twoSum([1, 2, 3, 4], 3));
