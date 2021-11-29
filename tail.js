const tail = function(arr) {
  return arr.slice(-1)[0]; // [0] ensures that the actual element (aka string) is returned, not an array with the answer
};

module.exports = tail;