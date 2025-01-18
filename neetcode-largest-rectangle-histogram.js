class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  largestRectangleArea(heights) {
    let res = 0;

    for (let i = 0; i < heights.length; i++) {
      let maxH = heights[i];
      for (let j = i; j < heights.length; j++) {
        maxH = Math.min(maxH, heights[j]);
        console.log(j, maxH, res);
        let num = Math.max(1, j - i);
        let area = maxH * num;
        res = Math.max(res, area);
      }
    }
    return res;
  }
}

const t = new Solution();

console.log(t.largestRectangleArea([1, 3, 7]));
