//const assert = require("assert");
//import assert from "assert";
import { expect } from "chai";

import sleepIn from "../src/warmup1/sleepIn.js";
import monkeyTrouble from "../src/warmup1/monkeyTrouble.js";
import sumDouble from "../src/warmup1/sumDouble.js";
import diff21 from "../src/warmup1/diff21.js";
import parrotTrouble from "../src/warmup1/parrotTrouble.js";
import makes10 from "../src/warmup1/makes10.js";
import nearHundred from "../src/warmup1/nearHundred.js";
import posNeg from "../src/warmup1/posNeg.js";
import notString from "../src/warmup1/notString.js";
import missingChar from "../src/warmup1/missingChar.js";
import frontBack from "../src/warmup1/frontBack.js";

// sleepIn function tests
describe("sleepIn function", () => {
  describe("Works with correct types", () => {
    it("is a function", () => {
      expect(sleepIn).that.be.a("function");
    });

    it("returns a boolean", () => {
      expect(sleepIn(true, true)).to.be.a("boolean");
    });

    describe("returns the correct output", () => {
      it("return 'error' if either argument is not a boolean", () => {
        expect(sleepIn("1", true)).to.equal("error");
        expect(sleepIn(undefined, true)).to.equal("error");
        expect(sleepIn(false, null)).to.equal("error");
      });
    });

    it("Lets you sleep in if it is not a weekday or you are on vacation", () => {
      expect(sleepIn(true, true)).to.equal(true);
      expect(sleepIn(true, false)).to.equal(false);
      expect(sleepIn(false, true)).to.equal(true);
    });
  });
});

//monkeyTrouble tests
describe("monkeyTrouble function", () => {
  it("If both monkey's are smiling or no monkey's are smiling, it's bad", () => {
    expect(monkeyTrouble(true, true)).to.equal(true);
    expect(monkeyTrouble(false, false)).to.equal(true);
    expect(monkeyTrouble(true, false)).to.equal(false);
  });
});

//sumDouble tests
describe("sumDouble function", () => {
  it("Given two int values, return their sum, Unless the two values are the same, then return double their sum", () => {
    expect(sumDouble(1, 2)).to.equal(3);
    expect(sumDouble(3, 2)).to.equal(5);
    expect(sumDouble(2, 2)).to.equal(8);
    expect(sumDouble(-1, 0)).to.equal(-1);
  });
});

//diff21 tests
describe("diff21 function", () => {
  it("returns the absolute difference between n and 21, but returns double the absolute difference if n is over 21", () => {
    expect(diff21(19)).to.equal(2);
    expect(diff21(10)).to.equal(11);
    expect(diff21(21)).to.equal(0);
    expect(diff21(22)).to.equal(2);
    expect(diff21(25)).to.equal(8);
    expect(diff21(-1)).to.equal(22);
    expect(diff21(-2)).to.equal(23);
    expect(diff21(50)).to.equal(58);
  });
});

//parrotTrouble
describe("parrotTrouble function", () => {
  it("returns true if the parrot is talking before 7 or after 20", () => {
    expect(parrotTrouble(true, 6)).to.equal(true);
    expect(parrotTrouble(true, 7)).to.equal(false);
    expect(parrotTrouble(false, 6)).to.equal(false);
    expect(parrotTrouble(true, 21)).to.equal(true);
    expect(parrotTrouble(false, 21)).to.equal(false);
    expect(parrotTrouble(true, 23)).to.equal(true);
    expect(parrotTrouble(false, 23)).to.equal(false);
  });
});

//makes10
describe("makes10 function", () => {
  it("returns true if a = 10 or b = 10 or a + b = 10", () => {
    expect(makes10(10, 1)).to.equal(true);
    expect(makes10(2, 10)).to.equal(true);
    expect(makes10(6, 4)).to.equal(true);
    expect(makes10(7, 1)).to.equal(false);
    expect(makes10(3, 3)).to.equal(false);
  });
});

//nearHundred
describe("nearHundred function", () => {
  it("returns true when n is within 10 of 100 or 200", () => {
    expect(nearHundred(91)).to.equal(true);
    expect(nearHundred(50)).to.equal(false);
    expect(nearHundred(199)).to.equal(true);
    expect(nearHundred(110)).to.equal(true);
    expect(nearHundred(111)).to.equal(false);
    expect(nearHundred(189)).to.equal(false);
  });
});

//posNeg
describe("posNeg function", () => {
  it("returns true when a or b is negative, unless negative parameter is true, then both need to be negative to return true", () => {
    expect(posNeg(-1, 1, false)).to.equal(true);
    expect(posNeg(1, -1, false)).to.equal(true);
    expect(posNeg(-1, -1, true)).to.equal(true);
    expect(posNeg(-1, 1, true)).to.equal(false);
    expect(posNeg(1, 1, true)).to.equal(false);
    expect(posNeg(-1, -1, false)).to.equal(false);
  });
});

//notString
describe("notString function", () => {
  it("returns a string unchanged if it starts with not, otherwise adds not to the beginning.", () => {
    expect(notString("string")).to.equal("not string");
    expect(notString("not string")).to.equal("not string");
    expect(notString("a longer string")).to.equal("not a longer string");
    expect(notString("a not")).to.equal("not a not");
    expect(notString("not")).to.equal("not");
  });
});

//missingChar
describe("missingChar function", () => {
  it("returns a string where the char at index n has been removed", () => {
    expect(missingChar("robert", 0)).to.equal("obert");
    expect(missingChar("robert", 1)).to.equal("rbert");
    expect(missingChar("robert", 5)).to.equal("rober");
    expect(missingChar("chocolate", 8)).to.equal("chocolat");
  });
});

//frontBack
describe("frontBack function", () => {
  it("returns a new string witch the first and last chars have been exchanged", () => {
    expect(frontBack("hello")).to.equal("oellh");
    expect(frontBack("a")).to.equal("a");
    expect(frontBack("ab")).to.equal("ba");
    expect(frontBack("silent")).to.equal("tilens");
    expect(frontBack("hello")).to.equal("oellh");
    expect(frontBack("")).to.equal("");
  });
});
