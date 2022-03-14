// Compare each element of the two arrays in order
// Determine if true or false
// If all true, return true
// If at least one is false, return false

const eqArrays = require('./eqArrays');

const assertArraysEqual = (actual, expected) => {
  console.log(eqArrays(actual, expected) === true ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

module.exports = assertArraysEqual;