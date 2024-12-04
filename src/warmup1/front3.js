/*
Given a string, we'll say that the front is the first 3 chars of the string. 
If the string length is less than 3, the front is whatever is there. 
Return a new string which is 3 copies of the front.
*/

export default function front3(str) {
  // If str is less than 3 return it repeating 3 times
  if (str.length < 3) {
    return str + str + str;
  }
  // Slice first three chars
  const first3Char = str.slice(0, 3);
  // Return first 3 chars 3 times
  return first3Char + first3Char + first3Char;
}
