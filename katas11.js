const PI = 3.14159 ;

const sphereVolume = function (radius) {
  return 4 / 3 * PI * Math.pow(radius, 3);
}

// console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  return PI * Math.pow(radius, 2) * height / 3;
}

// console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  return height * width * depth;
}

// console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  let volume = 0;
  for(const solid of solids){
    switch(solid.type){
      case 'sphere':
        volume += sphereVolume(solid.radius);
        break;
      case 'cone':
        volume += coneVolume(solid.radius, solid.height);
        break;
      case 'prism':
        volume += prismVolume(solid.height, solid.width, solid.depth);
        break;
      default:
        volume += 0;
    }
  }
  return volume;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);