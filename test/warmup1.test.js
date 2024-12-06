//const assert = require("assert");
//import assert from "assert";
import { expect } from "chai";

import sleepIn from "../src/warmup1/sleepIn.js";
import monkeyTrouble from "../src/warmup1/monkeyTrouble.js";
import sumDouble from "../src/warmup1/sumDouble.js";
import diff21 from "../src/warmup1/diff21.js";
import parrotTrouble from "../src/warmup1/parrotTrouble.js";
import makes10 from "../src/warmup1/makes10.js";
import nearHundred from "../src/warmup1/nearHundred.js";
import posNeg from "../src/warmup1/posNeg.js";
import notString from "../src/warmup1/notString.js";
import missingChar from "../src/warmup1/missingChar.js";
import frontBack from "../src/warmup1/frontBack.js";
import front3 from "../src/warmup1/front3.js";
import backAround from "../src/warmup1/backAround.js";
import or35 from "../src/warmup1/or35.js";
import front22 from "../src/warmup1/front22.js";
import startHi from "../src/warmup1/startHi.js";
import icyHot from "../src/warmup1/icyHot.js";
import in1020 from "../src/warmup1/in1020.js";
import hasTeen from "../src/warmup1/hasTeen.js";
import loneTeen from "../src/warmup1/loneTeen.js";
import delDel from "../src/warmup1/delDel.js";
import mixStart from "../src/warmup1/mixStart.js";
import startOz from "../src/warmup1/startOz.js";
import intMax from "../src/warmup1/intMax.js";

// sleepIn function tests
describe("sleepIn function", () => {
  describe("Works with correct types", () => {
    it("is a function", () => {
      expect(sleepIn).that.be.a("function");
    });

    it("returns a boolean", () => {
      expect(sleepIn(true, true)).to.be.a("boolean");
    });

    describe("returns the correct output", () => {
      it("return 'error' if either argument is not a boolean", () => {
        expect(sleepIn("1", true)).to.equal("error");
        expect(sleepIn(undefined, true)).to.equal("error");
        expect(sleepIn(false, null)).to.equal("error");
      });
    });

    it("Lets you sleep in if it is not a weekday or you are on vacation", () => {
      expect(sleepIn(true, true)).to.equal(true);
      expect(sleepIn(true, false)).to.equal(false);
      expect(sleepIn(false, true)).to.equal(true);
    });
  });
});

//monkeyTrouble tests
describe("monkeyTrouble function", () => {
  it("If both monkey's are smiling or no monkey's are smiling, it's bad", () => {
    expect(monkeyTrouble(true, true)).to.equal(true);
    expect(monkeyTrouble(false, false)).to.equal(true);
    expect(monkeyTrouble(true, false)).to.equal(false);
  });
});

//sumDouble tests
describe("sumDouble function", () => {
  it("Given two int values, return their sum, Unless the two values are the same, then return double their sum", () => {
    expect(sumDouble(1, 2)).to.equal(3);
    expect(sumDouble(3, 2)).to.equal(5);
    expect(sumDouble(2, 2)).to.equal(8);
    expect(sumDouble(-1, 0)).to.equal(-1);
  });
});

//diff21 tests
describe("diff21 function", () => {
  it("returns the absolute difference between n and 21, but returns double the absolute difference if n is over 21", () => {
    expect(diff21(19)).to.equal(2);
    expect(diff21(10)).to.equal(11);
    expect(diff21(21)).to.equal(0);
    expect(diff21(22)).to.equal(2);
    expect(diff21(25)).to.equal(8);
    expect(diff21(-1)).to.equal(22);
    expect(diff21(-2)).to.equal(23);
    expect(diff21(50)).to.equal(58);
  });
});

//parrotTrouble
describe("parrotTrouble function", () => {
  it("returns true if the parrot is talking before 7 or after 20", () => {
    expect(parrotTrouble(true, 6)).to.equal(true);
    expect(parrotTrouble(true, 7)).to.equal(false);
    expect(parrotTrouble(false, 6)).to.equal(false);
    expect(parrotTrouble(true, 21)).to.equal(true);
    expect(parrotTrouble(false, 21)).to.equal(false);
    expect(parrotTrouble(true, 23)).to.equal(true);
    expect(parrotTrouble(false, 23)).to.equal(false);
  });
});

