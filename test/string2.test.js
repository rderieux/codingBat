import { expect } from "chai";

import doubleChar from "../src/string2/doubleChar.js";
import countHi from "../src/string2/countHi.js";
import catDog from "../src/string2/catDog.js";
import countCode from "../src/string2/countCode.js";
import endOther from "../src/string2/endOther.js";
import xyzThere from "../src/string2/xyzThere.js";
import bobThere from "../src/string2/bobThere.js";
import xyBalance from "../src/string2/xyBalance.js";
import mixString from "../src/string2/mixString.js";
import repeatEnd from "../src/string2/repeatEnd.js";
import repeatFront from "../src/string2/repeatFront.js";
import repeatSeparator from "../src/string2/repeatSeparator.js";
import prefixAgain from "../src/string2/prefixAgain.js";
import xyzMiddle from "../src/string2/xyzMiddle.js";
import getSandwich from "../src/string2/getSandwich.js";
import sameStarChar from "../src/string2/sameStarChar.js";
import oneTwo from "../src/string2/oneTwo.js";

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

    describe("returns the correct number", () => {
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

    describe("returns the correct boolean", () => {
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

    describe("returns the correct number", () => {
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

    describe("returns the correct boolean", () => {
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

//bobThere
describe("#bobThere()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(bobThere).to.be.a("function");
    });
    it("returns a boolean", () => {
      expect(bobThere("abcd")).to.be.a("boolean");
    });
    describe("receives the correct input", () => {
      it("returns 'error' if the argument is not a string", () => {
        expect(bobThere([])).to.equal("error");
        expect(bobThere({})).to.equal("error");
        expect(bobThere(1)).to.equal("error");
        expect(bobThere(undefined)).to.equal("error");
        expect(bobThere(null)).to.equal("error");
      });
    });

    describe("returns the correct boolean", () => {
      it("returns true if the given string contains 'bob'.  The 'o' can be any char.", () => {
        expect(bobThere("abcbob")).to.equal(true);
        expect(bobThere("abc.bbb")).to.equal(true);
        expect(bobThere("bab.abc")).to.equal(true);
        expect(bobThere("xy")).to.equal(false);
        expect(bobThere("yz")).to.equal(false);
        expect(bobThere("")).to.equal(false);
        expect(bobThere("abc.bobbob")).to.equal(true);
        expect(bobThere("abc.xbob")).to.equal(true);
        expect(bobThere("abc.xybob")).to.equal(true);
      });
    });
  });
});

//xyBalance
describe("#xybalance()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(xyBalance).to.be.a("function");
    });
    it("returns a boolean", () => {
      expect(xyBalance("abcd")).to.be.a("boolean");
    });
    describe("receives the correct input", () => {
      it("returns 'error' if the argument is not a string", () => {
        expect(xyBalance([])).to.equal("error");
        expect(xyBalance({})).to.equal("error");
        expect(xyBalance(1)).to.equal("error");
        expect(xyBalance(undefined)).to.equal("error");
        expect(xyBalance(null)).to.equal("error");
      });
    });

    describe("returns the correct boolean", () => {
      it("returns true if a 'y' follows the last 'x' in given string.", () => {
        expect(xyBalance("xxxxxxy")).to.equal(true);
        expect(xyBalance("xxyxb")).to.equal(false);
        expect(xyBalance("bab.abc")).to.equal(true);
        expect(xyBalance("xy")).to.equal(true);
        expect(xyBalance("yz")).to.equal(true);
        expect(xyBalance("")).to.equal(true);
        expect(xyBalance("abc.bobbob")).to.equal(true);
        expect(xyBalance("abc.xbob")).to.equal(false);
        expect(xyBalance("abc.xybob")).to.equal(true);
      });
    });
  });
});

