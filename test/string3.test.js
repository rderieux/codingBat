import { expect } from "chai";

import countYZ from "../src/string3/countYZ.js";
import withoutString from "../src/string3/withoutString.js";
import equalIsNot from "../src/string3/equalIsNot.js";

//countYZ
describe("#countYZ()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(countYZ).to.be.a("function");
    });
    it("returns a number", () => {
      expect(countYZ("fez day")).to.be.a("number");
    });
    describe("receives the correct arg(s)", () => {
      it("returns 'error' if the arg is not a string", () => {
        expect(countYZ(1)).to.equal("error");
        expect(countYZ([])).to.equal("error");
        expect(countYZ({})).to.equal("error");
        expect(countYZ(null)).to.equal("error");
        expect(countYZ(undefined)).to.equal("error");
      });
    });
    describe("returns the correct number", () => {
      it("counts the number of words ending in 'y' or 'z'.  If there is not an alphabetic letter immediately following it.", () => {
        expect(countYZ("fez day")).to.equal(2);
        expect(countYZ("day fez")).to.equal(2);
        expect(countYZ("day fyyyz")).to.equal(2);
        expect(countYZ("boo hoo")).to.equal(0);
        expect(countYZ("once in a lifetime")).to.equal(0);
        expect(countYZ("y2bz")).to.equal(2);
        expect(countYZ("aaz yyz my")).to.equal(3);
        expect(countYZ("zxyx")).to.equal(0);
      });
    });
  });
});

//withoutString
describe("#withoutString()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(withoutString).to.be.a("function");
    });
    it("returns a string", () => {
      expect(withoutString("Hello there", "llo")).to.be.a("string");
    });
    describe("receives the correct arg(s)", () => {
      it("returns 'error' if the args are not strings", () => {
        expect(withoutString(1, "")).to.equal("error");
        expect(withoutString("", 1)).to.equal("error");
        expect(withoutString([], "")).to.equal("error");
        expect(withoutString("", [])).to.equal("error");
        expect(withoutString({}, "")).to.equal("error");
        expect(withoutString("", {})).to.equal("error");
        expect(withoutString("", null)).to.equal("error");
        expect(withoutString(null, "")).to.equal("error");
        expect(withoutString("", undefined)).to.equal("error");
        expect(withoutString(undefined, "")).to.equal("error");
      });
    });
    describe("returns the correct string", () => {
      it("given two strings, base and remove, returns a version of the base string where all instances of the remove string have been removed (not case sensitive). You may assume that the remove string is length 1 or more. Remove only non-overlapping instances, so with 'xxx' removing 'xx' leaves 'x'.", () => {
        expect(withoutString("Hello there", "llo")).to.equal("He there");
        expect(withoutString("xxx", "x")).to.equal("");
        expect(withoutString("xxx", "xx")).to.equal("x");
        expect(withoutString("abcabc", "b")).to.equal("acac");
        expect(withoutString("AA22bb", "2")).to.equal("AAbb");
        expect(withoutString("MkjtMkx", "Mk")).to.equal("jtx");
        expect(withoutString("Hi HoHo", "Ho")).to.equal("Hi");
        expect(withoutString("This is a FISH", "IS")).to.equal("Th a FH");
        expect(withoutString("THIS is a FISH", "is")).to.equal("TH a FH");
        expect(withoutString("THIS is a FISH", "iS")).to.equal("TH a FH");
      });
    });
  });
});

//equalIsNot
describe("#equalIsNot()", () => {
  describe("it works with correct types", () => {
    it("is a function", () => {
      expect(equalIsNot).to.be.a("function");
    });
    it("returns a boolean", () => {
      expect(equalIsNot("This is not")).to.be.a("boolean");
    });
    describe("receives the correct arg", () => {
      it("returns 'error' if the arg is not a string", () => {
        expect(equalIsNot(1)).to.equal("error");
        expect(equalIsNot([])).to.equal("error");
        expect(equalIsNot({})).to.equal("error");
        expect(equalIsNot()).to.equal("error");
        expect(equalIsNot(null)).to.equal("error");
        expect(equalIsNot(undefined)).to.equal("error");
      });
    });
    describe("returns the correct boolean", () => {
      it("returns true if the number of times 'is' appears in the string matches the number of times 'not' appears.  Case sensitive.", () => {
        expect(equalIsNot("This is not")).to.equal(false);
        expect(equalIsNot("This is not not")).to.equal(true);
        expect(equalIsNot("xxxyyyzzzintint")).to.equal(true);
        expect(equalIsNot("noisxxnotyynotxsi")).to.equal(false);
        expect(equalIsNot("isisnotnot")).to.equal(true);
        expect(equalIsNot("isnotis")).to.equal(false);
        expect(equalIsNot("not not is")).to.equal(false);
        expect(equalIsNot("xxxyyyzzzintint")).to.equal(true);
      });
    });
  });
});
