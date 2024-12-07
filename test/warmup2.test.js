import { expect } from "chai";

import stringTimes from "../src/warmup2/stringTimes.js";

describe("stringTimes function", () => {
  it("returns a str of a given str n times in a new str", () => {
    expect(stringTimes("Hi", 4)).to.equal("HiHiHiHi");
    expect(stringTimes("Robert", 1)).to.equal("Robert");
    expect(stringTimes("Hi", 0)).to.equal("");
    expect(stringTimes("Hello", 3)).to.equal("HelloHelloHello");
  });
});
