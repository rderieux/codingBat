/**
 *
 * @param {string} name
 * @returns a string in the form of a greeting "Hello name!".
 */
export default function helloName(name) {
  if (typeof name !== "string") {
    return "error";
  }
  return `Hello ${name}!`;
}
