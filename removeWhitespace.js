// JavaScript Program to Remove All Whitespaces From a Text

const removeWhitespace = (text) => {
  const withoutWhitespace = text.split(" ").join("");
  return withoutWhitespace;
};

const str = 'hello world!';

const result = removeWhitespace(str);
console.log(result)
