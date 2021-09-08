/*
Create a function named makeCase that will receive an input string and one or more casing options. 
Return a new string that is formatted based on casing options:

Precedence of each of the casing styles are as follows, values higher in the list should be processed first:
camel, pascal, snake, kebab, title
vowel, consonant
upper, lower
*/

const makeCase = function(input, selectCase) {
  let result = input;
  let styles= [];

  if(Array.isArray(selectCase)){
    for(let selectStyle of selectCase){
      styles.push(selectStyle);
    }
  } else styles.push(selectCase);

  for(let style of styles){
    switch(style){
      case "camel":
        result = camelCase(result);
        break;
      case 'pascal':
        result = pascalCase(result);
        break;
      case 'snake':
        result = snakeCase(result);
        break;  
      case 'kebab':
        result = kebabCase(result);
        break;  
      case 'title':
        result = titleCase(result);
        break;  
      case 'vowel':
        result = vowelCase(result);
        break; 
      case 'consonant':
        result = consonantCase(result);
        break;
      case 'upper':
        result = result.toUpperCase();
        break;
      case 'lower':
        result = result.toLowerCase();
    }
  } 
  return result;
}

const camelCase = (input) =>{
  return input.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index){
    return index == 0 ? word.toLowerCase() : word.toUpperCase()
  }).replace(/\s+/g, "");
}

const pascalCase = (input) =>{
  return input.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index){
    return index == 0 ? word.toUpperCase() : word.toUpperCase()
  }).replace(/\s+/g, "");
}

const snakeCase = (input) =>{
  return input.replace(/\s+/g, "_");
}

const kebabCase = (input) =>{
  return input.replace(/\s+/g, "-");
}

const titleCase = (input) =>{
  return input.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index){
    return index == 0 ? word.toUpperCase() : word.toUpperCase()
  });
}

const vowelCase = (input) =>{
  return input.replace(/[aeiouAEIOU]/g, (word) => word.toUpperCase())
}

const consonantCase = (input) =>{
  return input.replace(/[^aeiouAEIOU]/g, (word) => word.toUpperCase())
}

console.log(makeCase("THIS IS A STRING", ['lower', 'snake']));
