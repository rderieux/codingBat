import { expect } from "chai";

import stringTimes from "../src/warmup2/stringTimes.js";
import frontTimes from "../src/warmup2/frontTimes.js";
import countXX from "../src/warmup2/countXX.js";
import doubleX from "../src/warmup2/doubleX.js";
import stringBits from "../src/warmup2/stringBits.js";
import last2 from "../src/warmup2/last2.js";
import arrayCount9 from "../src/warmup2/arrayCount9.js";
import arrayFront9 from "../src/warmup2/arrayFront9.js";
import array123 from "../src/warmup2/array123.js";
import stringMatch from "../src/warmup2/stringMatch.js";
import stringX from "../src/warmup2/stringX.js";
import altPairs from "../src/warmup2/altPairs.js";
import stringYak from "../src/warmup2/stringYak.js";
import array667 from "../src/warmup2/array667.js";
import noTriples from "../src/warmup2/noTriples.js";

describe("stringTimes function", () => {
  it("returns a str of a given str n times in a new str", () => {
    expect(stringTimes("Hi", 4)).to.equal("HiHiHiHi");
    expect(stringTimes("Robert", 1)).to.equal("Robert");
    expect(stringTimes("Hi", 0)).to.equal("");
    expect(stringTimes("Hello", 3)).to.equal("HelloHelloHello");
  });
});

describe("frontTimes function", () => {
  it("returns a string of a given strings first 3 chars repeating n times, if less than 3 return whatever is there n times.", () => {
    expect(frontTimes("Robert", 3)).to.equal("RobRobRob");
    expect(frontTimes("Or", 4)).to.equal("OrOrOrOr");
    expect(frontTimes("", 3)).to.equal("");
    expect(frontTimes("Abc", 0)).to.equal("");
  });
});

describe("countXX function", () => {
  it("returns a count of how many times 'xx' appears in a string", () => {
    expect(countXX("Maxxxine")).to.equal(2);
    expect(countXX("xx")).to.equal(1);
    expect(countXX("xxxx")).to.equal(3);
    expect(countXX("")).to.equal(0);
    expect(countXX("abc")).to.equal(0);
    expect(countXX("XxXxXxXxX")).to.equal(8);
  });
});

describe("doubleX function", () => {
  it("return a boolean, if the first instance of x appearing in a string is followed by another x, return true, else false.", () => {
    expect(doubleX("axxbb")).to.equal(true);
    expect(doubleX("axbb")).to.equal(false);
    expect(doubleX("xxxx")).to.equal(true);
    expect(doubleX("xox")).to.equal(false);
    expect(doubleX("raxx")).to.equal(true);
    expect(doubleX("rox")).to.equal(false);
  });
});

describe("stringBits function", () => {
  it("returns a new str from given str of every other char, starting with the first", () => {
    expect(stringBits("Robert")).to.equal("Rbr");
    expect(stringBits("Hello")).to.equal("Hlo");
    expect(stringBits("Well well well")).to.equal("Wl elwl");
    expect(stringBits("Pi")).to.equal("P");
    expect(stringBits("")).to.equal("");
  });
});

describe("last2()", () => {
  it("returns a count of how many times the last two chars of a string appear in the string, not counting itself.", () => {
    expect(last2("hixxhi")).to.equal(1);
    expect(last2("ddooddoodd")).to.equal(2);
    expect(last2("xxaxxaxxaxx")).to.equal(3);
    expect(last2("hi")).to.equal(0);
    expect(last2("h")).to.equal(0);
    expect(last2("")).to.equal(0);
  });
});

//arrayCount9
describe("#arrayCount9()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(arrayCount9).to.be.a("function");
    });
    it("returns an int", () => {
      expect(arrayCount9([1, 2, 9])).to.be.a("number");
    });
  });

  describe("returns the correct output", () => {
    it("returns 'error' if the argument is not an array", () => {
      expect(arrayCount9("")).to.equal("error");
      expect(arrayCount9(9)).to.equal("error");
    });
  });
  it("returns an int of how many times 9 appears in a given array.", () => {
    expect(arrayCount9([1, 4, 9])).to.equal(1);
    expect(arrayCount9([9, 4, 9])).to.equal(2);
    expect(arrayCount9([1, 4, 6])).to.equal(0);
    expect(arrayCount9([9, 9, 9, 9, 9])).to.equal(5);
    expect(arrayCount9([0, 1, 2, 3])).to.equal(0);
  });
});

