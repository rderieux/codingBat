/*
The parameter weekday is true if it is a weekday, 
and the parameter vacation is true if we are on vacation. We sleep 
in if it is not a weekday or we're on vacation. Return true if we sleep in.
*/

/**
 *
 * @param {boolean} weekday
 * @param {boolean} vacation
 * @returns true if it is not a weekday or you are on vacation
 * otherwise it returns false
 */
export default function sleepIn(weekday, vacation) {
  // if weekday is not true or vacation is true we sleep in,
  // else we do not sleep in
  if (typeof weekday !== "boolean" || typeof vacation !== "boolean") {
    return "error";
  } else if (!weekday || vacation) {
    return true;
  } else {
    return false;
  }
}
