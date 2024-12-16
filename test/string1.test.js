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
import right2 from "../src/string1/right2.js";
import theEnd from "../src/string1/theEnd.js";
import withoutEnd2 from "../src/string1/withoutEnd2.js";
import middleTwo from "../src/string1/middleTwo.js";
import endsLy from "../src/string1/endsLy.js";
import nTwice from "../src/string1/nTwice.js";
import twoChar from "../src/string1/twoChar.js";
import middleThree from "../src/string1/middleThree.js";
import hasBad from "../src/string1/hasBad.js";
import atFirst from "../src/string1/atFirst.js";
import lastChars from "../src/string1/lastChars.js";
import lastTwo from "../src/string1/lastTwo.js";
import conCat from "../src/string1/conCat.js";
import seeColor from "../src/string1/seeColor.js";
import frontAgain from "../src/string1/frontAgain.js";
import minCat from "../src/string1/minCat.js";
import extraFront from "../src/string1/extraFront.js";
import without2 from "../src/string1/without2.js";
import deFront from "../src/string1/deFront.js";
import startWord from "../src/string1/startWord.js";
import withoutX from "../src/string1/withoutX.js";

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

//theEnd
describe("#theEnd()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(theEnd).to.be.a("function");
    });
    it("returns a string", () => {
      expect(theEnd("abcd", "abc")).to.be.a("string");
    });
    describe("receives the correct input", () => {
      it("returns 'error' if the arguments are not string, boolean", () => {
        expect(theEnd([], true)).to.equal("error");
        expect(theEnd("", [])).to.equal("error");
        expect(theEnd({}, false)).to.equal("error");
        expect(theEnd("", {})).to.equal("error");
        expect(theEnd(1, false)).to.equal("error");
        expect(theEnd(true, "")).to.equal("error");
        expect(theEnd(undefined, true)).to.equal("error");
        expect(theEnd("", null)).to.equal("error");
      });
    });

    describe("returns the correct string", () => {
      it("returns the first char of a string, unless front is false, then return last char of string", () => {
        expect(theEnd("Hello", true)).to.equal("H");
        expect(theEnd("Javascript", false)).to.equal("t");
        expect(theEnd("Hi", true)).to.equal("H");
        expect(theEnd("rock", false)).to.equal("k");
        expect(theEnd("Scout", true)).to.equal("S");
      });
    });
  });
});

//withoutEnd2
describe("#withoutEnd2()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(withoutEnd2).to.be.a("function");
    });
    it("returns a string", () => {
      expect(withoutEnd2("abcd", "abc")).to.be.a("string");
    });
    describe("receives the correct input", () => {
      it("returns 'error' if the argument is not a string", () => {
        expect(withoutEnd2([])).to.equal("error");
        expect(withoutEnd2({})).to.equal("error");
        expect(withoutEnd2(1)).to.equal("error");
        expect(withoutEnd2(undefined)).to.equal("error");
        expect(withoutEnd2(null)).to.equal("error");
      });
    });

    describe("returns the correct string", () => {
      it("returns a version of the given str without both the first and last char of the str", () => {
        expect(withoutEnd2("Hello")).to.equal("ell");
        expect(withoutEnd2("Javascript")).to.equal("avascrip");
        expect(withoutEnd2("Hi")).to.equal("");
        expect(withoutEnd2("rock")).to.equal("oc");
        expect(withoutEnd2("Scout")).to.equal("cou");
      });
    });
  });
});

//middleTwo
describe("#middleTwo()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(middleTwo).to.be.a("function");
    });
    it("returns a string", () => {
      expect(middleTwo("abcd")).to.be.a("string");
    });
    describe("receives the correct input", () => {
      it("returns 'error' if the argument is not a string", () => {
        expect(middleTwo([])).to.equal("error");
        expect(middleTwo({})).to.equal("error");
        expect(middleTwo(1)).to.equal("error");
        expect(middleTwo(undefined)).to.equal("error");
        expect(middleTwo(null)).to.equal("error");
      });
    });

    describe("returns the correct string", () => {
      it("given an even string of at least 2, returns the middle two chars of the string", () => {
        expect(middleTwo("Helloo")).to.equal("ll");
        expect(middleTwo("Javascript")).to.equal("sc");
        expect(middleTwo("Hi")).to.equal("Hi");
        expect(middleTwo("rock")).to.equal("oc");
        expect(middleTwo("Scout")).to.equal("o");
      });
    });
  });
});

