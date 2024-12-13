class Solution {
  maxArea(heights) {
    let l = 0;
    let r = heights.length - 1;
    let area = 0;

    while (l < r) {
      const temp = Math.min(heights[l], heights[r]) * (r - l);
      area = Math.max(temp, area);
      if (heights[l] <= heights[r]) {
        l++;
      } else {
        r--;
      }
    }
    return area;
  }
}

const t = new Solution();

console.log(t.maxArea([1, 7, 2, 5, 4, 7, 3, 6]));