//makes10
describe("makes10 function", () => {
  it("returns true if a = 10 or b = 10 or a + b = 10", () => {
    expect(makes10(10, 1)).to.equal(true);
    expect(makes10(2, 10)).to.equal(true);
    expect(makes10(6, 4)).to.equal(true);
    expect(makes10(7, 1)).to.equal(false);
    expect(makes10(3, 3)).to.equal(false);
  });
});

//nearHundred
describe("nearHundred function", () => {
  it("returns true when n is within 10 of 100 or 200", () => {
    expect(nearHundred(91)).to.equal(true);
    expect(nearHundred(50)).to.equal(false);
    expect(nearHundred(199)).to.equal(true);
    expect(nearHundred(110)).to.equal(true);
    expect(nearHundred(111)).to.equal(false);
    expect(nearHundred(189)).to.equal(false);
  });
});

//posNeg
describe("posNeg function", () => {
  it("returns true when a or b is negative, unless negative parameter is true, then both need to be negative to return true", () => {
    expect(posNeg(-1, 1, false)).to.equal(true);
    expect(posNeg(1, -1, false)).to.equal(true);
    expect(posNeg(-1, -1, true)).to.equal(true);
    expect(posNeg(-1, 1, true)).to.equal(false);
    expect(posNeg(1, 1, true)).to.equal(false);
    expect(posNeg(-1, -1, false)).to.equal(false);
  });
});

//notString
describe("notString function", () => {
  it("returns a string unchanged if it starts with not, otherwise adds not to the beginning.", () => {
    expect(notString("string")).to.equal("not string");
    expect(notString("not string")).to.equal("not string");
    expect(notString("a longer string")).to.equal("not a longer string");
    expect(notString("a not")).to.equal("not a not");
    expect(notString("not")).to.equal("not");
  });
});

//missingChar
describe("missingChar function", () => {
  it("returns a string where the char at index n has been removed", () => {
    expect(missingChar("robert", 0)).to.equal("obert");
    expect(missingChar("robert", 1)).to.equal("rbert");
    expect(missingChar("robert", 5)).to.equal("rober");
    expect(missingChar("chocolate", 8)).to.equal("chocolat");
  });
});

//frontBack
describe("frontBack function", () => {
  it("returns a new string witch the first and last chars have been exchanged", () => {
    expect(frontBack("hello")).to.equal("oellh");
    expect(frontBack("a")).to.equal("a");
    expect(frontBack("ab")).to.equal("ba");
    expect(frontBack("silent")).to.equal("tilens");
    expect(frontBack("hello")).to.equal("oellh");
    expect(frontBack("")).to.equal("");
  });
});

//front3
describe("front3 function", () => {
  it("returns a str of the first 3 char of the provided str 3 times.  Whatever is provided if less than 3.", () => {
    expect(front3("ar")).to.equal("ararar");
    expect(front3("bar")).to.equal("barbarbar");
    expect(front3("robert")).to.equal("robrobrob");
    expect(front3("Chocolate")).to.equal("ChoChoCho");
    expect(front3("b")).to.equal("bbb");
    expect(front3("")).to.equal("");
  });
});

//backAround
describe("backAround function", () => {
  it("returns a string with the last character of the string added to the front and back of the string", () => {
    expect(backAround("arf")).to.equal("farff");
    expect(backAround("a")).to.equal("aaa");
    expect(backAround("barf")).to.equal("fbarff");
    expect(backAround("read")).to.equal("dreadd");
  });
});

//or35
describe("or35 function", () => {
  it("returns true if the given non-negative number is a multiple of 3 or a multiple of 5.", () => {
    expect(or35(3)).to.equal(true);
    expect(or35(5)).to.equal(true);
    expect(or35(6)).to.equal(true);
    expect(or35(15)).to.equal(true);
    expect(or35(2)).to.equal(false);
    expect(or35(4)).to.equal(false);
  });
});

