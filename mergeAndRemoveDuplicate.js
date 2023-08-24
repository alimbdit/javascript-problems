// JavaScript Program to Merge Two Arrays and Remove Duplicate Items

const mergeAndRemoveDuplicate = (arr1, arr2) => {
    const newArr = [...arr1, ...arr2];
    const uniqueArr = [...new Set(newArr)];
    return uniqueArr;
}

const array1 = [1,2,3,4,5,1,4,3];
const array2 = ['hello', 'world', 'hello']

const result = mergeAndRemoveDuplicate(array1, array2)
console.log(result)