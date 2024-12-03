//const assert = require("assert");
//import assert from "assert";
import { expect } from "chai";

import sleepIn from "../src/warmup1/sleepIn.js";
import monkeyTrouble from "../src/warmup1/monkeyTrouble.js";
import sumDouble from "../src/warmup1/sumDouble.js";

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

describe("monkeyTrouble function", () => {
  it("If both monkey's are smiling or no monkey's are smiling, it's bad", () => {
    expect(monkeyTrouble(true, true)).to.equal(true);
    expect(monkeyTrouble(false, false)).to.equal(true);
    expect(monkeyTrouble(true, false)).to.equal(false);
  });
});

describe("sumDouble function", () => {
  it("Given two int values, return their sum, Unless the two values are the same, then return double their sum", () => {
    expect(sumDouble(1, 2)).to.equal(3);
    expect(sumDouble(3, 2)).to.equal(5);
    expect(sumDouble(2, 2)).to.equal(8);
    expect(sumDouble(-1, 0)).to.equal(-1);
  });
});
