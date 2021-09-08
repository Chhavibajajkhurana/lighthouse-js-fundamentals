/* 
We need to write a function called whereCanIPark() that returns the coordinates of an available parking spot for the vehicle, 
or returns false if there is no available spot. Our function receives an array of arrays representing parking spots,
and a string with type of the vehicle that is looking for a parking spot.
*/

const whereCanIPark = function (spots, vehicle) {
  for(let y = 0; y < spots.length; y++){
    for(let x = 0; x < spots[y].length; x++){
      if(vehicle === 'regular'){
        if(spots[y][x] === 'R'){
          return [x, y];
        }
      } else if(vehicle === 'small'){
        if(spots[y][x] === 'S' || spots[y][x] === 'R'){
          return [x, y];
        }
      } else if(vehicle === 'motorcycle'){
        if(spots[y][x] === 'R' || spots[y][x] === 'S' || spots[y][x] === 'M'){
          return [x, y];
        }
      }
    }
  }
  return false; 
}



console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))