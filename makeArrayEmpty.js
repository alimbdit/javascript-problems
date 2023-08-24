// JavaScript Program to Empty an Array

const emptyAnArray = (arr) => {
    arr.length = 0
  return (arr);
};

const array = [1, 2, 3, 4, 5, 6];
const result = emptyAnArray(array);
console.log(result);
