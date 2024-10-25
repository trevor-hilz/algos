const twoSum = (array, target) => {
  const map = {};
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    if (map.hasOwnProperty(complement)) {
      return [map[complement], i];
    }
    map[array[i]] = i;
  }
  return 'value not found';
};

console.log(twoSum([2, 7, 11, 15], 9));
