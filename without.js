// Implement without which will return a subset of a given array, removing unwanted elements.
// Use assertArraysEqual to write test cases for various scenarios.

// Compare each element of the two arrays in order
// Determine if true or false
// If all true, return true
// If at least one is false, return false

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (arr1, arr2) => {
  console.log(eqArrays(arr1, arr2) === true ? `✅✅✅ Assertion Passed: ${arr1} === ${arr2}` : `🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
};

//  filterloop that creates new array
const without = (sourceArr, itemsToRemove) => {
  let result = sourceArr; // copying sourceArr so we don't change the original array
  for (let element of itemsToRemove)
    result = result.filter(itemInResults => (itemInResults !== element)); // remember that itemInResults is parameter referencing to items in results array
  return result;
};


const words = ["hello", "world", "lighthouse"];
assertArraysEqual((without(words, ["lighthouse"])), [ 'hello', 'world' ]); // => Assertion Passed

assertArraysEqual((without([1, 2, 3], [1, 3])), [2, 3]); // => Assertion Failed
assertArraysEqual((without(["1", "2", "3"], [1, 2, "3"])), ["1", "2"]); // => Assertion Passed

assertArraysEqual((without([1, 2, 3, 4], [1, 4])), [2, 3]); // => Assertion Passed