//endsLy
describe("#endsLy()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(endsLy).to.be.a("function");
    });
    it("returns a boolean", () => {
      expect(endsLy("abcd")).to.be.a("boolean");
    });
    describe("receives the correct input", () => {
      it("returns 'error' if the argument is not a string", () => {
        expect(endsLy([])).to.equal("error");
        expect(endsLy({})).to.equal("error");
        expect(endsLy(1)).to.equal("error");
        expect(endsLy(undefined)).to.equal("error");
        expect(endsLy(null)).to.equal("error");
      });
    });

    describe("returns the correct string", () => {
      it("returns true if string ends in 'ly', else false", () => {
        expect(endsLy("Hellooly")).to.equal(true);
        expect(endsLy("Oddly")).to.equal(true);
        expect(endsLy("Hi")).to.equal(false);
        expect(endsLy("rocky")).to.equal(false);
        expect(endsLy("")).to.equal(false);
        expect(endsLy("y")).to.equal(false);
        expect(endsLy("ly")).to.equal(true);
      });
    });
  });
});

//nTwice
describe("#nTwice()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(nTwice).to.be.a("function");
    });
    it("returns a string", () => {
      expect(nTwice("abcd", 1)).to.be.a("string", "number");
    });
    describe("receives the correct input", () => {
      it("returns 'error' if the arguments are not a string, and a number", () => {
        expect(nTwice([], true)).to.equal("error");
        expect(nTwice("", [])).to.equal("error");
        expect(nTwice({}, false)).to.equal("error");
        expect(nTwice("", {})).to.equal("error");
        expect(nTwice(1, "")).to.equal("error");
        expect(nTwice(true, 1)).to.equal("error");
        expect(nTwice(undefined, true)).to.equal("error");
        expect(nTwice("", null)).to.equal("error");
      });
    });

    describe("returns the correct string", () => {
      it("given a string and number n, returns a string with the first and last n chars of a string.  String will at least be length of n", () => {
        expect(nTwice("Hello", 2)).to.equal("Helo");
        expect(nTwice("Oddly", 3)).to.equal("Odddly");
        expect(nTwice("Hi", 1)).to.equal("Hi");
        expect(nTwice("rocky", 1)).to.equal("ry");
        expect(nTwice("", 0)).to.equal("");
        expect(nTwice("Chocolate", 3)).to.equal("Choate");
      });
    });
  });
});

//twoChar
describe("#twoChar()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(twoChar).to.be.a("function");
    });
    it("returns a string", () => {
      expect(twoChar("abcd", 1)).to.be.a("string", "number");
    });
    describe("receives the correct input", () => {
      it("returns 'error' if the arguments are not a string, and a number", () => {
        expect(twoChar([], true)).to.equal("error");
        expect(twoChar("", [])).to.equal("error");
        expect(twoChar({}, false)).to.equal("error");
        expect(twoChar("", {})).to.equal("error");
        expect(twoChar(1, "")).to.equal("error");
        expect(twoChar(true, 1)).to.equal("error");
        expect(twoChar(undefined, true)).to.equal("error");
        expect(twoChar("", null)).to.equal("error");
      });
    });

    describe("returns the correct string", () => {
      it("given a string and an index, returns a string of length two at given index.  If the index is too big or too small to define a string length  2, use the first 2 chars.", () => {
        expect(twoChar("Hello", 2)).to.equal("ll");
        expect(twoChar("Oddly", 3)).to.equal("ly");
        expect(twoChar("Hi", 0)).to.equal("Hi");
        expect(twoChar("rocky", 1)).to.equal("oc");
        expect(twoChar("", 0)).to.equal("");
        expect(twoChar("Chocolate", 3)).to.equal("co");
        expect(twoChar("Cho", 4)).to.equal("Ch");
      });
    });
  });
});

