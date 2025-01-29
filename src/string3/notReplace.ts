/**
 * Replaces every standalone "is" in the string with "is not".
 * @param {string} str - The input string.
 * @returns {string} - The modified string with "is" replaced by "is not".
 */
export default function notReplace(str: string): string {
  // loop through the string
  // if the current character is not a letter
  // and the next 2 characters are 'is'
  // and the third next character is not a letter
  // replace 'is' with 'is not'
  // return the string
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (
      (i === 0 || !isLetter(str[i - 1])) &&
      str[i] === "i" &&
      str[i + 1] === "s" &&
      (i + 2 >= str.length || !isLetter(str[i + 2]))
    ) {
      result += "is not";
      i++;
    } else {
      result += str[i];
    }
  }
  return result;
}

/**
 * Checks if a character is a letter.
 * @param {string} char - The character to check.
 * @returns {boolean} - True if the character is
 * a letter, false otherwise.
 */
function isLetter(char: string): boolean {
  const code = char.charCodeAt(0);
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}
