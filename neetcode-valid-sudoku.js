class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board) {
    // create set for rows, cols, and squares
    // nested for loop to iterate through the sudoku board
    // checked if board at x/y exists in the row at i set, col at i set, and square at i, y set
    // if duplicate, return false
    // at conclusion, return true
    for(let i = 0; i < board.length; i++) {
      const set = new Set();
      for(const data of board[i]) {
        if(set.has(data) && data !== '.') return false;
        set.add(data);
      }
      console.log(set);
    }
    return 'sudoku';
  }
}

const test = new Solution();

console.log(
  test.isValidSudoku([
    ['1', '2', '.', '.', '3', '.', '.', '.', '.'],
    ['4', '.', '.', '5', '.', '.', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '.', '3'],
    ['5', '.', '.', '.', '6', '.', '.', '.', '4'],
    ['.', '.', '.', '8', '.', '3', '.', '.', '5'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '.', '.', '.', '.', '.', '2', '.', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '8'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ])
);
