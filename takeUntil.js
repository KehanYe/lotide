// "slice of the array with elements taken from the beginning."
//It should keep going until the callback/predicate returns a truthy value.
// To keep things simple, the callback should only be provided one value: The item in the array.


const takeUntil = function(array, callback) {

  let results = [];
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      results.push(array[i]);
    } else {
      return results;
    }
  } console.log("hello");
  return results;
};

// EXPECTED INPUT
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5, 7, 8, 8];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

const data3 = [1, 1, 1, 2, 3];
const results3 = takeUntil(data3, x => x === 2);
console.log(results3);

// EXPECTED OUTPUT
// [ 1, 2, 5, 7, 2 ]
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]
// [1, 1, 1]