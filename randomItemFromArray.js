// JavaScript Program to Get Random Item From an Array

const getRandomItem = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = getRandomItem(array);

console.log(result);
