class Solution {
  encode(strs) {
    let res = "";
    for (const str of strs) {
      res += (str.length + '#' + str)
    }
    return res;
  }

  decode(strs) {
    if (strs.length === 0) return [];

    const res = [];

    let i = 0;
    while(i < strs.length) {
      let j = i;
      let num = 0;
      while (strs[j] !== '#') {
        num = num * 10 + parseInt(strs[j]);
        j += 1;
      }
      j += 1;
      let k = j
      let temp = "";
      while (num > 0) {
        temp += strs[k];
        k += 1;
        num -= 1;
      }
      i = k;
      res.push(temp);
    }
    return res;
  }
}

const test = new Solution();
console.log(test.encode(['neet', 'code', 'love', 'you']));
console.log(test.encode(["we","say",":","yes","!@#$%^&*()"]));
// const string = test.encode(['neet', 'code', 'love', 'you']);
const string = test.encode(["we","say",":","yes","!@#$%^&*()"]);
console.log(test.decode(string));

