const generateBoard = function (whiteQueen, blackQueen) {
  // 8 by 8 grid, array in array (8 columns)
  // look at x axis first
  // if 0, look at first array,
  // look at y axis
  // if 0, look at first column
  let board = [];
  let arr = [];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if ((i === whiteQueen[0] && j === whiteQueen[1]) || (i === blackQueen[0] && j === blackQueen[1])) {
        arr.push(1);
      }
      else {
        arr.push(0);
      }
    }
    board.push(arr);
    arr = [];
  }
  return board;
}

const queenThreat = function (board) {
  // find whitequeen and blackqueen
  // once found one, (white queen for example), figure out directionality thorugh array
  // vertical (up & down) direction, use column organization, use its x axis and go down it (same index in a diff array section)
  // horizontal (left & right) direction, search the rest of the array that it's currently in
  // vertical (right and left) direction, go down/up one array, go right/left one index
  let queen = []
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] === 1) {
        queen = [i, j]
      }
    }
  }
  //vertical down
  for (let i = 0; i < 8; i++) {
    if (i !== queen[0]) { 
       if (board[i][queen[1]] === 1) {
         console.log("hello vertical")
       return true;
     }
    }
  }
  //horizontal
  for (let j = 0; j < 8; j++) {
    if (j !== queen[1]) {
      if (board[queen[0]][j] === 1) {
       return true;
     }
     }
  }
  let dldi = queen[0];
  let dldj = queen[1];
    while (dldi < 8 && dldj >= 0) {
      if (dldi !== queen[0] || dldj !== queen[1]) {
         if (board[dldi][dldj] === 1) {
         return true;
       }
       }
       dldi++;
       dldj--;
  }
  let drdi = queen[0];
  let drdj = queen[1];
    while (drdi < 8 && drdj < 8) {
      if (drdi !== queen[0] || drdj !== queen[1]) { 
          if (board[drdi][drdj] === 1) {
            console.log("hello diagonal right down")
          return true;
        }
      }
      drdi++;
      drdj++;
  }
  let dlui = queen[0];
  let dluj = queen[1];
    while (dlui >= 0 && dluj >= 0 ) {
      if (dlui !== queen[0] || dluj !== queen[1]) { 
        if (board[dlui][dluj] === 1) {
          return true;
        }
      }
      dlui--;
      dluj--;
  }
  let drui = queen[0];
  let druj = queen[1];
    while (drui >= 0 && druj < 8) {
      if (drui !== queen[0] || druj !== queen[1]) { 
         if (board[drui][druj] === 1) {
          return true;
        }
      }
      drui--;
      druj++;
  }
  console.log(queen);
  return false;
}

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

// let whiteQueen = [0, 0];
// let blackQueen = [5, 7];
// let generatedBoard = generateBoard(whiteQueen, blackQueen);
// console.log(generatedBoard);
// console.log(queenThreat(generatedBoard));