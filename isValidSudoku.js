const isValidSudoku = function (board) {
    //first check row
    //then check column
    //then check square
    //validate if string is number, if so, then do checks
    let square = {};
    for (let row = 0; row < board.length; row++) {
        for (let column = 0; column < board.length; column++) {
            if (Number(board[row][column])) {
                // check column
                for (let j = 0; j < board.length; j++) {
                    if (j === column || j === row) {
                    } else if (board[row][j] === board[row][column]) {
                        return false;
                        //check row
                    } else if (board[j][column] === board[row][column]) {
                        return false;
                    } 
                }
                // check square
    
            }
            findSquares(row, column, board, square);
            
        }
    }
    console.log(square);
    for (let key in square) {
        for (let i = 0; i < square[key].length; i++) {
            if (Number(square[key][i])) {
                for (let j = i+1; j < square[key].length; j++) {
                    if (square[key][i] === square[key][j]) {
                        return false;
                    }
                }
            }
        }
    }
    return true;
    }

const findSquares = function (row, column, board, square) {
    for (let i = 0; i <= 3; i++) {
    if (column >= 0 + (i*3) && column <= 2 + (i*3) && row <= 2) {
        if (!square[i]) {
            square[i] = [board[row][column]]
        } else {
            square[i].push(board[row][column]);
        }
    }
    if (column >= 0 + (i*3) && column <= 2 + (i*3)  && row > 2 && row <= 5) {
        if (!square[i+10]) {
            square[i+10] = [board[row][column]];
        } else {
            square[i+10].push(board[row][column]);
        }
    }
    if (column >= 0 + (i*3) && column <= 2 + (i*3) && row >= 6 && column <= 8) {
        if (!square[i+20]) {
            square[i+20] = [board[row][column]]
        } else {
            square[i+20].push(board[row][column]);
        }
    }
}
}

console.log(isValidSudoku([
["5","3",".",".","7",".",".",".","."],
["6",".",".","1","9","5",".",".","."],
[".","9","8",".",".",".",".","6","."],
["8",".",".",".","6",".",".",".","3"],
["4",".",".","8",".","3",".",".","1"],
["7",".",".",".","2",".",".",".","6"],
[".","6",".",".",".",".","2","8","."],
[".",".",".","4","1","9",".",".","5"],
[".",".",".",".","8",".",".","7","9"]]));