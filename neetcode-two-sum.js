// twoSum(nums, target) {
//   for(let i = 0; i < nums.length - 1; i++) {
//       for(let j = i + 1; j < nums.length; j++) {
//           if(nums[i] + nums[j] === target) return [i, j]
//       }
//   }
//   return false;
// }

twoSum = (nums, target) => {
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    const cur = target - nums[i];
    if (Object.hasOwn(obj, cur)) {
      if (i !== obj[cur]) {
        return [i, obj[cur]];
      }
    }
  }
  return [];
};

console.log(twoSum([4, 5, 6], 10));
console.log(twoSum([1, 3, 4, 2], 6));
