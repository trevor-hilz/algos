class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board) {
    const rows = Array.from({ length: 9 }, () => new Set());
    const cols = Array.from({ length: 9 }, () => new Set());
    const boards = Array.from({ length: 3 }, () =>
      Array.from({ length: 3 }, () => new Set())
    );

    for (let r = 0; r < board.length; r++) {
      for (let c = 0; c < board.length; c++) {
        if(board[r][c] === '.') continue;
        if (rows[r].has(board[r][c]) || cols[c].has(board[r][c]) || boards[Math.floor(r / 3)][Math.floor(c / 3)].has(board[r][c])) {
          return false;
        } else {
          if (board[r][c] !== '.') {
            rows[r].add(board[r][c]);
            cols[c].add(board[r][c]);
            boards[Math.floor(r / 3)][Math.floor(c / 3)].add(board[r][c]);
          }
        }
      }
    }
    return true;
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

console.log(
  test.isValidSudoku([
    ['1', '2', '.', '.', '3', '.', '.', '.', '.'],
    ['4', '.', '.', '5', '.', '.', '.', '.', '.'],
    ['.', '9', '1', '.', '.', '.', '.', '.', '3'],
    ['5', '.', '.', '.', '6', '.', '.', '.', '4'],
    ['.', '.', '.', '8', '.', '3', '.', '.', '5'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '.', '.', '.', '.', '.', '2', '.', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '8'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ])
);
