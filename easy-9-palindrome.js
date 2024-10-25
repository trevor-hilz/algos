const isPalindrome = (x) => {
  x = x.toString().split('');
  if (x.length <= 1) return true;
  if (x[0] !== x[x.length - 1]) {
    return false;
  } else {
    x = x.join('');
    x = parseInt(x.slice(1, x.length - 1));
    return isPalindrome(x);
  }
};

console.log(isPalindrome(121));
console.log(isPalindrome(1231));