describe("front22 function", () => {
  it("given a string, returns a string with the first 2 chars appended and prepended.", () => {
    expect(front22("hobert")).to.equal("hohobertho");
    expect(front22("bert")).to.equal("bebertbe");
    expect(front22("ha")).to.equal("hahaha");
    expect(front22("b")).to.equal("bbb");
    expect(front22("")).to.equal("");
  });
});

describe("startHi function", () => {
  it("Given a string, return true if the string starts with 'hi', otherwise false", () => {
    expect(startHi("hi")).to.equal(true);
    expect(startHi("hello there")).to.equal(false);
    expect(startHi("hi hello")).to.equal(true);
    expect(startHi("hihihi")).to.equal(true);
    expect(startHi("hahaha")).to.equal(false);
  });
});

describe("icyHot function", () => {
  it("returns true if one temp is below 0 and the other is above 100.", () => {
    expect(icyHot(-1, 100)).to.equal(false);
    expect(icyHot(-1, 101)).to.equal(true);
    expect(icyHot(0, 101)).to.equal(false);
    expect(icyHot(-100, 200)).to.equal(true);
    expect(icyHot(-50, 100)).to.equal(false);
    expect(icyHot(-50, -100)).to.equal(false);
    expect(icyHot(50, 100)).to.equal(false);
  });
});

describe("in1020 function", () => {
  it("returns true if either number is within the 10 to 20 range.", () => {
    expect(in1020(-2, 10)).to.equal(true);
    expect(in1020(-2, 21)).to.equal(false);
    expect(in1020(15, 20)).to.equal(true);
    expect(in1020(9, 21)).to.equal(false);
    expect(in1020(21, 8)).to.equal(false);
  });
});

describe("hasTeen function", () => {
  it("returns true if one of 3 int arguments is between 13-19 inclusive.", () => {
    expect(hasTeen(1, 2, 3)).to.equal(false);
    expect(hasTeen(1, 17, 18)).to.equal(true);
    expect(hasTeen(13, 15, 19)).to.equal(true);
    expect(hasTeen(12, 20, 21)).to.equal(false);
    expect(hasTeen(21, 22, 23)).to.equal(false);
    expect(hasTeen(-13, 2, -19)).to.equal(false);
  });
});

describe("loneTeen function", () => {
  it("returns true if one of two int args are in range 13-19 inclusive, else false", () => {
    expect(loneTeen(13, 14)).to.equal(false);
    expect(loneTeen(13, 1)).to.equal(true);
    expect(loneTeen(15, 20)).to.equal(true);
    expect(loneTeen(16, 18)).to.equal(false);
  });
});

describe("delDel function", () => {
  it("deletes del from a string if it appears at index 1, otherwise return unchanged str", () => {
    expect(delDel("idel")).to.equal("i");
    expect(delDel("infidel")).to.equal("infidel");
    expect(delDel("odel")).to.equal("o");
    expect(delDel("abc")).to.equal("abc");
    expect(delDel("adelpff")).to.equal("apff");
    expect(delDel("")).to.equal("");
  });
});

describe("mixStart function", () => {
  it("returns true if the given string begins with 'mix', except the m can be anything.", () => {
    expect(mixStart("mix")).to.equal(true);
    expect(mixStart("bix")).to.equal(true);
    expect(mixStart("tix")).to.equal(true);
    expect(mixStart("miz")).to.equal(false);
    expect(mixStart("wiz")).to.equal(false);
  });
});

describe("startOz function", () => {
  it("returns the first two chars of a string if present, only return o if it's the first char, and only return z if it's the second char.", () => {
    expect(startOz("obo")).to.equal("o");
    expect(startOz("ozWiz")).to.equal("oz");
    expect(startOz("tziki")).to.equal("z");
    expect(startOz("")).to.equal("");
    expect(startOz("zzzz")).to.equal("z");
  });
});

describe("intMax function", () => {
  it("returns the largest of 3 ints", () => {
    expect(intMax(1, 2, 3)).to.equal(3);
    expect(intMax(100, 200, 300)).to.equal(300);
    expect(intMax(-1, -2, -3)).to.equal(-1);
    expect(intMax(3, 2, 1)).to.equal(3);
    expect(intMax(0, 5, 10)).to.equal(10);
    expect(intMax(3, 3, 3)).to.equal(3);
  });
});
