// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return '';
  }

  // Start by assuming the whole first string is the common prefix
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    // Gradually reduce the prefix until it matches the start of the string
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (prefix === '') {
        return '';
      }
    }
  }

  return prefix;
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
