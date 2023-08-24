// JavaScript Program to Remove Duplicates From Array

const removeDuplicate = (arr) => {
  let newArr = [];
  for (let i of arr) {
    if (!newArr.includes(i)) {
      newArr.push(i);
    }
  }
  return newArr;
};

const array = [1, 2, 2, 3, 4, 5, 5];
const result = removeDuplicate(array);

console.log(result);
