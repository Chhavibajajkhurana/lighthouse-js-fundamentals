/*
Create a function named camelCase that will convert 
a string to camel case, and return the result.
*/

const camelCase = function(input) {
  let string = input.split("");
  string[0] = string[0].toLowerCase();
  for(let i = 0; i < string.length; i++) {
    if(string[i] === " "){
      string[i+1] = string[i+1].toUpperCase();
      string[i] = string[i].replace(" ", "");
    }
  }
  return string.join("");
};