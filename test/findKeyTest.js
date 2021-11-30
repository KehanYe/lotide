const assert = require('chai').assert;
const findKey = require('../findKey');

describe("#findKey", () => {
  it("return 'noma' from list if stars is 2", () => {
    assert.strictEqual(findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 },
    }, x => x.stars === 2), 'noma');
  });
 
  let movies = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 },
  };

  it("return 'undefined' from 'movies' if stars is 5 ", () => {
    assert.strictEqual(findKey(movies, x => x.stars === 5), undefined);
  });

});