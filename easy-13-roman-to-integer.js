const romanToInt = (s) => {
  const nums = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  s = s.split('');
  let target = 0;
  for (let i = 0; i < s.length; i++) {
    nums[i] = parseInt(nums[s[i]])
    if(nums[s[i]] < nums[s[i + 1]]) {
      target -= nums[i]
    } else {
      target += nums[i];
    }
  }
  return target;
};

console.log(romanToInt('III'));
console.log(romanToInt('IV'));
console.log(romanToInt('CMXCVIII'));
