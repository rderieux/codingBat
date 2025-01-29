import { expect } from "chai";

import countYZ from "../src/string3/countYZ.js";
import withoutString from "../src/string3/withoutString.js";
import equalIsNot from "../src/string3/equalIsNot.js";
import gHappy from "../src/string3/gHappy.js";
import countTriple from "../src/string3/countTriple.js";
import sumDigits from "../src/string3/sumDigits.js";
import sameEnds from "../src/string3/sameEnds.js";
import mirrorEnds from "../src/string3/mirrorEnds.js";
import maxBlock from "../src/string3/maxBlock.js";
import sumNumbers from "../src/string3/sumNumbers.js";

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

//gHappy
describe("#gHappy()", () => {
  describe("it works with correct types", () => {
    it("is a function", () => {
      expect(gHappy).to.be.a("function");
    });
    it("returns a boolean", () => {
      expect(gHappy("a;lsdkfj")).to.be.a("boolean");
    });
    describe("it receives the correct arg", () => {
      it("returns 'error' if the arg is not a string", () => {
        expect(gHappy(1)).to.equal("error");
        expect(gHappy()).to.equal("error");
        expect(gHappy([])).to.equal("error");
        expect(gHappy({})).to.equal("error");
        expect(gHappy(null)).to.equal("error");
        expect(gHappy(undefined)).to.equal("error");
      });
    });
    describe(" it returns the correct boolean", () => {
      it("returns true if, when there is a 'g' in the string, it has another 'g' to it's left or right, else false", () => {
        expect(gHappy("xxggxx")).to.equal(true);
        expect(gHappy("zzgzz")).to.equal(false);
        expect(gHappy("g")).to.equal(false);
        expect(gHappy("")).to.equal(true);
        expect(gHappy("xxggyygxx")).to.equal(false);
        expect(gHappy("mgm")).to.equal(false);
        expect(gHappy("nagging")).to.equal(false);
        expect(gHappy("mggm")).to.equal(true);
        expect(gHappy("g")).to.equal(false);
        expect(gHappy("gg")).to.equal(true);
      });
    });
  });
});

//countTriple
describe("#countTriple()", () => {
  describe("it works with correct types", () => {
    it("is a function", () => {
      expect(countTriple).to.be.a("function");
    });
    it("returns a number", () => {
      expect(countTriple("xxx")).to.be.a("number");
    });
  });
  describe("it receives the correct arg", () => {
    it("returns 'error' if the arg is not a number", () => {
      expect(countTriple()).to.equal("error");
      expect(countTriple(1)).to.equal("error");
      expect(countTriple([])).to.equal("error");
      expect(countTriple({})).to.equal("error");
      expect(countTriple(null)).to.equal("error");
      expect(countTriple(undefined)).to.equal("error");
    });
  });
  describe("it returns the correct number", () => {
    it("returns 0 for 'abc123abc'", () => {
      expect(countTriple("abc123abc")).to.equal(0);
    });
    it("returns 1 for 'xxx'", () => {
      expect(countTriple("xxx")).to.equal(1);
    });
    it("returns 3 for 'xxxabyyyycd'", () => {
      expect(countTriple("xxxabyyyycd")).to.equal(3);
    });
    it("returns 4 for 'abYYYabXXXXXab'", () => {
      expect(countTriple("abYYYabXXXXXab")).to.equal(4);
    });
    it("returns 0 for 'abYYXabXXYXXab'", () => {
      expect(countTriple("abYYXabXXYXXab")).to.equal(0);
    });
    it("returns 1 for '122abhhh2'", () => {
      expect(countTriple("122abhhh2")).to.equal(1);
    });
    it("returns 1 for 'XXXabc'", () => {
      expect(countTriple("XXXabc")).to.equal(1);
    });
    it("returns 0 for 'a'", () => {
      expect(countTriple("a")).to.equal(0);
    });
    it("returns 0 for an empty string", () => {
      expect(countTriple("")).to.equal(0);
    });
  });
});

