function splitStr(str, size) {
  let result = [];
  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size));
  }
  console.log(result);
}

splitStr("abcdefg", 4);
