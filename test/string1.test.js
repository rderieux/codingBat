import { expect } from "chai";

import helloName from "../src/string1/helloName.js";

//helloName
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
