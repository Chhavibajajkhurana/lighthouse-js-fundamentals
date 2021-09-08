/*
Create a function named organizeInstructors that will receive an array of instructor objects,
 and will return a new object that has the following format:
*/

const organizeInstructors = function(instructors) {
  let organize = {};
  instructors.forEach(i => {
    if(!organize[i.course]){
        organize[i.course] = []; 
        organize[i.course].push(i.name);
    } else {
      organize[i.course].push(i.name);
    }

  })
  return organize;
}


console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));