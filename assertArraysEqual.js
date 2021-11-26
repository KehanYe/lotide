// Compare each element of the two arrays in order
// Determine if true or false
// If all true, return true
// If at least one is false, return false

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false; // check if the array lengths are different
  for (let i = 0; i < arr1.length; i++) { // loop through elements in an array to each other
    if (arr1[i] === arr2[i]) {     // check whether the two elements of the array are equal
      continue;
    } else {
      return false;
    }
  }
  return true;
};
const assertArraysEqual = (arr1, arr2) => {
  console.log(eqArrays(arr1, arr2) === true ? `✅✅✅ Assertion Passed: ${arr1} === ${arr2}` : `🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
};

assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]); // => Assertion Passed
assertArraysEqual(['1', '2', '3',], [1, 2]); // => Assertion Failed
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
