const topKFrequent = (nums, k) => {
  const map = new Map();

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  console.log(map);
  
  return Array.from(map.entries())
  .sort((a, b) => b[1] - a[1])
  .slice(0, k)
  .map(([num]) => num);
};

console.log(topKFrequent([1, 2, 2, 3, 3, 3], 2));
console.log(topKFrequent([1, 4, 4, 5, 3, 3], 2));
