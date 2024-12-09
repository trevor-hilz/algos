const groupAnagrams = (strs) => {
  const map = new Map();

  for (let str of strs) {
    const sorted = str.split('').sort().join('');
    if (!map.has(sorted)) {
      map.set(sorted, []);
    }
    map.get(sorted).push(str);
  }
  return Array.from(map.values());
};

console.log(groupAnagrams(['act', 'pots', 'tops', 'cat', 'stop', 'hat']));
