// Compare each element of the two arrays in order
// Determine if true or false
// If all true, return true
// If at least one is false, return false

const eqArrays = require('./eqArrays');

const assertArraysEqual = (arr1, arr2) => {
  console.log(eqArrays(arr1, arr2) === true ? `✅✅✅ Assertion Passed: ${arr1} === ${arr2}` : `🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
};

module.exports = assertArraysEqual;