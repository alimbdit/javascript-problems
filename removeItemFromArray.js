// JavaScript Program to Remove Specific Item From an Array

const removeItem = (arr, item) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== item) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

const arr = [1, 2, 3, 4, 5];
const result = removeItem(arr, 4);

console.log(result)