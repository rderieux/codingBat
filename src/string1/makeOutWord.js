/**
 *
 * @param {string} out
 * @param {string} word
 * @returns a string with the 'word' string in the middle of the 'out' string.
 */
export default function makeOutWord(out, word) {
  if (typeof out !== "string" || typeof word !== "string") {
    return "error";
  }
  if (out.length !== 4) {
    throw new Error("Out argument must be 4 characters.");
  }
  const outFirstTwo = out.slice(0, 2);
  const outLastTwo = out.slice(-2);

  return outFirstTwo + word + outLastTwo;
}