//arrayFront9
describe("#arrayFront9()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(arrayFront9).to.be.a("function");
    });
    it("returns a boolean", () => {
      expect(arrayFront9([1, 2, 3, 9])).to.be.a("boolean");
    });
  });

  describe("returns the correct output", () => {
    it("returns 'error' if the argument is not an array", () => {
      expect(arrayFront9("")).to.equal("error");
      expect(arrayFront9(false)).to.equal("error");
      expect(arrayFront9(4)).to.equal("error");
    });
  });

  it("returns true if 9 appears as one of the first 4 elements of a given array, else false.", () => {
    expect(arrayFront9([9, 2, 3, 4])).to.equal(true);
    expect(arrayFront9([1, 2, 3, 9])).to.equal(true);
    expect(arrayFront9([1, 2, 9, 4])).to.equal(true);
    expect(arrayFront9([1, 2, 3])).to.equal(false);
    expect(arrayFront9([])).to.equal(false);
    expect(arrayFront9([1, 9])).to.equal(true);
    expect(arrayFront9([1, 2, 9, 3, 4])).to.equal(true);
    expect(arrayFront9([3, 9, 2, 3, 3])).to.equal(true);
  });
});

//array123
describe("#array123()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(array123).to.be.a("function");
    });
    it("returns a boolean", () => {
      expect(array123([1, 2, 3, 9])).to.be.a("boolean");
    });
  });

  describe("returns the correct output", () => {
    it("returns 'error' if the argument is not an array", () => {
      expect(arrayFront9("")).to.equal("error");
      expect(arrayFront9(false)).to.equal("error");
      expect(arrayFront9(4)).to.equal("error");
    });
  });

  it("returns true if the sequence 1, 2, 3 appears in the given array, else false.", () => {
    expect(array123([1, 2, 3])).to.equal(true);
    expect(array123([0, 1, 2, 3])).to.equal(true);
    expect(array123([1, 2, 4])).to.equal(false);
    expect(array123([3, 2, 1])).to.equal(false);
    expect(array123([1, 2, 1, 2, 1, 2, 3])).to.equal(true);
  });
});

//stringMatch
describe("#stringMatch()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(stringMatch).to.be.a("function");
    });
    it("returns a number", () => {
      expect(stringMatch("abc", "abc")).to.be.a("number");
    });
  });

  describe("returns the correct output", () => {
    it("returns 'error' if the arguments are not strings", () => {
      expect(stringMatch("", 1)).to.equal("error");
      expect(stringMatch(1, "1")).to.equal("error");
      expect(stringMatch([], "")).to.equal("error");
      expect(stringMatch({}, "")).to.equal("error");
    });
  });
  it("compares two strings, if they contain the same length 2 substring, add to count, returns count", () => {
    expect(stringMatch("abc", "abc")).to.equal(2);
    expect(stringMatch("abc", "axc")).to.equal(0);
    expect(stringMatch("Robert", "Hobert")).to.equal(4);
    expect(stringMatch("aaxxaaxx", "iaxxai")).to.equal(3);
    expect(stringMatch("he", "hello")).to.equal(1);
  });
});

//stringX
describe("#stringX()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(stringX).to.be.a("function");
    });
    it("returns a string", () => {
      expect(stringX("xxHiXX")).to.be.a("string");
    });
    describe("returns the correct output", () => {
      it("returns 'error' if the argument is not a string", () => {
        expect(stringX(1)).to.equal("error");
        expect(stringX([])).to.equal("error");
        expect(stringX({})).to.equal("error");
      });
    });
    describe("returns the correct string", () => {
      it("returns a string with all the x's removed, except the first and last char of the string.", () => {
        expect(stringX("xxHixx")).to.equal("xHix");
        expect(stringX("Ruxxxnt")).to.equal("Runt");
        expect(stringX("xabxxxcdx")).to.equal("xabcdx");
        expect(stringX("")).to.equal("");
        expect(stringX("xx")).to.equal("xx");
        expect(stringX("x")).to.equal("xx");
      });
    });
  });
});

