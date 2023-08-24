// JavaScript Program to Append an Object to An Array

const objectInsert = (arr, obj) => {
  const newArr = [...arr, obj];
  return newArr;
};

const arr = [1, 2, 3];
const obj = { x: 4, y: 5 };
const result = objectInsert(arr, obj);

console.log(result);
