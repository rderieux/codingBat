export default function helloName(name) {
  if (typeof name !== "string") {
    return "error";
  }
  return `Hello ${name}!`;
}
