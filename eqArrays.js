// Problem: Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.
// InPut: 2 arrays and triple equals '===' operator
// Output: truth or false into assertEqaul


const eqArrays = (actual, expected) => {
  if (actual.length !== expected.length) return false;   // check for array length
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] === expected[i]) { // check for individual elements, one loop that applies to both array
      continue; // keep checking through loop
    } else {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;

