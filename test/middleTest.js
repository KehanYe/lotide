const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');


const Result = middle([1, 2, 3, 4]);
const Expected = [2, 3];
assertArraysEqual(Result, Expected); // => should PASS

assertArraysEqual(middle([1, 2, 3]), [2]); // => should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5]), [2]); // => should FAIL
assertArraysEqual(middle([1, 2, 3, 4, 4, 5, 6, 7]), [4, 4]); // => should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 10]), []); // => should FAIL