//middleThree
describe("#middleThree()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(middleThree).to.be.a("function");
    });
    it("returns a string", () => {
      expect(middleThree("abcd")).to.be.a("string");
    });
    describe("receives the correct input", () => {
      it("returns 'error' if the argument is not a string", () => {
        expect(middleThree([])).to.equal("error");
        expect(middleThree({})).to.equal("error");
        expect(middleThree(1)).to.equal("error");
        expect(middleThree(undefined)).to.equal("error");
        expect(middleThree(null)).to.equal("error");
      });
    });

    describe("returns the correct string", () => {
      it("returns true if string ends in 'ly', else false", () => {
        expect(middleThree("Hello")).to.equal("ell");
        expect(middleThree("Oddly")).to.equal("ddl");
        expect(middleThree("Candy")).to.equal("and");
        expect(middleThree("Solving")).to.equal("lvi");
        expect(middleThree("and")).to.equal("and");
        expect(middleThree("Chocolate")).to.equal("col");
      });
    });
  });
});

//hasBad
describe("#hasBad()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(hasBad).to.be.a("function");
    });
    it("returns a boolean", () => {
      expect(hasBad("abcd")).to.be.a("boolean");
    });
    describe("receives the correct input", () => {
      it("returns 'error' if the argument is not a string", () => {
        expect(hasBad([])).to.equal("error");
        expect(hasBad({})).to.equal("error");
        expect(hasBad(1)).to.equal("error");
        expect(hasBad(undefined)).to.equal("error");
        expect(hasBad(null)).to.equal("error");
      });
    });

    describe("returns the correct string", () => {
      it("return true if 'bad' appears at index 0 or 1, else returns false", () => {
        expect(hasBad("bada$$")).to.equal(true);
        expect(hasBad("Oddly")).to.equal(false);
        expect(hasBad("xbadxx")).to.equal(true);
        expect(hasBad("xxbad")).to.equal(false);
        expect(hasBad("ba")).to.equal(false);
        expect(hasBad("")).to.equal(false);
      });
    });
  });
});

//atFirst
describe("#atFirst()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(atFirst).to.be.a("function");
    });
    it("returns a string", () => {
      expect(atFirst("abcd")).to.be.a("string");
    });
    describe("receives the correct input", () => {
      it("returns 'error' if the argument is not a string", () => {
        expect(atFirst([])).to.equal("error");
        expect(atFirst({})).to.equal("error");
        expect(atFirst(1)).to.equal("error");
        expect(atFirst(undefined)).to.equal("error");
        expect(atFirst(null)).to.equal("error");
      });
    });

    describe("returns the correct string", () => {
      it("returns the first two chars of given string, str + @ if string is less than 2 chars.", () => {
        expect(atFirst("bada$$")).to.equal("ba");
        expect(atFirst("Oddly")).to.equal("Od");
        expect(atFirst("xbadxx")).to.equal("xb");
        expect(atFirst("xxbad")).to.equal("xx");
        expect(atFirst("b")).to.equal("b@");
        expect(atFirst("")).to.equal("@@");
      });
    });
  });
});

//lastChars
describe("#lastChars()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(lastChars).to.be.a("function");
    });
    it("returns a string", () => {
      expect(lastChars("abcd", "abc")).to.be.a("string");
    });
    describe("receives the correct input", () => {
      it("returns 'error' if the arguments are not strings", () => {
        expect(lastChars([], "")).to.equal("error");
        expect(lastChars("", {})).to.equal("error");
        expect(lastChars(1, "")).to.equal("error");
        expect(lastChars("", undefined)).to.equal("error");
        expect(lastChars(null, "")).to.equal("error");
      });
    });

    describe("returns the correct string", () => {
      it("returns a string of the first char of a, and last char of b.  Uses @ in its place", () => {
        expect(lastChars("bad", "d")).to.equal("bd");
        expect(lastChars("Oddly", "don't")).to.equal("Ot");
        expect(lastChars("xbadxx", "yo")).to.equal("xo");
        expect(lastChars("xxbad", "")).to.equal("x@");
        expect(lastChars("", "b")).to.equal("@b");
        expect(lastChars("", "")).to.equal("@@");
      });
    });
  });
});

