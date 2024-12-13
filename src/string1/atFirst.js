export default function atFirst(str) {
  // Guard against non string args
  // if string length is 0 return @@
  // if string length is 1 return str + @
  // else return first two chars of str
  if (typeof str !== "string") {
    return "error";
  } else if (str.length === 0) {
    return "@@";
  } else if (str.length === 1) {
    return str + "@";
  } else {
    return str.slice(0, 2);
  }
}
