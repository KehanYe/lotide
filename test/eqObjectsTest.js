const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {

  const obj1 = { name: "Kehan", location: "Canada"};
  const obj2 = {name: "KehanYe", location: "Canada"};
  const obj3 = {location: "Canada",name: "Kehan"};

  it("return flase when comparing obj1 and obj2", () => {
    assert.strictEqual(eqObjects(obj1, obj2), false);
  });

  it("return true when comparing obj1 and obj3", () => {
    assert.strictEqual(eqObjects(obj1, obj3), true);
  });

  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  const abc = { a: "1", b: "2", c: "3" };
  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  const cd2 = { c: "1", d: ["2", 3, 4] };

  it("return true when comparing ab and ba", () => {
    assert.strictEqual(eqObjects(ab, ba), true);
  });

  it("return false when comparing ab and abc", () => {
    assert.strictEqual(eqObjects(ab, abc), true);
  });

  it("return false when comparing cd and dc", () => {
    assert.strictEqual(eqObjects(cd, dc), true);
  });

  it("return false when comparing cd and cd2", () => {
    assert.strictEqual(eqObjects(cd, cd2), true);
  });
});