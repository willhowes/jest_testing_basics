const isAnagram = require("./anagram");

test("isAnagram function exits", () => {
  expect(typeof isAnagram).toEqual("function");
});

// Something I have noticed - if you use toBeTruthy of toBeFalsy with the below it seems to pass regardless
// But when you use toEqual(true) or toEqual(false) it correctly evaluates

// Example: this will pass regardless of the fact that is should return false:
test('"cinema" is an anagram of "iceman"', () => {
  expect(isAnagram("cinema", "icman")).toBeTruthy;
});

// Likewise this will pass regardless of the fact that it should be truthy not falsy
test('"cinema" is an anagram of "iceman"', () => {
  expect(isAnagram("cinema", "iceman")).toBeFalsy;
});

test('"cinema" is an anagram of "iceman"', () => {
  expect(isAnagram("cinema", "iceman")).toEqual(true);
});

test('"hello" is NOT an anagram of "Aloha"', () => {
  expect(isAnagram("hello", "aloha")).toEqual(false);
});

console.log(isAnagram("yes", "no"));
