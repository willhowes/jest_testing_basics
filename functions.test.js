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

// toEqual
test("User should be Will howes object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Will",
    lastName: "Howes"
  });
});

// Less than and greater than
test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 700;
  const total = load1 + load2;
  expect(total).toBeLessThan(1600);
  expect(total).toBeLessThanOrEqual(1600);
  expect(total).toBeGreaterThan(1000);
  expect(total).toBeGreaterThanOrEqual(1500);
});

// Regex
test("There is no I in team", () => {
  expect("team").not.toMatch(/I/i);
});

// Array
test("Admin should be in username", () => {
  usernames = ["john", "karen", "admin"];
  expect(usernames).toContain("admin");
});

// Working with async data - the assertions and return v important
// with those the the test will pass regardless of the expectation

// Promise
// test('User fetched names should be "Leanne Graham"', () => {
//   expect.assertions(1);
//   return functions.fetchUser().then(data => {
//     expect(data.name).toEqual("Leanne Graham");
//   });
// });

// Async Await
test('User fetched names should be "Leanne Graham"', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
