const lodash = require("lodash");

let originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let size = 3;

const chunkArray = lodash.chunk(originalArray, size);

console.log(chunkArray);

// shuffle(array) randomly shuffles the element of an array and returns a new array with the elements in random order
const shuffledArray = lodash.shuffle(originalArray);

console.log(shuffledArray);

originalArray = [1, 1, 3, 2, 4, 6, 2, 5, 3, 2, 8, 1, 9, 8];

const uniqArray = lodash.uniq(originalArray);

console.log(uniqArray);

let userData = [
  { name: "Ali", age: 23, city: "Shiraz" },
  { name: "Mary", age: 19, city: "Leipzig" },
  { name: "Sahar", age: 22, city: "Berlin" },
  { name: "Sedi", age: 21, city: "Köln" },
];

const sortedUserData = lodash.sortBy(userData, "age");
console.log(sortedUserData);
