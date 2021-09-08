/*
Create a function named blocksAway that will receive an array of directions, 
and return an object that calculates how far north and east those directions will take someone.
*/

const blocksAway = function(directions) {
  let origin = [0, 0];
  let finalPos = {};

  if(directions[0] === 'right'){
    origin[0] += directions[1]; 
  } else if(directions[0] === 'left'){
    origin[1] += directions[1];
  }
  for(let i = 2; i < directions.length; i+=2){
    if(directions[i] === 'right' && directions[i-2] === 'right' && directions[i-4] === 'right' && directions[i-6] === 'right'){
      origin[1] += directions[i+1];
    } else if(directions[i] === 'right' && directions[i-2] === 'right' && directions[i-4] === 'right'){
      origin[0] -= directions[i+1]; 
    } else if (directions[i] === 'right' && directions[i-2] === 'right'){
      origin[1] -= directions[i+1]; 
    } else if (directions[i] === 'right') {
      origin[0] +=  directions[i+1];
    } else if(directions[i] === 'left' && directions[i-2] === 'left' && directions[i-4] === 'left' && directions[i-6] === 'left'){
      origin[0] += directions[i+1];
    } else if(directions[i] === 'left' && directions[i-2] === 'left' && directions[i-4] === 'left'){
      origin[1] -= directions[i+1]; 
    } else if (directions[i] === 'left' && directions[i-2] === 'left'){
      origin[0] -= directions[i+1]; 
    } else if (directions[i] === 'left') {
      origin[1] +=  directions[i+1];
    }
  }
  finalPos['east'] = origin[0];
  finalPos['north'] = origin[1];
  return finalPos;
}

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));

