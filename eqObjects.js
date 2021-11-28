const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} === ${expected}`);
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

    if (!eqArrays(value1, value2)) { // if compared objects have arrays as values
      return false;
    } else if (value1 !== value2) { // if compared objects have primitive values
      return false;
    }
    return true;
  }
  
};


const obj1 = {
  name: "Kehan",
  location: "Canada"
};

const obj2 = {
  name: "KehanYe",
  location: "Canada"
};

const obj3 = {
  location: "Canada",
  name: "Kehan"
};

console.log("test1"), assertEqual(eqObjects(obj1, obj1), true); //true
console.log("test2"), assertEqual(eqObjects(obj1, obj2), true); //false
console.log("test3"), assertEqual(eqObjects(obj1, obj3), true); //true

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log("test4"), assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log("test5"), assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log("test6"), assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log("test7"), assertEqual(eqObjects(cd, cd2), false); // => false