// JavaScript Program to Sort Array of Objects by Property Values

const sortByNameProperty = (a, b) => {
  const name1 = a.name.toLowerCase();
  const name2 = b.name.toLowerCase();

  if (name1 > name2) {
    return 1;
  } else {
    return -1;
  }
};

const students = [{name:'john', age: 24},{name:'kabul', age: 20},{name:'abul', age: 28},{name:'zony', age: 15},]

const result = students.sort(sortByNameProperty);

console.log(result);
