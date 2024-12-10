class Solution {
  encode(strs) {
    let string = '';
    for (const str of strs) {
      string += str + ' ';
    }
    return string = string.slice(0, -1);
  }

  decode(strs) {
    console.log(strs);

    return strs.split(' ');
  }
}

const test = new Solution();
console.log(test.encode(['neet', 'code', 'love', 'you']));
console.log(test.encode([""]));
const string = test.encode(['neet', 'code', 'love', 'you']);
// const string = test.encode(['']);
console.log(test.decode(string));
