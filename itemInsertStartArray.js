// JavaScript Program to Add Element to Start of an Array

const insertStart = (arr, item) => {
  arr.unshift(item);
  return arr;
};

const arr = [1, 2, 3, 45, 6, 8];
insertStart(arr, 100);

console.log(arr);
