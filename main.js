
function saveValues() { // this saves the values inputed into the table into an array
  var table = document.getElementById("sudoku");
  var rows = table.getElementsByTagName("tr");
  var values = [];

  for (var i = 0; i < rows.length; i++) {
    var cells = rows[i].getElementsByTagName("td");
    var rowValues = [];

    for (var j = 0; j < cells.length; j++) {
      var input = cells[j].querySelector("input");
      rowValues.push(input.value);
    }

    values.push(rowValues);
  }

  alert(values); //shows an array of the inputed values
  
  // converts 1d array to 2d array
  var values2d = []; // this is the new 2d array
  while (values.length) values2d.push(values.splice(0, 9));
}

function difficultyEasy(){
  alert("You have set the difficulty to 'EASY'.");
  /*
  This function is meant to change the sudoku board into an easy sudoku board and also generate a solution board. 
  For which, the user inputs will be compared with the solution board and will notify if they are correct or wrong. 
  */
}

function difficultyMedium(){
  alert("You have set the difficulty to 'MEDIUM'.");
  /*
  This function is meant to change the sudoku board into a medium sudoku board and also generate a solution board. 
  For which, the user inputs will be compared with the solution board and will notify if they are correct or wrong. 
  */
}

function difficultyHard(){
  alert("You have set the difficulty to 'HARD'.");
  /*
  This function is meant to change the sudoku board into a hard sudoku board and also generate a solution board. 
  For which, the user inputs will be compared with the solution board and will notify if they are correct or wrong. 
  */
}

// Board Logic

//various boards
let board1 = [
  [0,4,1,0,9,2,7,3,8],
  [0,7,6,0,1,0,2,0,0],
  [0,0,2,0,0,0,0,5,0],
  [0,6,0,0,5,1,8,0,4],
  [0,8,3,4,0,0,0,0,0],
  [0,0,0,2,8,0,1,0,0],
  [0,1,0,9,4,0,3,0,0],
  [6,0,0,0,0,8,4,7,5],
  [0,2,8,0,7,0,9,0,6],
];

let board1Solved = [
  [0,4,1,0,9,2,7,3,8],
  [0,7,6,0,1,0,2,0,0],
  [0,0,2,0,0,0,0,5,0],
  [0,6,0,0,5,1,8,0,4],
  [0,8,3,4,0,0,0,0,0],
  [0,0,0,2,8,0,1,0,0],
  [0,1,0,9,4,0,3,0,0],
  [6,0,0,0,0,8,4,7,5],
  [0,2,8,0,7,0,9,0,6],
];

let board2 =[
  [1,0,6,0,3,0,0,8,0],
  [0,4,0,0,0,0,0,9,6],
  [0,3,2,4,0,0,1,0,7],
  [0,0,0,0,1,3,6,0,0],
  [0,5,7,0,9,0,0,0,0],
  [6,1,3,8,0,2,0,0,0],
  [3,0,0,0,0,6,0,0,0],
  [4,0,0,0,0,8,0,0,0],
  [0,6,1,0,0,0,0,2,0],
];

let board2Solved =[
  [1,0,6,0,3,0,0,8,0],
  [0,4,0,0,0,0,0,9,6],
  [0,3,2,4,0,0,1,0,7],
  [0,0,0,0,1,3,6,0,0],
  [0,5,7,0,9,0,0,0,0],
  [6,1,3,8,0,2,0,0,0],
  [3,0,0,0,0,6,0,0,0],
  [4,0,0,0,0,8,0,0,0],
  [0,6,1,0,0,0,0,2,0],
];

let board3 =[
  [0,5,0,0,0,6,0,1,0],
  [0,7,0,2,0,0,9,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,4,7,0,2,0,0,6,0],
  [0,0,0,3,0,0,0,4,0],
  [0,1,0,9,0,0,0,7,0],
  [0,2,0,5,0,0,8,0,0],
  [4,0,3,0,0,0,0,0,0],
  [5,0,0,0,3,0,1,0,0],
];

let board3Solved =[
  [0,5,0,0,0,6,0,1,0],
  [0,7,0,2,0,0,9,0,0],
  [0,0,0,0,1,0,0,0,0],
  [0,4,7,0,2,0,0,6,0],
  [0,0,0,3,0,0,0,4,0],
  [0,1,0,9,0,0,0,7,0],
  [0,2,0,5,0,0,8,0,0],
  [4,0,3,0,0,0,0,0,0],
  [5,0,0,0,3,0,1,0,0],
];

//----------------------------------

// Checking if the number is already present in the row
function checkRow(board, row, num){
  for (let i = 0; i < 9; i++){
      if (board[row][i] == num){
          return false;
      }
  }
  return true;
}

// Checking if the number is already present in the column
function checkCol(board, col, num){
  for (let i = 0; i < 9; i++){
      if (board[i][col] == num){
          return false;
      }
  }
  return true;
}

// Checking if the number is already present in the respective 3x3 box
function checkBox (board, row, col, num){
  // Algorithm for finding which box the number is in 
  var initialRow = row - row % 3;
  var initialCol = col - col % 3;
  for (let i = initialRow; i < initialRow + 3; i++){
      for (let j = initialCol; j < initialCol + 3; j++){
          if (board[i][j] == num){
              return false;
          }
      }
  }
  return true;
}

// Checking if the number is valid to be placed in the cell using row, column and box condition
function checkValid( board, row, col, num){
  if (checkRow(board, row, num) && checkCol(board, col, num) && checkBox(board, row, col, num)){
      return true;
  }
  return false;
}

// Solving the unfilled sudoku board using nested for loops and recursion
function solveSudoku(board){
  for (let i = 0; i < 9; i++){
  for (let j = 0; j < 9; j ++){
    if (board[i][j] == 0){
          for (let k = 1; k < 10; k++){
              if(checkValid(board, i, j, k)){

                  board[i][j] = k;
              
                  if (solveSudoku(board)){
                      return true;
                      
                  }
                  else{
                      board[i][j] = 0;
                  }
              }
          }
          return false;
      }
  }
}
  return true;
}