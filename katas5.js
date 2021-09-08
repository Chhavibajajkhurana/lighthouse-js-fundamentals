/*
Kata 5 - Percent Encoded String

In this exercise, we will be given a normal string of words and turn it into a percent-encoded string by replacing all whitespace with %20.

Percent Encoding
Take a look at the following URL, specifically the last part:

This URL will perform a google search for the term "lighthouse labs". Notice that when the string "lighthouse labs" is part of a URL, the space is replaced with %20.

If we want to add a parameter to a url, there are certain characters that must be encoded in order to make the URL valid. There are many characters that must be encoded, including: , !, ", and #. For this exercise, we will only be focusing on replacing the space with %20.

Input
const urlEncode = function(text) {
  // Put your solution here
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

Expected Output
Lighthouse%20Labs
Lighthouse%20Labs
blue%20is%20greener%20than%20purple%20for%20sure

*/

const urlEncode = function(text) {
  const regex = /\s+/g;
  return text.replace(regex, '%20');
};

console.log(urlEncode("blue is greener than purple for sure"));