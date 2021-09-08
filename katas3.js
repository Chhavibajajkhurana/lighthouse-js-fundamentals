/*
In this exercise, we will be counting the number of vowels that appear in a given string. For this exercise, consider the following to be vowels: a, e, i, o, and u.

INPUT
const numberOfVowels = function(data) {
  // Put your solution here
};

console.log(numberOfVowels("orange"));            //3
console.log(numberOfVowels("lighthouse labs"));   //5
console.log(numberOfVowels("aeiou"));             //5


*/

const numberOfVowels = function(data) {
  let regex = 'aeiou';
  let count = 0;
  for(let i = 0; i < data.length; i++){
    if(regex.indexOf(data[i]) >= 0) count++;
  }
  return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));   
console.log(numberOfVowels("aeiou")); 