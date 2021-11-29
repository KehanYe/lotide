const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should Pass
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should Pass
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => undefined thus should Fail
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => should Fail