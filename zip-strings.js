function zipStrings(strA, strB) {
  let result = "";
  let rest = "";
  if (strA.length > strB.length) {
    rest = strA.substring(strB.length);
    strA = strA.substring(0, strB.length);
  }
  if (strB.length > strA.length) {
    rest = strB.substring(strA.length);
    strB = strB.substring(0, strA.length);
  }
  for (let i = 0; i < strA.length; i++) {
    result += strA.charAt(i) + strB.charAt(i);
  }
  return result + rest;
}
