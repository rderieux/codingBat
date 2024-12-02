const sleepIn = require("../warmup1/sleepIn");
const monkeyTrouble = require("../warmup1/monkeyTrouble");
const sumDouble = require("../warmup1/sumDouble");

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

test("Given two int values, return their sum, Unless the two values are the same, then return double their sum", () => {
  expect(sumDouble(1, 2)).toEqual(3);
  expect(sumDouble(3, 2)).toEqual(5);
  expect(sumDouble(2, 2)).toEqual(8);
  expect(sumDouble(-1, 0)).toEqual(-1);
});
