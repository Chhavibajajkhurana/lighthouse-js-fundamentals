/*
In this exercise, we will be given a list of instructors and have to determine which instructor has the longest name.

Input
const instructorWithLongestName = function(instructors) {
  // Put your solution here
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
Expected Output
{name: "Jeremiah", course: "Web"}
{name: "Domascus", course: "Web"}
*/


const instructorWithLongestName = function(instructors) {
  let longestName = instructors[0].name.length; 
  let name = '';
  for(let i = 1; i < instructors.length; i++) {
    if(instructors[i].name.length > longestName) {
      longestName = instructors[i].name.length; //?
      name = instructors[i].name; //?
      course = instructors[i].course;
    }
    
  }
  return { 'name': name, 'course': course};
};
