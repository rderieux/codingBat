const sleepIn = require("../warmup1/sleepIn");
const monkeyTrouble = require("../warmup1/monkeyTrouble");

test("Lets you sleep in if it is not a weekday or you are on vacation", () => {
  expect(sleepIn(true, true)).toBe(true);
  expect(sleepIn(true, false)).toBe(false);
  expect(sleepIn(false, true)).toBe(true);
});

test("If both monkey's are smiling or no monkey's are smiling, it's bad", () => {
  expect(monkeyTrouble(true, true)).toBe(true);
  expect(monkeyTrouble(false, false)).toBe(true);
  expect(monkeyTrouble(true, false)).toBe(false);
});
