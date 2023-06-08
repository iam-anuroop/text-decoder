const alphabetArray = [];

for (let i = 0; i < 26; i++) {
  const letter = String.fromCharCode(97 + i); // 97 is the ASCII code for 'a'
  const obj = {
    id: letter,
    [letter]: letter,
    dcode: i + 1,
  };
  alphabetArray.push(obj);
}

console.log(alphabetArray);

export default alphabetArray;