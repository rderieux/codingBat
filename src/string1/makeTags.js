export default function makeTags(tag, word) {
  if (typeof tag !== "string" || typeof word !== "string") {
    return "error";
  }
  return `<${tag}>${word}</${tag}>`;
}
