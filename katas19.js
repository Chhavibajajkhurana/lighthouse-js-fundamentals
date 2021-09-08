/*
A game of chess is played on an 8 column by 8 row board. 
In the game of chess, a queen can attack pieces which are on the same row, column, or diagonal.
*/
 
const generateBoard = (whiteQueen, blackQueen) =>{
  let board = [];
  let hzl = [];
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if((whiteQueen[0] === i && whiteQueen[1] === j) || (blackQueen[0] === i && blackQueen[1] === j)){
        hzl.push(1);
      } else  hzl.push(0);
    }
    board.push(hzl)
    hzl = [];
  }
  return board;
}

const queenThreat = board => {
  let queen = [];
  let k = 0;
  //find the positions of the 2 queens
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 1) {
        queen[k] = [i, j];
        k++;
      }
    }
  }
  if(queen[1][0] === queen[0][0] || queen[0][1] === queen[1][1] || 
    ((Math.abs(queen[0][0] - queen[0][1]) === Math.abs(queen[1][1] - queen[1][0])))){
      return true;
    } else return false;
}



let whiteQueen = [0, 1];
let blackQueen = [3, 4];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard))
