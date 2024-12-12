export default function makeAbba(a, b) {
  if (typeof a !== "string" || typeof b !== "string") {
    return "error";
  }
  return a + b + b + a;
}
