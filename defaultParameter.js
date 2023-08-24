// JavaScript Program to Set a Default Parameter Value For a Function

const defaultParameter = (x = 5, y = 4) => {
  const sum = x + y;
  return sum;
};

console.log(defaultParameter(2, 4));
console.log(defaultParameter(3, 5));
console.log(defaultParameter());
