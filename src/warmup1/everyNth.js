export default function everyNth(str, n) {
  // Loop through str, add str[0], then every nth char to new str
  // return new str
  let everyNthCharStr = "";
  for (let i = 0; i < str.length; i += n) {
    everyNthCharStr += str[i];
  }
  return everyNthCharStr;
}
