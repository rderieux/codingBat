import { expect } from "chai";

import doubleChar from "../src/string2/doubleChar.js";
import countHi from "../src/string2/countHi.js";
import catDog from "../src/string2/catDog.js";

//doubleChar
describe("#doubleChar()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(doubleChar).to.be.a("function");
    });
    it("returns a string", () => {
      expect(doubleChar("abcd")).to.be.a("string");
    });
    describe("receives the correct input", () => {
      it("returns 'error' if the argument is not a string", () => {
        expect(doubleChar([])).to.equal("error");
        expect(doubleChar({})).to.equal("error");
        expect(doubleChar(1)).to.equal("error");
        expect(doubleChar(undefined)).to.equal("error");
        expect(doubleChar(null)).to.equal("error");
      });
    });

    describe("returns the correct string", () => {
      it("given a string, return a string where every char in the original, there are two chars", () => {
        expect(doubleChar("The")).to.equal("TThhee");
        expect(doubleChar("abc")).to.equal("aabbcc");
        expect(doubleChar("Hello")).to.equal("HHeelllloo");
        expect(doubleChar("xy")).to.equal("xxyy");
        expect(doubleChar("i")).to.equal("ii");
        expect(doubleChar("")).to.equal("");
        expect(doubleChar("xxxx")).to.equal("xxxxxxxx");
      });
    });
  });
});

//countHi
describe("#countHi()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(countHi).to.be.a("function");
    });
    it("returns a number", () => {
      expect(countHi("abcd")).to.be.a("number");
    });
    describe("receives the correct input", () => {
      it("returns 'error' if the argument is not a string", () => {
        expect(countHi([])).to.equal("error");
        expect(countHi({})).to.equal("error");
        expect(countHi(1)).to.equal("error");
        expect(countHi(undefined)).to.equal("error");
        expect(countHi(null)).to.equal("error");
      });
    });

    describe("returns the correct string", () => {
      it("returns the number of times 'hi' appears in the string", () => {
        expect(countHi("Hi")).to.equal(1);
        expect(countHi("abc hi hi")).to.equal(2);
        expect(countHi("Hill")).to.equal(1);
        expect(countHi("xy")).to.equal(0);
        expect(countHi("i")).to.equal(0);
        expect(countHi("")).to.equal(0);
        expect(countHi("xhixhixhix")).to.equal(3);
      });
    });
  });
});

//catDog
describe("#catDog()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(catDog).to.be.a("function");
    });
    it("returns a boolean", () => {
      expect(catDog("abcd")).to.be.a("boolean");
    });
    describe("receives the correct input", () => {
      it("returns 'error' if the argument is not a string", () => {
        expect(catDog([])).to.equal("error");
        expect(catDog({})).to.equal("error");
        expect(catDog(1)).to.equal("error");
        expect(catDog(undefined)).to.equal("error");
        expect(catDog(null)).to.equal("error");
      });
    });

    describe("returns the correct string", () => {
      it("returns true if the number of times 'cat' and 'dog' appear in a string the same number of times.  Otherwise false.", () => {
        expect(catDog("cat dog")).to.equal(true);
        expect(catDog("cat dog dog")).to.equal(false);
        expect(catDog("catcatdog")).to.equal(false);
        expect(catDog("xycatxydogxy")).to.equal(true);
        expect(catDog("1cat1cadodog")).to.equal(true);
        expect(catDog("")).to.equal(true);
        expect(catDog("catxdogxdogxca")).to.equal(false);
      });
    });
  });
});
