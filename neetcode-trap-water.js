class Solution {
  /**
   * @param {number[]} height
   * @return {number}
   */
  trap(height) {
    let output = 0;
    let l = 0;
    let r = height.length - 1;
    let leftMax = height[l];
    let rightMax = height[r];

    while (l < r) {
      if (leftMax < rightMax) {
        l += 1;
        leftMax = Math.max(leftMax, height[l]);
        output += leftMax - height[l];
      } else {
        r -= 1;
        rightMax = Math.max(rightMax, height[r]);
        output += rightMax - height[r];
      }
    }
    return output;
  }
}
