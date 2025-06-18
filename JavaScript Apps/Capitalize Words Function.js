function ucWords(string) {
  let stringWords = string.split(" ");
  let newArray = stringWords.map((el) => {
    return el[0].toUpperCase() + el.slice(1);
  });
  return newArray.join(" ");
}

console.log(ucWords("Test"));
