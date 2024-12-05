export default function hasTeen(a, b, c) {
  // If a is greater than 12 and less than 20
  // or b is greater than 12 and less than 20
  // or c is greater than 12 and less than 20
  // then true, else false
  if ((a >= 13 && a <= 19) || (b >= 13 && b <= 19) || (c >= 13 && c <= 19)) {
    return true;
  } else {
    return false;
  }
}
