import { expect } from "chai";

import doubleChar from "../src/string2/doubleChar.js";
import countHi from "../src/string2/countHi.js";
import catDog from "../src/string2/catDog.js";
import countCode from "../src/string2/countCode.js";
import endOther from "../src/string2/endOther.js";
import xyzThere from "../src/string2/xyzThere.js";

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

//countCode
describe("#countCode()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(countCode).to.be.a("function");
    });
    it("returns a number", () => {
      expect(countCode("abcd")).to.be.a("number");
    });
    describe("receives the correct input", () => {
      it("returns 'error' if the argument is not a string", () => {
        expect(countCode([])).to.equal("error");
        expect(countCode({})).to.equal("error");
        expect(countCode(1)).to.equal("error");
        expect(countCode(undefined)).to.equal("error");
        expect(countCode(null)).to.equal("error");
      });
    });

    describe("returns the correct string", () => {
      it("returns the number of times the string 'code' appears in the given string, except the 'd' can be any char.", () => {
        expect(countCode("xxcodexx")).to.equal(1);
        expect(countCode("catcopedogcooedog")).to.equal(2);
        expect(countCode("catcolecatdog")).to.equal(1);
        expect(countCode("cozexxcope")).to.equal(2);
        expect(countCode("AAcodeBBcoleCCccoreDD")).to.equal(3);
        expect(countCode("")).to.equal(0);
      });
    });
  });
});

//endOther
describe("#endOther()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(endOther).to.be.a("function");
    });
    it("returns a boolean", () => {
      expect(endOther("abcd", "abc")).to.be.a("boolean");
    });
    describe("receives the correct input", () => {
      it("returns 'error' if the arguments are not strings", () => {
        expect(endOther([], "")).to.equal("error");
        expect(endOther("", {})).to.equal("error");
        expect(endOther(1, "")).to.equal("error");
        expect(endOther("", undefined)).to.equal("error");
        expect(endOther(null, "")).to.equal("error");
      });
    });

    describe("returns the correct boolean", () => {
      it("given two strings, returns true if either of the strings appears at the end of the other string, else false.", () => {
        expect(endOther("Hiabc", "abc")).to.equal(true);
        expect(endOther("AbC", "HiaBc")).to.equal(true);
        expect(endOther("body", "dy")).to.equal(true);
        expect(endOther("abc", "abc")).to.equal(true);
        expect(endOther("abcXYZ", "abcDEF")).to.equal(false);
        expect(endOther("ab", "ab12")).to.equal(false);
        expect(endOther("ab", "12ab")).to.equal(true);
      });
    });
  });
});

//xyzThere
describe("#xyzThere()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(xyzThere).to.be.a("function");
    });
    it("returns a boolean", () => {
      expect(xyzThere("abcd")).to.be.a("boolean");
    });
    describe("receives the correct input", () => {
      it("returns 'error' if the argument is not a string", () => {
        expect(xyzThere([])).to.equal("error");
        expect(xyzThere({})).to.equal("error");
        expect(xyzThere(1)).to.equal("error");
        expect(xyzThere(undefined)).to.equal("error");
        expect(xyzThere(null)).to.equal("error");
      });
    });

    describe("returns the correct string", () => {
      it("returns true if the given string contains 'xyz', unless it's preceded by a period.", () => {
        expect(xyzThere("abcxyz")).to.equal(true);
        expect(xyzThere("abc.xyz")).to.equal(false);
        expect(xyzThere("xyz.abc")).to.equal(true);
        expect(xyzThere("xy")).to.equal(false);
        expect(xyzThere("yz")).to.equal(false);
        expect(xyzThere("")).to.equal(false);
        expect(xyzThere("abc.xyzxyz")).to.equal(true);
        expect(xyzThere("abc.xxyz")).to.equal(true);
        expect(xyzThere("abc.xyxyz")).to.equal(true);
      });
    });
  });
});
