export default function endUp(str) {
  // If str is less than 4 chars, uppercase it
  // If str is greater than 3 chars, slice off last 3 chars,
  // uppercase them, append them back to string
  // return appended string
  if (str.length <= 3) {
    return str.toUpperCase();
  } else {
    const allButLastThreeOfStr = str.slice(0, str.length - 3);
    const lastThreeOfStrUppercase = str.slice(-3).toUpperCase();

    return allButLastThreeOfStr + lastThreeOfStrUppercase;
  }
}
