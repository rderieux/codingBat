/*
We have two monkeys, a and b, and the parameters aSmile and bSmile 
indicate if each is smiling. We are in trouble if they are both smiling 
or if neither of them is smiling. Return true if we are in trouble.
*/

/**
 *
 * @param {boolean} aSmile
 * @param {boolean} bSmile
 * @returns true if both are true or both are false
 * otherwise it returns false
 */
function monkeyTrouble(aSmile, bSmile) {
  //if aSmile is true and bSmile is true we are in trouble
  //if aSmile is false and bSmile is false we are in trouble
  //else we are not in trouble
  if (aSmile && bSmile) {
    return true;
  } else if (!aSmile && !bSmile) {
    return true;
  } else {
    return false;
  }
}

module.exports = monkeyTrouble;