//sumDigits
describe("#sumDigits()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(sumDigits).to.be.a("function");
    });
    it("returns a number", () => {
      expect(sumDigits("a123bc")).to.be.a("number");
    });
  });
  describe("receives the correct arg", () => {
    it("returns 'error' if not given a string arg", () => {
      expect(sumDigits()).to.equal("error");
      expect(sumDigits(1)).to.equal("error");
      expect(sumDigits([])).to.equal("error");
      expect(sumDigits({})).to.equal("error");
      expect(sumDigits(null)).to.equal("error");
      expect(sumDigits(undefined)).to.equal("error");
    });
  });
  describe("returns the correct number", () => {
    it("returns 6 for 'aa1bc2d3'", () => {
      expect(sumDigits("aa1bc2d3")).to.equal(6);
    });
    it("returns 8 for 'aa11b33'", () => {
      expect(sumDigits("aa11b33")).to.equal(8);
    });
    it("returns 0 for 'Robert'", () => {
      expect(sumDigits("Robert")).to.equal(0);
    });
    it("returns 7 for '5hoco1a1e'", () => {
      expect(sumDigits("5hoco1a1e")).to.equal(7);
    });
    it("returns 12 for '123abc123'", () => {
      expect(sumDigits("123abc123")).to.equal(12);
    });
    it("returns 0 for ''", () => {
      expect(sumDigits("")).to.equal(0);
    });
    it("returns 12 for 'X1z9b2'", () => {
      expect(sumDigits("X1z9b2")).to.equal(12);
    });
    it("returns 14 for '5432a'", () => {
      expect(sumDigits("5432a")).to.equal(14);
    });
  });
});

//sameEnds
describe("#sameEnds()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(sameEnds).to.be.a("function");
    });
    it("returns a string", () => {
      expect(sameEnds("abc")).to.be.a("string");
    });
  });
  describe("receives the correct arg", () => {
    it("returns 'error' if the arg is not a string", () => {
      expect(sameEnds()).to.equal("error");
      expect(sameEnds(1)).to.equal("error");
      expect(sameEnds([])).to.equal("error");
      expect(sameEnds({})).to.equal("error");
      expect(sameEnds(null)).to.equal("error");
      expect(sameEnds(undefined)).to.equal("error");
    });
  });
  describe("returns the correct boolean", () => {
    it("returns 'ab' for 'abXYab'", () => {
      expect(sameEnds("abXYab")).to.equal("ab");
    });
    it("returns 'x' for 'xx'", () => {
      expect(sameEnds("xx")).to.equal("x");
    });
    it("returns 'x' for 'xxx'", () => {
      expect(sameEnds("xxx")).to.equal("x");
    });
    it("returns 'xx' for 'xxxx'", () => {
      expect(sameEnds("xxxx")).to.equal("xx");
    });
    it("returns 'java' for 'javaXYZjava'", () => {
      expect(sameEnds("javaXYZjava")).to.equal("java");
    });
    it("returns '' for 'xavaXYZjava'", () => {
      expect(sameEnds("xavaXYZjava")).to.equal("");
    });
    it("returns 'my' for 'mymmy'", () => {
      expect(sameEnds("mymmy")).to.equal("my");
    });
  });
});

//mirrorEnds
describe("#mirrorEnds()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(mirrorEnds).to.be.a("function");
    });
    it("returns a string", () => {
      expect(mirrorEnds("")).to.be.a("string");
    });
    it("returns 'error' if the arg is not a string", () => {
      expect(mirrorEnds()).to.equal("error");
      expect(mirrorEnds(1)).to.equal("error");
      expect(mirrorEnds([])).to.equal("error");
      expect(mirrorEnds({})).to.equal("error");
      expect(mirrorEnds(null)).to.equal("error");
      expect(mirrorEnds(undefined)).to.equal("error");
    });
  });
  describe("returns the correct string", () => {
    it("returns 'ab' for 'abXYZba'", () => {
      expect(mirrorEnds("abXYZba")).to.equal("ab");
    });
    it("returns 'a' for 'abca'", () => {
      expect(mirrorEnds("abca")).to.equal("a");
    });
    it("returns 'aba' for 'aba'", () => {
      expect(mirrorEnds("aba")).to.equal("aba");
    });
    it("returns '' for 'abab'", () => {
      expect(mirrorEnds("abab")).to.equal("");
    });
    it("returns 'xxx' for 'xxx'", () => {
      expect(mirrorEnds("xxx")).to.equal("xxx");
    });
    it("returns 'xxYxx' for 'xxYxx'", () => {
      expect(mirrorEnds("xxYxx")).to.equal("xxYxx");
    });
    it("returns 'Hi ' for 'Hi and iH'", () => {
      expect(mirrorEnds("Hi and iH")).to.equal("Hi ");
    });
    it("returns 'x' for 'x'", () => {
      expect(mirrorEnds("x")).to.equal("x");
    });
    it("returns 'ba' for 'band andab'", () => {
      expect(mirrorEnds("band andab")).to.equal("ba");
    });
  });
});

