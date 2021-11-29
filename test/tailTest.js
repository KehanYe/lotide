const assertEqual = require('../assertEqual')
const tail = require('../tail')

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(words.length, 3); // original array should still have 3 elements!

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.join(' '), ["Lighthouse", "Labs"].join(' '));