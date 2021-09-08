/*
Create a function named repeatNumbers that will return a string with each of the given 
values repeated the appropriate number of times, if there are multiple sets of values 
each set should be separated by a comma. If there is only one set of values then you 
should omit the comma.
*/


const repeatNumbers = function(data) {
  let str = '';
  let tempStr = '';
  if(data.length > 1) {
    let len = 0;
    while(len < data.length){
      for(let i = 0; i < data[len][1]; i++){
        tempStr += data[len][0];
    }
    str += `${tempStr}`;
    tempStr = '';
    if(len < data.length - 1) str += ', ';
    len++;
    }

    return str;
  } else {
    for(let i = 0; i < data[0][1]; i++){
      str += data[0][0];
    }

    return str;
  }
 
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]))