/*
Create a function named multiplicationTable that receives a number maxValue as input 
and creates a square multiplication table where maxValue is the largest value in the table.
*/


const multiplicationTable = function(maxValue) {
  let i = '';
  for(let y = 1; y <= maxValue; y++){
    for(let x = 1; x <= maxValue; x++){
      i += y * x + ' ';
    }
    i += '\n';
  }
  return i;
};

console.log(multiplicationTable(5));