//conCat
describe("#conCat()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(conCat).to.be.a("function");
    });
    it("returns a string", () => {
      expect(conCat("abcd", "abc")).to.be.a("string");
    });
    describe("receives the correct input", () => {
      it("returns 'error' if the arguments are not strings", () => {
        expect(conCat([], "")).to.equal("error");
        expect(conCat("", {})).to.equal("error");
        expect(conCat(1, "")).to.equal("error");
        expect(conCat("", undefined)).to.equal("error");
        expect(conCat(null, "")).to.equal("error");
      });
    });

    describe("returns the correct string", () => {
      it("returns string a concatenated to string b, unless that would create a double char, then omit one of them", () => {
        expect(conCat("bad", "d")).to.equal("bad");
        expect(conCat("Oddly", "don't")).to.equal("Oddlydon't");
        expect(conCat("xbadxx", "yo")).to.equal("xbadxxyo");
        expect(conCat("xxbad", "")).to.equal("xxbad");
        expect(conCat("", "b")).to.equal("b");
        expect(conCat("", "")).to.equal("");
        expect(conCat("abc", "cat")).to.equal("abcat");
      });
    });
  });
});

//lastTwo
describe("#lastTwo()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(lastTwo).to.be.a("function");
    });
    it("returns a string", () => {
      expect(lastTwo("abcd")).to.be.a("string");
    });
    describe("receives the correct input", () => {
      it("returns 'error' if the argument is not a string", () => {
        expect(lastTwo([])).to.equal("error");
        expect(lastTwo({})).to.equal("error");
        expect(lastTwo(1)).to.equal("error");
        expect(lastTwo(undefined)).to.equal("error");
        expect(lastTwo(null)).to.equal("error");
      });
    });

    describe("returns the correct string", () => {
      it("given a string of any length, returns a string with the last two chars switched", () => {
        expect(lastTwo("Last two")).to.equal("Last tow");
        expect(lastTwo("Oddly")).to.equal("Oddyl");
        expect(lastTwo("xbadxy")).to.equal("xbadyx");
        expect(lastTwo("xxbad")).to.equal("xxbda");
        expect(lastTwo("b")).to.equal("b");
        expect(lastTwo("")).to.equal("");
      });
    });
  });
});

//seeColor
describe("#seeColor()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(seeColor).to.be.a("function");
    });
    it("returns a string", () => {
      expect(seeColor("abcd")).to.be.a("string");
    });
    describe("receives the correct input", () => {
      it("returns 'error' if the argument is not a string", () => {
        expect(seeColor([])).to.equal("error");
        expect(seeColor({})).to.equal("error");
        expect(seeColor(1)).to.equal("error");
        expect(seeColor(undefined)).to.equal("error");
        expect(seeColor(null)).to.equal("error");
      });
    });

    describe("returns the correct string", () => {
      it("given a string, if the string begins with red or blue, return that color, else an empty string", () => {
        expect(seeColor("redblue")).to.equal("red");
        expect(seeColor("bluered")).to.equal("blue");
        expect(seeColor("xblue")).to.equal("");
        expect(seeColor("xred")).to.equal("");
        expect(seeColor("b")).to.equal("");
        expect(seeColor("")).to.equal("");
      });
    });
  });
});

//frontAgain
describe("#frontAgain()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(frontAgain).to.be.a("function");
    });
    it("returns a boolean", () => {
      expect(frontAgain("abcd")).to.be.a("boolean");
    });
    describe("receives the correct input", () => {
      it("returns 'error' if the argument is not a string", () => {
        expect(frontAgain([])).to.equal("error");
        expect(frontAgain({})).to.equal("error");
        expect(frontAgain(1)).to.equal("error");
        expect(frontAgain(undefined)).to.equal("error");
        expect(frontAgain(null)).to.equal("error");
      });
    });

    describe("returns the correct string", () => {
      it("given a string, returns true if the first 2 chars, and last 2 chars are equal, else false", () => {
        expect(frontAgain("redblue")).to.equal(false);
        expect(frontAgain("blueredbl")).to.equal(true);
        expect(frontAgain("edited")).to.equal(true);
        expect(frontAgain("jjjj")).to.equal(true);
        expect(frontAgain("xred")).to.equal(false);
        expect(frontAgain("b")).to.equal(false);
        expect(frontAgain("")).to.equal(false);
        expect(frontAgain("jj")).to.equal(true);
        expect(frontAgain("jjj")).to.equal(true);
      });
    });
  });
});

