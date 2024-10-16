const lengthOfLongestSubstring = (str) => {
  if (str.length <= 1) return str.length;
  let longest = 0;
  for (let i = 0; i < str.length; i++) {
    const storage = new Set();
    storage.add(str[i]);
    for (let j = i + 1; j < str.length + 1; j++) {
      if (storage.has(str[j]) || j === str.length) {
        if (storage.size > longest) longest = storage.size;
        break;
      } else {
        storage.add(str[j]);
      }
    }
  }
  return longest;
};

// console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('au'));
