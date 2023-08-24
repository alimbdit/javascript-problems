// Javascript Program to Generate a Random Number Between Two Numbers

const randomBetween = (min, max) => {
  const number = Math.floor(Math.random() * (max - min)) + min;
  return number;
};

const result = randomBetween(5, 12);

console.log(result);
