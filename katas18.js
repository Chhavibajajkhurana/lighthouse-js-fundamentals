/*
Create a function named squareCode that will receive a message, 
and return the secret square code version of the message.
*/

const squareCode = function(message) {
  let len = Math.ceil(Math.sqrt(message.split(' ').join("").length));
  const messageWithoutSpace = message.split(' ').join('');
  let encrypted = '';
  for(let i = 0; i < len; i++){
    for(let j = 0; j < len; j++){
      if(messageWithoutSpace[len * j + i] !== undefined) {
        encrypted += messageWithoutSpace[len * j + i] 
      } else encrypted += "";
    }
    encrypted += " "
  }
  return encrypted
};

console.log(squareCode("chill out"));
// console.log(squareCode("feed the dog"));
// console.log(squareCode("have a nice day"));
// console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));

/* Expected Output
clu hlt io  
fto ehg ee dd
hae and via ecy
imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau
*/
