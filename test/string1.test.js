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
        expect(nTwice("Oddly", 3)).to.equal("Oddly");
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
