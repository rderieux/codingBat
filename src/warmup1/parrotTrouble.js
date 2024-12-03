/*
We have a loud talking parrot. The "hour" parameter is the current hour 
time in the range 0..23. We are in trouble if the parrot is talking 
and the hour is before 7 or after 20. Return true if we are in trouble.
*/

/**
 *
 * @param {boolean} talking
 * @param {number} hour between 0 and 23
 * @returns true if hour is between 7 and 20 and talking is true,
 * otherwise it returns false.
 */
export default function parrotTrouble(talking, hour) {
  // if the hour is less than 0 or greater than 23 throw an error
  if (hour > 23 || hour < 0) {
    throw new Error("Number must be between 0 and 23");
  }
  // if hour is less than 7 or greater than 20 and parrot is talking return true else return false
  if ((hour < 7 || hour > 20) && talking === true) {
    return true;
  } else {
    return false;
  }
}
