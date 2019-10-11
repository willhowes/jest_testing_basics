const functions = require("./functions");

// toBe - is for primative types (like integers. will not work on objects. Use toEqual instead for objects)
test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

// not
test("Adds 2 + 2 to not equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// toBeNull
test("Should be null", () => {
  expect(functions.isNull()).toBe(null);
});

// toBeFalsy
test("Should be falsey", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

test("User should be Will howes object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Will",
    lastName: "Howes"
  });
});
