/**
 *
 * @param {string} str
 * @returns a string with the first two chars removed, unless first char
 * is 'a' or second char is 'b'.  String can be any length.
 */
export default function deFront(str) {
  // Guard against non str arg
  // if the str is less than 2 and 'a' return 'a' str
  // else return empty str
  // if the first char is 'a' and second char is 'b'
  // return str
  // if the first char is 'a' and the second char is not 'b'
  // return string without second char
  // if the first char is not 'a' and the second char is 'b'
  // return string without the first char
  // else return str without first two char
  if (typeof str !== "string") {
    return "error";
  }

  if (str.length < 2 && str === "a") {
    return "a";
  } else if (str.length < 2 && str !== "a") {
    return "";
  } else if (str[0] === "a" && str[1] === "b") {
    return str;
  } else if (str[0] === "a" && str[1] !== "b") {
    const indexTwoToEnd = str.slice(2);
    return str[0] + indexTwoToEnd;
  } else if (str[0] !== "a" && str[1] === "b") {
    return str.slice(1);
  } else {
    return str.slice(2);
  }
}
