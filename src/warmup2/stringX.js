export default function stringX(str) {
  // Declare an empty string
  // if string is one char and equals x return xx
  // else loop through the string,
  // ending at str.length -1
  // if the char does not equal x push to new str
  // return new string
  let resultStr = "";
  if (typeof str !== "string") {
    return "error";
  }
  if (str.length === 0) {
    return "";
  }
  if (str.length === 1 && str === "x") {
    return "xx";
  }
  resultStr = str[0] === "x" ? "x" : "";
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] !== "x") {
      resultStr += str[i];
    }
  }
  if (str[str.length - 1] === "x") {
    resultStr += "x";
  } else {
    resultStr += str[str.length - 1];
  }
  return resultStr;
}
