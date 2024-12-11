export default function stringYak(str) {
  // Create a result string
  // Loop through provided string
  // if string at index equals 'y' and index + 2 equal k
  // move index + 3, concat non skipped chars to result string
  let resultStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "y" && i + 2 < str.length && str[i + 2] === "k") {
      i += 2;
    } else {
      resultStr += str[i];
    }
  }
  return resultStr;
}
