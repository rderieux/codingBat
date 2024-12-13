import { expect } from "chai";

import helloName from "../src/string1/helloName.js";
import makeAbba from "../src/string1/makeAbba.js";
import makeTags from "../src/string1/makeTags.js";
import makeOutWord from "../src/string1/makeOutWord.js";
import extraEnd from "../src/string1/extraEnd.js";
import firstTwo from "../src/string1/firstTwo.js";
import firstHalf from "../src/string1/firstHalf.js";
import withoutEnd from "../src/string1/withoutEnd.js";
import comboString from "../src/string1/comboString.js";
import nonStart from "../src/string1/nonStart.js";
import left2 from "../src/string1/left2.js";

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

//extraEnd
describe("#extraEnd()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(extraEnd).to.be.a("function");
    });
    it("returns a string", () => {
      expect(extraEnd("ab")).to.be.a("string");
    });
    describe("receives the correct input", () => {
      it("returns 'error' if the argument is not a string", () => {
        expect(extraEnd([])).to.equal("error");
        expect(extraEnd({})).to.equal("error");
        expect(extraEnd(1)).to.equal("error");
        expect(extraEnd(undefined)).to.equal("error");
        expect(extraEnd(null)).to.equal("error");
      });
    });

    describe("returns the correct string", () => {
      it("returns a string made of 3 copies of a given string.  Sting will be at least 2 char", () => {
        expect(extraEnd("Rob")).to.equal("obobob");
        expect(extraEnd("Bore")).to.equal("rerere");
        expect(extraEnd("ab")).to.equal("ababab");
        expect(extraEnd("nah")).to.equal("ahahah");
        expect(extraEnd("Hi")).to.equal("HiHiHi");
        expect(extraEnd("")).to.equal("");
      });
    });
  });
});

//firstTwo
describe("#firstTwo()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(firstTwo).to.be.a("function");
    });
    it("returns a string", () => {
      expect(firstTwo("ab")).to.be.a("string");
    });
    describe("receives the correct input", () => {
      it("returns 'error' if the argument is not a string", () => {
        expect(firstTwo([])).to.equal("error");
        expect(firstTwo({})).to.equal("error");
        expect(firstTwo(1)).to.equal("error");
        expect(firstTwo(undefined)).to.equal("error");
        expect(firstTwo(null)).to.equal("error");
      });
    });

    describe("returns the correct string", () => {
      it("returns a string made of 3 copies of a given string.  Sting will be at least 2 char", () => {
        expect(firstTwo("Rob")).to.equal("Ro");
        expect(firstTwo("Bore")).to.equal("Bo");
        expect(firstTwo("ab")).to.equal("ab");
        expect(firstTwo("nah")).to.equal("na");
        expect(firstTwo("Hi")).to.equal("Hi");
        expect(firstTwo("a")).to.equal("a");
        expect(firstTwo("")).to.equal("");
      });
    });
  });
});

//firstHalf
describe("#firstHalf()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(firstHalf).to.be.a("function");
    });
    it("returns a string", () => {
      expect(firstHalf("abcd")).to.be.a("string");
    });
    describe("receives the correct input", () => {
      it("returns 'error' if the argument is not a string", () => {
        expect(firstHalf([])).to.equal("error");
        expect(firstHalf({})).to.equal("error");
        expect(firstHalf(1)).to.equal("error");
        expect(firstHalf(undefined)).to.equal("error");
        expect(firstHalf(null)).to.equal("error");
      });
    });

    describe("returns the correct string", () => {
      it("returns the first half of provided string if it's even length, else return the whole string", () => {
        expect(firstHalf("Robert")).to.equal("Rob");
        expect(firstHalf("Bore")).to.equal("Bo");
        expect(firstHalf("ab")).to.equal("a");
        expect(firstHalf("Nanananananan")).to.equal("Nanananananan");
        expect(firstHalf("0123456")).to.equal("0123456");
        expect(firstHalf("a")).to.equal("a");
        expect(firstHalf("")).to.equal("");
      });
    });
  });
});

//withoutEnd
describe("#withoutEnd()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(withoutEnd).to.be.a("function");
    });
    it("returns a string", () => {
      expect(withoutEnd("abcd")).to.be.a("string");
    });
    describe("receives the correct input", () => {
      it("returns 'error' if the argument is not a string", () => {
        expect(withoutEnd([])).to.equal("error");
        expect(withoutEnd({})).to.equal("error");
        expect(withoutEnd(1)).to.equal("error");
        expect(withoutEnd(undefined)).to.equal("error");
        expect(withoutEnd(null)).to.equal("error");
      });
    });

    describe("returns the correct string", () => {
      it("returns a version of the provided str, without the first an last char", () => {
        expect(withoutEnd("Robert")).to.equal("ober");
        expect(withoutEnd("Bore")).to.equal("or");
        expect(withoutEnd("ab")).to.equal("");
        expect(withoutEnd("Nanananananan")).to.equal("ananananana");
        expect(withoutEnd("0123456")).to.equal("12345");
        expect(withoutEnd("a")).to.equal("");
        expect(withoutEnd("")).to.equal("");
      });
    });
  });
});

