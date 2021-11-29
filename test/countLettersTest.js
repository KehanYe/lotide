const assert = require('chai').assert;
const countLetters = require("../countLetters");

describe("#countLetters", () => {

  it("returns 3 for 'U' in 'YEZUUS'", () => {
    assert.strictEqual((countLetters("YEZUUUS"))["U"], 3);
  });

  it("returns 1 for u in YEZUUS", () => {
    assert.strictEqual((countLetters("YEZUuUS"))["u"], 1);
  });

  it("returns 1 for 'h' in 'LHL'", () => {
    assert.strictEqual((countLetters('LHL'))['H'], 1);
  });

  it("returns 1 for 'h' in lighthouse in the house", () => {
    assert.strictEqual((countLetters('lighthouse in the house'))['u'], 2);
  });

});