const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  let sSort = s.split('').sort().join();
  let tSort = t.split('').sort().join();

  console.log(sSort);
  console.log(tSort);
  return sSort === tSort;
}

console.log(isAnagram('racecar', 'carrace'));