//minCat
describe("#minCat()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(minCat).to.be.a("function");
    });
    it("returns a string", () => {
      expect(minCat("abcd", "abc")).to.be.a("string");
    });
    describe("receives the correct input", () => {
      it("returns 'error' if the arguments are not strings", () => {
        expect(minCat([], "")).to.equal("error");
        expect(minCat("", {})).to.equal("error");
        expect(minCat(1, "")).to.equal("error");
        expect(minCat("", undefined)).to.equal("error");
        expect(minCat(null, "")).to.equal("error");
      });
    });

    describe("returns the correct string", () => {
      it("returns string a concatenated to string b, unless that would create a double char, then omit one of them", () => {
        expect(minCat("bad", "d")).to.equal("dd");
        expect(minCat("Oddly", "don't")).to.equal("Oddlydon't");
        expect(minCat("xbadxx", "yo")).to.equal("xxyo");
        expect(minCat("xxbad", "")).to.equal("");
        expect(minCat("", "b")).to.equal("");
        expect(minCat("", "")).to.equal("");
        expect(minCat("abc", "cat")).to.equal("abccat");
      });
    });
  });
});

//extraFront
describe("#extraFront()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(extraFront).to.be.a("function");
    });
    it("returns a string", () => {
      expect(extraFront("abcd")).to.be.a("string");
    });
    describe("receives the correct input", () => {
      it("returns 'error' if the argument is not a string", () => {
        expect(extraFront([])).to.equal("error");
        expect(extraFront({})).to.equal("error");
        expect(extraFront(1)).to.equal("error");
        expect(extraFront(undefined)).to.equal("error");
        expect(extraFront(null)).to.equal("error");
      });
    });

    describe("returns the correct string", () => {
      it("returns a string with the first 2 chars of arg string concatenated 3 times, whatever is there if less than 2", () => {
        expect(extraFront("redblue")).to.equal("rerere");
        expect(extraFront("Hello")).to.equal("HeHeHe");
        expect(extraFront("edited")).to.equal("ededed");
        expect(extraFront("jjjj")).to.equal("jjjjjj");
        expect(extraFront("b")).to.equal("bbb");
        expect(extraFront("")).to.equal("");
      });
    });
  });
});

//without2
describe("#without2()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(without2).to.be.a("function");
    });
    it("returns a string", () => {
      expect(without2("abcd")).to.be.a("string");
    });
    describe("receives the correct input", () => {
      it("returns 'error' if the argument is not a string", () => {
        expect(without2([])).to.equal("error");
        expect(without2({})).to.equal("error");
        expect(without2(1)).to.equal("error");
        expect(without2(undefined)).to.equal("error");
        expect(without2(null)).to.equal("error");
      });
    });

    describe("returns the correct string", () => {
      it("returns a str, if the first 2 chars match the last two chars of arg str, return str without first 2 chars", () => {
        expect(without2("HelloHe")).to.equal("lloHe");
        expect(without2("Hello")).to.equal("Hello");
        expect(without2("edited")).to.equal("ited");
        expect(without2("jjjj")).to.equal("jj");
        expect(without2("bbb")).to.equal("b");
        expect(without2("bb")).to.equal("");
        expect(without2("b")).to.equal("b");
        expect(without2("")).to.equal("");
      });
    });
  });
});

