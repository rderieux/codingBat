export default function startOz(str) {
  // If first char is o add to return str
  // if second char is z add to return str
  let resultStr;
  if (str.slice(0, 2) === "oz") {
    return "oz";
  } else if (str[0] === "o") {
    resultStr = "o";
  } else if (str[1] === "z") {
    resultStr = "z";
  } else {
    return "";
  }
  return resultStr;
}
