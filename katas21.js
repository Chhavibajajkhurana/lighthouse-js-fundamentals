/*
In this kata you'll be responsible for setting up your JS file from scratch. Make sure it is well organized!

Write a guessing game where the user has to guess a secret number. After every guess the program 
tells the user whether their number was too large or too small. At the end, the number of tries 
needed should be printed.

Inputting the same number multiple times should only count as one try. If the user provides an answer 
which isn't a number, print an error message and do not count this as a try.
*/

let prompt = require('prompt-sync')({sigint: true});

let numberToGuess = Math.floor(Math.random() * 100) + 1;
let count = 0;

let foundCorrectNumber = false;

while(!foundCorrectNumber){
  let answer = prompt("Guess a number between 0 - 100: ");
  answer = Number(answer);
  if (isNaN(answer)){
    count++;
    console.log('Not a number! Try again')
  } else if(answer === numberToGuess){
    foundCorrectNumber = true;
    count++;
    console.log(`You got it! You took ${count} attempts`)
  } else if(answer < numberToGuess){
    count++;
    console.log('Too low!');
  } else if (answer > numberToGuess) {
    count++;
    console.log('Too high!');
  } 

}
  