//maxBlock
describe("#maxBlock()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(maxBlock).to.be.a("function");
    });
    it("returns a number", () => {
      expect(maxBlock("")).to.be.a("number");
    });
    it("returns 'error' if the arg is not a string", () => {
      expect(maxBlock()).to.equal("error");
      expect(maxBlock(1)).to.equal("error");
      expect(maxBlock([])).to.equal("error");
      expect(maxBlock({})).to.equal("error");
      expect(maxBlock(null)).to.equal("error");
      expect(maxBlock(undefined)).to.equal("error");
    });
  });
  describe("returns the correct number", () => {
    it("returns 2 from 'cherrios'", () => {
      expect(maxBlock("cherrios")).to.equal(2);
    });
    it("returns 6 from 'greeeeeeat!!!'", () => {
      expect(maxBlock("greeeeeeat!!!")).to.equal(6);
    });
    it("returns 0 from ''", () => {
      expect(maxBlock("")).to.equal(0);
    });
    it("returns 1 from 'abc'", () => {
      expect(maxBlock("abc")).to.equal(1);
    });
    it("returns 3 from 'abbbcbbbxbbbx'", () => {
      expect(maxBlock("abbbcbbbxbbbx")).to.equal(3);
    });
    it("returns 4 from 'XXBBBBbbxx'", () => {
      expect(maxBlock("XXBBBBbbxx")).to.equal(4);
    });
    it("returns 4 from 'XXBBBbbxxXXXX'", () => {
      expect(maxBlock("XXBBBbbxxXXXX")).to.equal(4);
    });
    it("returns 5 from 'XX2222BBBbbXX22222'", () => {
      expect(maxBlock("XX2222BBBbbXX22222")).to.equal(5);
    });
  });
});

//sumNumbers
describe("#sumNumbers", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(sumNumbers).to.be.a("function");
    });
    it("returns a number", () => {
      expect(sumNumbers("")).to.be.a("number");
    });
    it("returns 'error' if the arg is not a number", () => {
      expect(sumNumbers()).to.equal("error");
      expect(sumNumbers(1)).to.equal("error");
      expect(sumNumbers([])).to.equal("error");
      expect(sumNumbers({})).to.equal("error");
      expect(sumNumbers(null)).to.equal("error");
      expect(sumNumbers(undefined)).to.equal("error");
    });
  });
  describe("returns the correct number", () => {
    it("returns 123 from 'abc123xyz'", () => {
      expect(sumNumbers("abc123xyz")).to.equal(123);
    });
    it("returns 44 from 'aa11b33'", () => {
      expect(sumNumbers("aa11b33")).to.equal(44);
    });
    it("returns 18 from '7 11'", () => {
      expect(sumNumbers("7 11")).to.equal(18);
    });
    it("returns 7 from '5hoco1a1e'", () => {
      expect(sumNumbers("5hoco1a1e")).to.equal(7);
    });
    it("returns 246 from '123abc123'", () => {
      expect(sumNumbers("123abc123")).to.equal(246);
    });
    it("returns 0 from ''", () => {
      expect(sumNumbers("")).to.equal(0);
    });
    it("returns 12 from 'X1z9b2'", () => {
      expect(sumNumbers("X1z9b2")).to.equal(12);
    });
    it("returns 5432 from '5432a'", () => {
      expect(sumNumbers("5432a")).to.equal(5432);
    });
  });
});

//notReplace
describe("#notReplace", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(notReplace).to.be.a("function");
    });
    it("returns a string", () => {
      expect(notReplace("")).to.be.a("string");
    });
    it("returns 'error' if the arg is not a string", () => {
      expect(notReplace()).to.equal("error");
      expect(notReplace(1)).to.equal("error");
      expect(notReplace([])).to.equal("error");
      expect(notReplace({})).to.equal("error");
      expect(notReplace(null)).to.equal("error");
      expect(notReplace(undefined)).to.equal("error");
    });
  });
  describe("returns the correct string", () => {
    it("returns 'is not test' from 'is test'", () => {
      expect(notReplace("is test")).to.equal("is not test");
    });
    it("returns 'is not-is not test' from 'is-is test'", () => {
      expect(notReplace("is-is test")).to.equal("is not-is not test");
    });
    it("returns 'This is not right' from 'This is right'", () => {
      expect(notReplace("This is right")).to.equal("This is not right");
    });
    it("returns 'This is not isabell' from 'This is isabell'", () => {
      expect(notReplace("This is isabell")).to.equal("This is not isabell");
    });
    it("returns 'is not' from 'is'", () => {
      expect(notReplace("is")).to.equal("is not");
    });
    it("returns 'isis' from 'isis'", () => {
      expect(notReplace("isis")).to.equal("isis");
    });
    it("returns 'Dis is not bliss is' from 'Dis is bliss is'", () => {
      expect(notReplace("Dis is bliss is")).to.equal("Dis is not bliss is");
    });
  });
});
