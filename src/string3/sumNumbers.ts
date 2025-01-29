/**
 *
 * @param str
 * @returns The function should return the sum of the
 * numbers appearing in the string, ignoring all other
 * characters. A number is a series of 1 or more digit
 * chars in a row.
 */
export default function sumNumbers(str: string): number | string {
  if (typeof str !== "string") {
    return "error";
  }
  return str.match(/\d+/g)?.reduce((acc, cur) => acc + parseInt(cur), 0) || 0;
}
