// JavaScript Program to Compare Elements of Two Arrays

const compareArray = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    let result = false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      } else {
        result = true;
      }
    }
    return result;
  }
};

const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 2, 3, 4, 5];
const array3 = [1, 2, 3, 5, 6];

const result = compareArray(array1, array3);

if (result) {
  console.log(`Arrays are same.`);
} else {
  console.log(`Arrays are not same.`);
}
