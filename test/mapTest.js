const map = require('../index').map;
const assert = require("chai").assert;

describe("#map", () => {
  
  const words = ["ground", "control", "to", "major", "tom"];

  const results2 = map(words, word => word.length);
  const results3 = map(words, word => word.length * 2);

  it("return 'g', 'c', 't', 'm', 't' from list of words", () => {
    console.log(map(words, word => word[0]));
    assert.deepEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
  });

  it("return [6, 7, 2, 5, 3] from results2", () => {
    assert.deepEqual(results2, [6, 7, 2, 5, 3]);
  });
  
  it("return [12, 14, 4, 10, 6] from results3", () => {
    assert.deepEqual(results3, [12, 14, 4, 10, 6]);
  });

});