//mixString
describe("#mixString()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(mixString).to.be.a("function");
    });
    it("returns a string", () => {
      expect(mixString("abcd", "abc")).to.be.a("string");
    });
    describe("receives the correct input", () => {
      it("returns 'error' if the arguments are not strings", () => {
        expect(mixString([], "")).to.equal("error");
        expect(mixString("", {})).to.equal("error");
        expect(mixString(1, "")).to.equal("error");
        expect(mixString("", undefined)).to.equal("error");
        expect(mixString(null, "")).to.equal("error");
      });
    });

    describe("returns the correct string", () => {
      it("Given two strings, a and b, create a bigger string made of the first char of a, the first char of b, the second char of a, the second char of b, and so on. Any leftover chars go at the end of the result.", () => {
        expect(mixString("Hiabc", "abc")).to.equal("Haibacbc");
        expect(mixString("Hi", "There")).to.equal("HTihere");
        expect(mixString("xxxx", "There")).to.equal("xTxhxexre");
        expect(mixString("xxx", "X")).to.equal("xXxx");
        expect(mixString("", "Hello")).to.equal("Hello");
        expect(mixString("Abc", "")).to.equal("Abc");
        expect(mixString("So", "Long")).to.equal("SLoong");
      });
    });
  });
});

//repeatEnd
describe("#repeatEnd()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(repeatEnd).to.be.a("function");
    });
    it("returns a string", () => {
      expect(repeatEnd("abcd", 1)).to.be.a("string");
    });
    describe("receives the correct input", () => {
      it("returns 'error' if the arguments are not a string, and number", () => {
        expect(repeatEnd([], "")).to.equal("error");
        expect(repeatEnd("", {})).to.equal("error");
        expect(repeatEnd(1, "")).to.equal("error");
        expect(repeatEnd("", undefined)).to.equal("error");
        expect(repeatEnd(null, "")).to.equal("error");
      });
    });

    describe("returns the correct string", () => {
      it("given a string and an number 'n', returns the string repeated n number of times", () => {
        expect(repeatEnd("Hiabc", 3)).to.equal("abcabcabc");
        expect(repeatEnd("Hi", 2)).to.equal("HiHi");
        expect(repeatEnd("xxxx", 1)).to.equal("x");
        expect(repeatEnd("xxx", 0)).to.equal("");
        expect(repeatEnd("1234", 4)).to.equal("1234123412341234");
        expect(repeatEnd("", 0)).to.equal("");
        expect(repeatEnd("Hello", 3)).to.equal("llollollo");
      });
    });
  });
});

//repeatFront
describe("#repeatFront()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(repeatFront).to.be.a("function");
    });
    it("returns a string", () => {
      expect(repeatFront("abcd", 1)).to.be.a("string");
    });
    describe("receives the correct input", () => {
      it("returns 'error' if the arguments are not a string, and number", () => {
        expect(repeatFront([], "")).to.equal("error");
        expect(repeatFront("", {})).to.equal("error");
        expect(repeatFront(1, "")).to.equal("error");
        expect(repeatFront("", undefined)).to.equal("error");
        expect(repeatFront(null, "")).to.equal("error");
      });
    });

    describe("returns the correct string", () => {
      it("Given a string and an int 'n', returns a string made of the first 'n' characters of the string, followed by the first 'n'-1 characters of the string, and so on. You may assume that n is between 0 and the length of the string, inclusive", () => {
        expect(repeatFront("Chocolate", 4)).to.equal("ChocChoChC");
        expect(repeatFront("Chocolate", 3)).to.equal("ChoChC");
        expect(repeatFront("xxxx", 1)).to.equal("x");
        expect(repeatFront("xyz", 3)).to.equal("xyzxyx");
        expect(repeatFront("1234", 0)).to.equal("");
        expect(repeatFront("", 0)).to.equal("");
        expect(repeatFront("Java", 4)).to.equal("JavaJavJaJ");
      });
    });
  });
});

