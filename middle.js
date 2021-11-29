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

module.exports = middle;