class Solution {
  /**
   * @param {number[][]} matrix
   * @param {number} target
   * @return {boolean}
   */
  searchMatrix(matrix, target) {
    for (const arr of matrix) {
      if (arr[0] <= target && arr[arr.length - 1] >= target) {
        if (arr.includes(target)) {
          return true;
        }
      }
    }
    return false;
  }
}
