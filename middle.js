//assertArraysEqual - TEST/ASSERTION FUNCTIONS

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



// ACTUAL FUNCTION
const middle = function(arr1) {
  if (arr1.length <= 2) {
    return [];
  }
  let middle  =  arr1.length / 2;
  let mid = Math.floor(middle);
  if (arr1.length % 2 === 0) {
    return arr1.splice(mid - 1, 2);
  } else {
    return arr1.splice(mid, 1);
  }
};

// TEST CODE
const Result = middle([1, 2, 3, 4]);
const Expected = [2, 3];
assertArraysEqual(Result, Expected); // => should Passed
assertArraysEqual(middle([1, 2, 3]), [2]); // => should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5]), [2]); // => should FAIL
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]); // => should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 10]), [4, 5]); // => should PASS
//eqArrays - I don't think we needed this??
/*
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

const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} === ${expected}`);
  }
};
*/