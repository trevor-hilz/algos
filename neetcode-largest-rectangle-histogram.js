class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  largestRectangleArea(heights) {
      let res = 0;

      for(let i = 0; i < heights.length - 1; i++) {
          let maxH = heights[i];
          for (let j = i; j < heights.length; j++) {
              maxH = Math.min(maxH, heights[j])
              console.log(j, maxH);
              let num = 1 + (j - i);
              let area = maxH * num;
              res = Math.max(res, area);
          }
      }
      return res;
  }
}
