export default function firstHalf(str) {
  // Guard against non string args
  // check if string is even in length
  // if it is return str[0] to string length / 2
  // else return string
  if (typeof str !== "string") {
    return "error";
  }
  if (str.length % 2 === 0) {
    return str.slice(0, str.length / 2);
  } else {
    return str;
  }
}
