class Solution {
  /**
   * @param {number[]} height
   * @return {number}
   */
  trap(height) {
    let output = 0;
    const arr = [];

    while (height[0] === 0) {
      height.shift();
    }

    for (let i = height.length - 1; i >= 1; i--) {
      if (height[i - 1] < height[i]) {
        height = height.slice(0, i);
        break;
      }
    }

    let first = height.shift();

    for (let i = 0; i < height.length; i++) {
      if (height[i] < first) {
        output += first - height[i];
      } else if (height[i] > first) {
        first = height[i];
      }
      console.log(first, height[i], output);
    }
    return output;
  }
}