//comboString
describe("#comboString()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(comboString).to.be.a("function");
    });
    it("returns a string", () => {
      expect(comboString("abcd", "abc")).to.be.a("string");
    });
    describe("receives the correct input", () => {
      it("returns 'error' if the argument is not a string", () => {
        expect(comboString([])).to.equal("error");
        expect(comboString({})).to.equal("error");
        expect(comboString(1)).to.equal("error");
        expect(comboString(undefined)).to.equal("error");
        expect(comboString(null)).to.equal("error");
      });
    });

    describe("returns the correct string", () => {
      it("returns a string, given 2 strings, concatenates short+long+short", () => {
        expect(comboString("Robert", "obe")).to.equal("obeRobertobe");
        expect(comboString("Bore", "ing")).to.equal("ingBoreing");
        expect(comboString("Hello", "hi")).to.equal("hiHellohi");
        expect(comboString("aaa", "b")).to.equal("baaab");
        expect(comboString("a", "bb")).to.equal("abba");
        expect(comboString("", "aa")).to.equal("aa");
        expect(comboString("bb", "a")).to.equal("abba");
      });
    });
  });
});

//nonStart
describe("#nonStart()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(nonStart).to.be.a("function");
    });
    it("returns a string", () => {
      expect(nonStart("abcd", "abc")).to.be.a("string");
    });
    describe("receives the correct input", () => {
      it("returns 'error' if the argument is not a string", () => {
        expect(nonStart([])).to.equal("error");
        expect(nonStart({})).to.equal("error");
        expect(nonStart(1)).to.equal("error");
        expect(nonStart(undefined)).to.equal("error");
        expect(nonStart(null)).to.equal("error");
      });
    });

    describe("returns the correct string", () => {
      it("given two strings, return their concatenation, but omit the first char of each", () => {
        expect(nonStart("Robert", "obe")).to.equal("obertbe");
        expect(nonStart("Bore", "ing")).to.equal("oreng");
        expect(nonStart("Hello", "hi")).to.equal("elloi");
        expect(nonStart("aaa", "b")).to.equal("aa");
        expect(nonStart("a", "bb")).to.equal("b");
        expect(nonStart("", "aa")).to.equal("a");
        expect(nonStart("bb", "a")).to.equal("b");
      });
    });
  });
});

//left2
describe("#left2()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(left2).to.be.a("function");
    });
    it("returns a string", () => {
      expect(left2("abcd", "abc")).to.be.a("string");
    });
    describe("receives the correct input", () => {
      it("returns 'error' if the argument is not a string", () => {
        expect(left2([])).to.equal("error");
        expect(left2({})).to.equal("error");
        expect(left2(1)).to.equal("error");
        expect(left2(undefined)).to.equal("error");
        expect(left2(null)).to.equal("error");
      });
    });

    describe("returns the correct string", () => {
      it("given a string, move the first 2 char to the last two chars", () => {
        expect(left2("Hello")).to.equal("lloHe");
        expect(left2("Javascript")).to.equal("vascriptJa");
        expect(left2("Hi")).to.equal("Hi");
        expect(left2("rock")).to.equal("ckro");
        expect(left2("Scout")).to.equal("outSc");
      });
    });
  });
});

//right2
describe("#right2()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(right2).to.be.a("function");
    });
    it("returns a string", () => {
      expect(right2("abcd", "abc")).to.be.a("string");
    });
    describe("receives the correct input", () => {
      it("returns 'error' if the argument is not a string", () => {
        expect(right2([])).to.equal("error");
        expect(right2({})).to.equal("error");
        expect(right2(1)).to.equal("error");
        expect(right2(undefined)).to.equal("error");
        expect(right2(null)).to.equal("error");
      });
    });

    describe("returns the correct string", () => {
      it("given a string, move the first 2 char to the last two chars", () => {
        expect(right2("Hello")).to.equal("loHel");
        expect(right2("Javascript")).to.equal("ptJavascri");
        expect(right2("Hi")).to.equal("Hi");
        expect(right2("rock")).to.equal("ckro");
        expect(right2("Scout")).to.equal("utSco");
      });
    });
  });
});
