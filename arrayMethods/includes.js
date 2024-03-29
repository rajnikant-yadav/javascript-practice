// includes( )
// This method checks if an array includes the element that passes the condition, returning true or false as appropriate. We can also use includes with string as well
// Syntax array.includes(searchElement, fromIndex);

const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false
console.log(pets[0].includes('at'));
// expected output: 

// For Strings:
// Syntax string.includes(searchString, position);
const sentence = 'This is a sample sentence';

const includesSample = sentence.includes('sample');
console.log(includesSample); // Output: true
