// JavaScript Program to Split Array into Smaller Chunks

const splitArrayByChunk = (arr, chunk) => {
  for (let i = 0; i < arr.length; i += chunk) {
    let newArr;
    newArr = arr.slice(i, i + chunk);
    console.log(newArr);
  }
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const chunk = 2;

splitArrayByChunk(array, chunk);
