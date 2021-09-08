/*
In this exercise, we will be given an array of 2 or more numbers. 
We will then have to find the two largest numbers in that array, and sum them together.

Input
const sumLargestNumbers = function(data) {
  // Put your solution here
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

Expected Output
11
5
126
*/


const sumLargestNumbers = function(data) {
  let largest = data[0];
  let secondLargest = data[1];

  if(largest > secondLargest) {
    largest = data[0];
    secondLargest = data[1];
  } else {
    secondLargest = data[0];
    largest = data[1];
  }

  for(let i = 2; i < data.length; i++){
    if(data[i] > largest) {
      secondLargest = largest;
      largest = data[i];
    }
  }
  return largest + secondLargest;
}

console.log(sumLargestNumbers([1, 2, 3])); 



   




