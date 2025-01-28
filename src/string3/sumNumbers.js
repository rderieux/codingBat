export default function sumNumbers(str) {
  if (typeof str !== "string") {
    return "error";
  }
  return str.match(/\d+/g)?.reduce((acc, cur) => acc + parseInt(cur), 0) || 0;
}
