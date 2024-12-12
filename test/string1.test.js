import { expect } from "chai";

import helloName from "../src/string1/helloName.js";
import makeAbba from "../src/string1/makeAbba.js";
import makeTags from "../src/string1/makeTags.js";
import makeOutWord from "../src/string1/makeOutWord.js";

//helloName
describe("#helloName()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(helloName).to.be.a("function");
    });
    it("returns a string", () => {
      expect(helloName("Bob")).to.be.a("string");
    });
    describe("returns the correct output", () => {
      it("returns 'error' if the argument is not a string", () => {
        expect(helloName([])).to.equal("error");
        expect(helloName(1)).to.equal("error");
        expect(helloName({})).to.equal("error");
        expect(helloName(undefined)).to.equal("error");
        expect(helloName(null)).to.equal("error");
      });
    });

    describe("returns the correct string", () => {
      it("returns a greeting of the form 'Hello name!'.", () => {
        expect(helloName("Bob")).to.equal("Hello Bob!");
        expect(helloName("Dude")).to.equal("Hello Dude!");
        expect(helloName("Bro")).to.equal("Hello Bro!");
        expect(helloName("Alpha")).to.equal("Hello Alpha!");
        expect(helloName("Omega")).to.equal("Hello Omega!");
        expect(helloName("God")).to.equal("Hello God!");
      });
    });
  });
});

//makeAbba
describe("#makeAbba()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(makeAbba).to.be.a("function");
    });
    it("returns a string", () => {
      expect(makeAbba("Bob", "by")).to.be.a("string");
    });
    describe("returns the correct output", () => {
      it("returns 'error' if the argument is not a string", () => {
        expect(makeAbba([])).to.equal("error");
        expect(makeAbba({})).to.equal("error");
        expect(makeAbba(1)).to.equal("error");
        expect(makeAbba(undefined)).to.equal("error");
        expect(makeAbba(null)).to.equal("error");
      });
    });

    describe("returns the correct string", () => {
      it("returns a greeting of the form 'Hello name!'.", () => {
        expect(makeAbba("Bob", "by")).to.equal("BobbybyBob");
        expect(makeAbba("Hi", "Bye")).to.equal("HiByeByeHi");
        expect(makeAbba("", "")).to.equal("");
        expect(makeAbba("Wad", "dup")).to.equal("WaddupdupWad");
        expect(makeAbba("a", "b")).to.equal("abba");
        expect(makeAbba("Ya", "Ya")).to.equal("YaYaYaYa");
      });
    });
  });
});

//makeTags
describe("#makeTags()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(makeTags).to.be.a("function");
    });
    it("returns a string", () => {
      expect(makeTags("i", "by")).to.be.a("string");
    });
    describe("receives the correct input", () => {
      it("returns 'error' if the argument is not a string", () => {
        expect(makeTags([])).to.equal("error");
        expect(makeTags({})).to.equal("error");
        expect(makeTags(1)).to.equal("error");
        expect(makeTags(undefined)).to.equal("error");
        expect(makeTags(null)).to.equal("error");
      });
    });

    describe("returns the correct string", () => {
      it("returns an html tag surrounding the word string", () => {
        expect(makeTags("i", "Hello")).to.equal("<i>Hello</i>");
        expect(makeTags("cite", "Yay")).to.equal("<cite>Yay</cite>");
        expect(makeTags("i", "")).to.equal("<i></i>");
        expect(makeTags("body", "Heart")).to.equal("<body>Heart</body>");
        expect(makeTags("a", "b")).to.equal("<a>b</a>");
        expect(makeTags("i", "i")).to.equal("<i>i</i>");
      });
    });
  });
});

//makeOutWord
describe("#makeOutWord()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(makeOutWord).to.be.a("function");
    });
    it("returns a string", () => {
      expect(makeOutWord("<<>>", "by")).to.be.a("string");
    });
    describe("receives the correct input", () => {
      it("returns 'error' if the argument is not a string", () => {
        expect(makeOutWord([])).to.equal("error");
        expect(makeOutWord({})).to.equal("error");
        expect(makeOutWord(1)).to.equal("error");
        expect(makeOutWord(undefined)).to.equal("error");
        expect(makeOutWord(null)).to.equal("error");
      });
    });

    describe("returns the correct string", () => {
      it("returns a string with the word string in the middle of the out string, which will always be 4 length", () => {
        expect(makeOutWord("<<>>", "Hello")).to.equal("<<Hello>>");
        expect(makeOutWord("<<>>", "Yay")).to.equal("<<Yay>>");
        expect(makeOutWord("[[]]", "Meow")).to.equal("[[Meow]]");
        expect(makeOutWord("Hell", "Hello")).to.equal("HeHelloll");
        expect(makeOutWord("aaaa", "bb")).to.equal("aabbaa");
      });
    });
  });
});
