const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line, node to visualize code as string
    if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

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

const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object1);
  
  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const keys of keys1) {
    let value1 = object1[keys];
    let value2 = object2[keys];

    if (!eqArrays(value1, value2)) { // if compared objects have arrays as values - references eqArrays functions
      return false;
    } else if (value1 !== value2) { // if compared objects have primitive values
      return false;
    }
    return true;
  }
  
};

//test code

const obj1 = {
  name: "Kevin",
  location: "Canada"
};

const obj2 = {
  name: "Devin",
  location: "Canada"
};

const obj3 = {
  location: "Canada",
  name: "Kevin"
};

assertObjectsEqual(eqObjects(obj1, obj1), true); //true
assertObjectsEqual(eqObjects(obj1, obj2), true); //false
assertObjectsEqual(eqObjects(obj1, obj3), true); //true

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(eqObjects(cd, cd2), false); // => false