//repeatSeparator
describe("#repeatSeparator()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(repeatSeparator).to.be.a("function");
    });
    it("returns a string", () => {
      expect(repeatSeparator("abcd", "e", 1)).to.be.a("string");
    });
    describe("receives the correct input", () => {
      it("returns 'error' if the arguments are not a string, string, and number", () => {
        expect(repeatSeparator([], "", "")).to.equal("error");
        expect(repeatSeparator("", {}, [])).to.equal("error");
        expect(repeatSeparator(1, "", undefined)).to.equal("error");
        expect(repeatSeparator("", undefined, null)).to.equal("error");
        expect(repeatSeparator(null, "", {})).to.equal("error");
      });
    });

    describe("returns the correct string", () => {
      it("Given two strings, word and a separator sep, return a big string made of count occurrences of the word, separated by the separator string.", () => {
        expect(repeatSeparator("Chocolate", "X", 3)).to.equal(
          "ChocolateXChocolateXChocolate"
        );
        expect(repeatSeparator("This", "That", 2)).to.equal("ThisThatThis");
        expect(repeatSeparator("xx", "X", 2)).to.equal("xxXxx");
        expect(repeatSeparator("xyz", "", 1)).to.equal("xyz");
        expect(repeatSeparator("1234", "5", 0)).to.equal("");
        expect(repeatSeparator("A", "B", 5)).to.equal("ABABABABA");
        expect(repeatSeparator("Java", "*", 4)).to.equal("Java*Java*Java*Java");
      });
    });
  });
});

//prefixAgain
describe("#prefixAgain()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(prefixAgain).to.be.a("function");
    });
    it("returns a boolean", () => {
      expect(prefixAgain("abcd", 1)).to.be.a("boolean");
    });
    describe("receives the correct input", () => {
      it("returns 'error' if the arguments are not a string, and number", () => {
        expect(prefixAgain([], "")).to.equal("error");
        expect(prefixAgain("", {})).to.equal("error");
        expect(prefixAgain(1, "")).to.equal("error");
        expect(prefixAgain("", undefined)).to.equal("error");
        expect(prefixAgain(null, "")).to.equal("error");
      });
    });

    describe("returns the correct boolean", () => {
      it("given a string and a number 'n', returns true if front of str 'n' number of chars appears later in the string, else false", () => {
        expect(prefixAgain("Chocolate", 4)).to.equal(false);
        expect(prefixAgain("Hi12345Hi6789Hi10", 1)).to.equal(true);
        expect(prefixAgain("xyzxyxyxy", 3)).to.equal(false);
        expect(prefixAgain("a", 1)).to.equal(false);
        expect(prefixAgain("aa", 1)).to.equal(true);
        expect(prefixAgain("ab", 1)).to.equal(false);
        expect(prefixAgain("abXYabc", 2)).to.equal(true);
      });
    });
  });
});

//xyzMiddle
describe("#xyzMiddle()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(xyzMiddle).to.be.a("function");
    });
    it("returns a boolean", () => {
      expect(xyzMiddle("abcd")).to.be.a("boolean");
    });
    describe("receives the correct input", () => {
      it("returns 'error' if the argument is not a string", () => {
        expect(xyzMiddle([])).to.equal("error");
        expect(xyzMiddle({})).to.equal("error");
        expect(xyzMiddle(1)).to.equal("error");
        expect(xyzMiddle(undefined)).to.equal("error");
        expect(xyzMiddle(null)).to.equal("error");
      });
    });

    describe("returns the correct boolean", () => {
      it("returns true if 'xyz' appears in the middle of a string.  Middle is if the number of chars to the left and right of 'xyz' differ by one at most.", () => {
        expect(xyzMiddle("axyzaa")).to.equal(true);
        expect(xyzMiddle("aaxyza")).to.equal(true);
        expect(xyzMiddle("axyzaaa")).to.equal(false);
        expect(xyzMiddle("aaaxyza")).to.equal(false);
        expect(xyzMiddle("xyz")).to.equal(true);
        expect(xyzMiddle("1x345xyz12x4")).to.equal(true);
        expect(xyzMiddle("xy")).to.equal(false);
        expect(xyzMiddle("xyzz")).to.equal(true);
        expect(xyzMiddle("xyzxyzAxyzBxyzxyz")).to.equal(true);
        expect(xyzMiddle("xyzxyzxyzBxyzxyz")).to.equal(true);
        expect(xyzMiddle("xyzxyzAxyzxyzxyz")).to.equal(true);
        expect(xyzMiddle("xyzxyzAxyzxyzxy")).to.equal(false);
      });
    });
  });
});

