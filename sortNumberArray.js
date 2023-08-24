// JavaScript Program to Sort an Array of numbers

const sortByNumber = (a, b) => {
  return a - b;
};

const array = [1, 5, 3, 4, 8, 6, 2, 7, 9];

const result = array.sort(sortByNumber);

console.log(result);
