// JavaScript Program to Check if An Object is An Array

const checkArray = (arr) => {
  if (Array.isArray(arr)) {
    console.log(`[${arr}] is an array.`);
  } else {
    console.log(`${arr} is not an array.`);
  }
};

const arr = [1, 2, 3, 4];
const number = 5;
checkArray(arr);
checkArray(number);
