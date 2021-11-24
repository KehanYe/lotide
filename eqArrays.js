// Problem: Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.
// InPut: 2 arrays and triple equals '===' operator
// Output: truth or false into assertEqaul

// Examples
// eqArrays([1, 2, 3], [1, 2, 3]) // => true
// eqArrays([1, 2, 3], [3, 2, 1]) // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;   // check for array length
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) { // check for individual elements
      continue; // keep checking through loop
    } else {
      return false;
    }
  }
  return true;
};

const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} === ${expected}`);
  }
};


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS



