/**
 *
 * @param str {string}
 * @returns a number that is the sum of all the numbers
 * in the string.  A number is one or more digits in a
 * row.
 */
export default function sumNumbers(str) {
    if (typeof str !== "string") {
        return "error";
    }
    //return str.match(/\d+/g)?.reduce((acc, cur) => acc + parseInt(cur), 0) || 0;
    let sum = 0;
    let num = "";
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(Number(str[i])) && str[i] !== " ") {
            num += str[i];
        }
        else {
            if (num.length > 0) {
                sum += parseInt(num);
                num = "";
            }
        }
    }
    if (num.length > 0) {
        sum += parseInt(num);
    }
    return sum;
}
