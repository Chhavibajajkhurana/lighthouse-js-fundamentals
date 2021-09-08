/*
URL Encoded Strings
To safely send data in a URL, the data first has to be encoded to convert any 
special characters to URL safe characters. For this assignment we will only focus on the following URL encoding rules:

%20 represents a space character.
Key-value pairs are represented using an = character: key=value
Multiple key-value pairs are separated using a & character
*/
const urlDecode = function(text) {
  result = {};
  newText = text.replace(/%20/g, ' ')
                  .split('&')
                  .map(x => x.split('='))

  for(let i of newText){
    result[i[0]] = i[1]
  }
  return result;
};

// console.log(urlDecode("duck=rubber"));
// console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
