const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} === ${expected}`);
  }
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna", // flase
  "Fang", //  true
  "Kavith",
  "Jason", // true
  "Salima",
  "Fang", // true
  "Joe"
];

const countOnly = function(allItems, itemsToCount) {
  const results = {};

// inside the loop,
// increment the counter for each item:
// set a property with that string key to:
// the value that was already there (or zero if nothing there) with 1 added to it.
  for (const item of allItems) {
    // console.log(item);
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);