//altPairs
describe("#altPairs()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(altPairs).to.be.a("function");
    });
    it("returns a string", () => {
      expect(stringX("xxHiXX")).to.be.a("string");
    });
    describe("returns the correct output", () => {
      it("returns 'error' if the argument is not a string", () => {
        expect(stringX(1)).to.equal("error");
        expect(stringX([])).to.equal("error");
        expect(stringX({})).to.equal("error");
      });
    });
    describe("returns the correct string", () => {
      it("returns a string made of all the chars at indexes 0,1, 4,5 8,9...", () => {
        expect(altPairs("kitten")).to.equal("kien");
        expect(altPairs("Chocolate")).to.equal("Chole");
        expect(altPairs("CodingHorror")).to.equal("Congrr");
        expect(altPairs("yak")).to.equal("ya");
        expect(altPairs("ya")).to.equal("ya");
        expect(altPairs("y")).to.equal("y");
        expect(altPairs("")).to.equal("");
        expect(altPairs("ThisThatTheOther")).to.equal("ThThThth");
      });
    });
  });
});

//stringYak
describe("#stringYak()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(stringYak).to.be.a("function");
    });
    it("returns a string", () => {
      expect(stringYak("yakyyak")).to.be.a("string");
    });
    describe("returns the correct output", () => {
      it("returns 'error' if the argument is not a string", () => {
        expect(stringX(1)).to.equal("error");
        expect(stringX([])).to.equal("error");
        expect(stringX({})).to.equal("error");
      });
    });
    describe("returns the correct string", () => {
      it("returns a string where all the 'yak' are removed, but the 'a' can by any char.", () => {
        expect(stringYak("yakyyak")).to.equal("y");
        expect(stringYak("yak")).to.equal("");
        expect(stringYak("yik")).to.equal("");
        expect(stringYak("yakxxyak")).to.equal("xx");
        expect(stringYak("zzbb")).to.equal("zzbb");
        expect(stringYak("yykHi")).to.equal("Hi");
      });
    });
  });
});

//array667
describe("#array667()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(array667).to.be.a("function");
    });
    it("returns a number", () => {
      expect(array667([1, 2, 3])).to.be.a("number");
    });
    describe("returns the correct output", () => {
      it("returns 'error' if the argument is not an array", () => {
        expect(array667(1)).to.equal("error");
        expect(array667("")).to.equal("error");
        expect(array667({})).to.equal("error");
      });
    });
    describe("returns the correct number", () => {
      it("returns the number of times 6, 6 and 6,7 appear in an array.", () => {
        expect(array667([1, 2, 3, 6, 6])).to.equal(1);
        expect(array667([])).to.equal(0);
        expect(array667([6, 7, 3, 6, 6, 6])).to.equal(3);
        expect(array667([6, 6])).to.equal(1);
        expect(array667([6, 7])).to.equal(1);
        expect(array667([1, 2, 3, 4, 6])).to.equal(0);
      });
    });
  });
});

//noTriples
describe("#noTriples()", () => {
  describe("works with correct types", () => {
    it("is a function", () => {
      expect(noTriples).to.be.a("function");
    });
    it("returns a boolean", () => {
      expect(noTriples([1, 1, 2, 2, 3, 3])).to.be.a("boolean");
    });

    describe("returns the correct output", () => {
      it("returns 'error' if the argument is not an array", () => {
        expect(noTriples("")).to.equal("error");
        expect(noTriples(1)).to.equal("error");
        expect(noTriples({})).to.equal("error");
      });
    });

    describe("returns the correct boolean", () => {
      it("returns false if an number appears 3 times in a row, else true.", () => {
        expect(noTriples([1, 1, 2, 2, 3, 3])).to.equal(true);
        expect(noTriples([1, 1, 2, 2, 2, 1])).to.equal(false);
        expect(noTriples([1, 1, 1])).to.equal(false);
        expect(noTriples([1])).to.equal(true);
        expect(noTriples([])).to.equal(true);
      });
    });
  });
});
