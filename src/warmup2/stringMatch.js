export default function stringMatch(a, b) {
  // Declare a count varialbe
  // find out which string is shorter
  // loop through shorter string
  // grab the substring at index and next char for both
  // compare the substrings, if equal add to count
  // return count
  if (typeof a !== "string" || typeof b !== "string") {
    return "error";
  }
  let count = 0;
  const length = Math.min(a.length, b.length);
  for (let i = 0; i < length - 1; i++) {
    const aSubstring = a.substring(i, i + 2);
    const bSubstring = b.substring(i, i + 2);

    if (aSubstring === bSubstring) {
      count += 1;
    }
  }
  return count;
}
