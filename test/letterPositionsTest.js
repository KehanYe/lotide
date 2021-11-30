const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {

  it("return letter position of 'K' in 'Kanye' as [0]", () => {
    assert.deepEqual(letterPositions("Kanye").K, [0]);
  });

  it("return letter position of 'T' in 'Kanye' as undefined", () => {
    assert.deepEqual(letterPositions("Kanye").T, undefined);
  });

  it("return letter position of 'a' in 'Kaaa nye' as [1, 2, 3]", () => {
    assert.deepEqual(letterPositions("Kaaa nye").a, [1, 2, 3]);
  });

});