//deFront
describe("#deFront()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(deFront).to.be.a("function");
    });
    it("returns a string", () => {
      expect(deFront("abcd")).to.be.a("string");
    });
    describe("receives the correct input", () => {
      it("returns 'error' if the argument is not a string", () => {
        expect(deFront([])).to.equal("error");
        expect(deFront({})).to.equal("error");
        expect(deFront(1)).to.equal("error");
        expect(deFront(undefined)).to.equal("error");
        expect(deFront(null)).to.equal("error");
      });
    });

    describe("returns the correct string", () => {
      it("returns a string without the first 2 chars, unless the first char is 'a' or the second char is 'b'", () => {
        expect(deFront("abc")).to.equal("abc");
        expect(deFront("acd")).to.equal("ad");
        expect(deFront("abbcd")).to.equal("abbcd");
        expect(deFront("aa")).to.equal("a");
        expect(deFront("bb")).to.equal("b");
        expect(deFront("bbb")).to.equal("bb");
        expect(deFront("b")).to.equal("");
        expect(deFront("a")).to.equal("a");
        expect(deFront("Hello")).to.equal("llo");
      });
    });
  });
});

//startWord
describe("#startWord()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(startWord).to.be.a("function");
    });
    it("returns a string", () => {
      expect(startWord("abcd", "abc")).to.be.a("string");
    });
    describe("receives the correct input", () => {
      it("returns 'error' if the arguments are not strings", () => {
        expect(startWord([], "")).to.equal("error");
        expect(startWord("", {})).to.equal("error");
        expect(startWord(1, "")).to.equal("error");
        expect(startWord("", undefined)).to.equal("error");
        expect(startWord(null, "")).to.equal("error");
      });
    });

    describe("returns the correct string", () => {
      it("given two strings 'str' and 'word', if 'word' matches the front of 'str', return the matching front of 'str'.  The first letter is considered a 'wild card'", () => {
        expect(startWord("bad", "dad")).to.equal("bad");
        expect(startWord("Oddly", "don't")).to.equal("");
        expect(startWord("body", "yo")).to.equal("bo");
        expect(startWord("hippo", "xippo")).to.equal("hippo");
        expect(startWord("", "b")).to.equal("");
        expect(startWord("", "")).to.equal("");
        expect(startWord("h", "z")).to.equal("h");
      });
    });
  });
});

//withoutX
describe("#withoutX()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(withoutX).to.be.a("function");
    });
    it("returns a string", () => {
      expect(withoutX("abcd")).to.be.a("string");
    });
    describe("receives the correct input", () => {
      it("returns 'error' if the argument is not a string", () => {
        expect(withoutX([])).to.equal("error");
        expect(withoutX({})).to.equal("error");
        expect(withoutX(1)).to.equal("error");
        expect(withoutX(undefined)).to.equal("error");
        expect(withoutX(null)).to.equal("error");
      });
    });

    describe("returns the correct string", () => {
      it("given a string, if the first or last chars are 'x' return the string without them, otherwise return the string unchanged", () => {
        expect(withoutX("xabcx")).to.equal("abc");
        expect(withoutX("xacd")).to.equal("acd");
        expect(withoutX("abbcdx")).to.equal("abbcd");
        expect(withoutX("aa")).to.equal("aa");
        expect(withoutX("xx")).to.equal("");
        expect(withoutX("x")).to.equal("");
        expect(withoutX("")).to.equal("");
      });
    });
  });
});

//withoutX2
describe("#withoutX2()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(withoutX2).to.be.a("function");
    });
    it("returns a string", () => {
      expect(withoutX2("abcd")).to.be.a("string");
    });
    describe("receives the correct input", () => {
      it("returns 'error' if the argument is not a string", () => {
        expect(withoutX2([])).to.equal("error");
        expect(withoutX2({})).to.equal("error");
        expect(withoutX2(1)).to.equal("error");
        expect(withoutX2(undefined)).to.equal("error");
        expect(withoutX2(null)).to.equal("error");
      });
    });

    describe("returns the correct string", () => {
      it("given a string, if one or both of the first 2 chars is 'x', return the string without those 'x' chars, otherwise return string unchanged", () => {
        expect(withoutX2("xabcx")).to.equal("abc");
        expect(withoutX2("xacd")).to.equal("acd");
        expect(withoutX2("abbcdx")).to.equal("abbcd");
        expect(withoutX2("aa")).to.equal("aa");
        expect(withoutX2("xx")).to.equal("");
        expect(withoutX2("x")).to.equal("");
        expect(withoutX2("")).to.equal("");
      });
    });
  });
});
