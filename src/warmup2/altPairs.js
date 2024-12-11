export default function altPairs(str) {
  // Loop through the provided string
  // start at 0, loop through every 4 indexes
  // slice the string at index and next index
  // concatenate to a new string
  // return new string
  let resultString = "";
  for (let i = 0; i < str.length; i += 4) {
    const strSlice = str.slice(i, i + 2);
    resultString += strSlice;
  }
  return resultString;
}
