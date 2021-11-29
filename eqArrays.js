// Problem: Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.
// InPut: 2 arrays and triple equals '===' operator
// Output: truth or false into assertEqaul


const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;   // check for array length
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) { // check for individual elements, one loop that applies to both array
      continue; // keep checking through loop
    } else {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;

