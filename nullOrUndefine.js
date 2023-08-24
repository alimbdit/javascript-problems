// JavaScript Program To Check If A Variable Is undefined or null

const checkNullOrUndefine = (value) => {
  if (value === null || typeof value === "undefined") {
    return "The variable is undefined or null.";
  } else {
    return "The variable is neither undefined nor null.";
  }
};

let variable;

const result = checkNullOrUndefine(variable);
console.log(result);
