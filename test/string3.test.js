import { expect } from "chai";

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

    describe("returns the correct boolean", () => {
      it("counts the number of words ending in 'y' or 'z'.  If there is not an alphabetic letter immediately following it.", () => {
        expect(countYZ("fez day")).to.equal(2);
        expect(countYZ("day fez")).to.equal(2);
        expect(countYZ("day fyyyz")).to.equal(2);
        expect(countYZ("boo hoo")).to.equal(0);
        expect(countYZ("once in a lifetime")).to.equal(0);
        expect(countYZ("y2bz")).to.equal(2);
        expect(countYZ("aaz yyz my")).to.equal(3);
        expect(countYZ("zxyx")).to.equal(3);
      });
    });
  });
});