//getSandwich
describe("#getSandwich()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(getSandwich).to.be.a("function");
    });
    it("returns a string", () => {
      expect(getSandwich("abcd")).to.be.a("string");
    });
    describe("receives the correct input", () => {
      it("returns 'error' if the argument is not a string", () => {
        expect(getSandwich([])).to.equal("error");
        expect(getSandwich({})).to.equal("error");
        expect(getSandwich(1)).to.equal("error");
        expect(getSandwich(undefined)).to.equal("error");
        expect(getSandwich(null)).to.equal("error");
      });
    });

    describe("returns the correct string", () => {
      it("returns the string that is between the first and last appearance of 'bread' in the given string, or '' if there aren't two pieces of bread.", () => {
        expect(getSandwich("breadjambread")).to.equal("jam");
        expect(getSandwich("xxbreadjambreadyy")).to.equal("jam");
        expect(getSandwich("xxbreadyy")).to.equal("");
        expect(getSandwich("breadbread")).to.equal("");
        expect(getSandwich("xyz")).to.equal("");
        expect(getSandwich("")).to.equal("");
        expect(getSandwich("breadbreasbread")).to.equal("breas");
        expect(getSandwich("breadbreadbreadbread")).to.equal("breadbread");
      });
    });
  });
});

//sameStarChar
describe("#sameStarChar()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(sameStarChar).to.be.a("function");
    });
    it("returns a boolean", () => {
      expect(sameStarChar("abcd")).to.be.a("boolean");
    });
    describe("receives the correct input", () => {
      it("returns 'error' if the argument is not a string", () => {
        expect(sameStarChar([])).to.equal("error");
        expect(sameStarChar({})).to.equal("error");
        expect(sameStarChar(1)).to.equal("error");
        expect(sameStarChar(undefined)).to.equal("error");
        expect(sameStarChar(null)).to.equal("error");
      });
    });

    describe("returns the correct boolean", () => {
      it("returns true for every star in the string where the chars before and after the star are the same for all stars IF there is a char before and after the star, else false.", () => {
        expect(sameStarChar("y*y")).to.equal(true);
        expect(sameStarChar("y*yz*z")).to.equal(true);
        expect(sameStarChar("xy*z")).to.equal(false);
        expect(sameStarChar("a*a*b")).to.equal(false);
        expect(sameStarChar("")).to.equal(true);
        expect(sameStarChar("abcDEF")).to.equal(true);
        expect(sameStarChar("XY*YYYY*Y*")).to.equal(true);
        expect(sameStarChar("XY*YYYY*Z*")).to.equal(false);
        expect(sameStarChar("*12*2*2")).to.equal(true);
      });
    });
  });
});

//oneTwo
describe("#oneTwo()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(oneTwo).to.be.a("function");
    });
    it("returns a string", () => {
      expect(oneTwo("abcd")).to.be.a("string");
    });
    describe("receives the correct input", () => {
      it("returns 'error' if the argument is not a string", () => {
        expect(oneTwo([])).to.equal("error");
        expect(oneTwo({})).to.equal("error");
        expect(oneTwo(1)).to.equal("error");
        expect(oneTwo(undefined)).to.equal("error");
        expect(oneTwo(null)).to.equal("error");
      });
    });

    describe("returns the correct string", () => {
      it("Given a string, compute a new string by moving the first char to come after the next two chars, so 'abc' yields 'bca'. Repeat this process for each subsequent group of 3 chars, so 'abcdef' yields 'bcaefd'. Ignore any group of fewer than 3 chars at the end.", () => {
        expect(oneTwo("abc")).to.equal("bca");
        expect(oneTwo("tca")).to.equal("cat");
        expect(oneTwo("tcagdo")).to.equal("catdog");
        expect(oneTwo("abcdefghijklkmnopqrstuvwxyz1234567890")).to.equal(
          "bcaefdhigkljmnkpqostrvwuyzx231564897"
        );
        expect(oneTwo("abcdefghijklkmnopqrstuvwxyz123456789")).to.equal(
          "bcaefdhigkljmnkpqostrvwuyzx231564897"
        );
        expect(oneTwo("abcdefghijklkmnopqrstuvwxyz12345678")).to.equal(
          "bcaefdhigkljmnkpqostrvwuyzx231564"
        );
        expect(oneTwo("")).to.equal("");
        expect(oneTwo("xy")).to.equal("");
        expect(oneTwo("abcdefxyz")).to.equal("bcaefdyzx");
      });
    });
  });
});
