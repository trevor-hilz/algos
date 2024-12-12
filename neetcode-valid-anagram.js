class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
      // const first = s.split('').sort().join();
      // const second = t.split('').sort().join();
      // console.log(first, second);
      // return first === second;

      if(s.length !== t.length) return false;

      const countS, countT = {};

      for(let i )
  }
}

const t = new Solution();

console.log(t.isAnagram('jar', 'jam'));
console.log(t.isAnagram('racecar', 'carrace'));
