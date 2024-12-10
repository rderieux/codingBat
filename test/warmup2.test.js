import { expect } from "chai";

import stringTimes from "../src/warmup2/stringTimes.js";
import frontTimes from "../src/warmup2/frontTimes.js";
import countXX from "../src/warmup2/countXX.js";
import doubleX from "../src/warmup2/doubleX.js";
import stringBits from "../src/warmup2/stringBits.js";
import last2 from "../src/warmup2/last2.js";

describe("stringTimes function", () => {
  it("returns a str of a given str n times in a new str", () => {
    expect(stringTimes("Hi", 4)).to.equal("HiHiHiHi");
    expect(stringTimes("Robert", 1)).to.equal("Robert");
    expect(stringTimes("Hi", 0)).to.equal("");
    expect(stringTimes("Hello", 3)).to.equal("HelloHelloHello");
  });
});

describe("frontTimes function", () => {
  it("returns a string of a given strings first 3 chars repeating n times, if less than 3 return whatever is there n times.", () => {
    expect(frontTimes("Robert", 3)).to.equal("RobRobRob");
    expect(frontTimes("Or", 4)).to.equal("OrOrOrOr");
    expect(frontTimes("", 3)).to.equal("");
    expect(frontTimes("Abc", 0)).to.equal("");
  });
});

describe("countXX function", () => {
  it("returns a count of how many times 'xx' appears in a string", () => {
    expect(countXX("Maxxxine")).to.equal(2);
    expect(countXX("xx")).to.equal(1);
    expect(countXX("xxxx")).to.equal(3);
    expect(countXX("")).to.equal(0);
    expect(countXX("abc")).to.equal(0);
    expect(countXX("XxXxXxXxX")).to.equal(8);
  });
});

describe("doubleX function", () => {
  it("return a boolean, if the first instance of x appearing in a string is followed by another x, return true, else false.", () => {
    expect(doubleX("axxbb")).to.equal(true);
    expect(doubleX("axbb")).to.equal(false);
    expect(doubleX("xxxx")).to.equal(true);
    expect(doubleX("xox")).to.equal(false);
    expect(doubleX("raxx")).to.equal(true);
    expect(doubleX("rox")).to.equal(false);
  });
});

describe("stringBits function", () => {
  it("returns a new str from given str of every other char, starting with the first", () => {
    describe("Robert to be Rbr", () => {
      expect(stringBits("Robert")).to.equal("Rbr");
    });
    describe("Hello to be Hlo", () => {
      expect(stringBits("Hello")).to.equal("Hlo");
    });
    describe("Well well well to be Wl elwl", () => {
      expect(stringBits("Well well well")).to.equal("Wl elwl");
    });
    describe("Pi to be P", () => {
      expect(stringBits("Pi")).to.equal("P");
    });
    describe("Empty str to be empty str", () => {
      expect(stringBits("")).to.equal("");
    });
  });
});

describe("last2()", () => {
  it("returns a count of how many times the last two chars of a string appear in the string, not counting itself.", () => {
    expect(last2("hixxhi")).to.equal(1);
    expect(last2("ddooddoodd")).to.equal(2);
    expect(last2("xxaxxaxxaxx")).to.equal(3);
    expect(last2("hi")).to.equal(0);
    expect(last2("h")).to.equal(0);
    expect(last2("")).to.equal(0);
  });
});
