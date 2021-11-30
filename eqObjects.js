const eqArrays =  require('./eqArrays');

// comparing elements in side objects, without strictEqual by accessing their elements VS deepEqual

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


module.exports = eqObjects;