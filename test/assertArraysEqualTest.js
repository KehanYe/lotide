const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]); // => should Pass
assertArraysEqual(['1', '2', '3',], [1, 2]); // => Should Fail
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should Pass
