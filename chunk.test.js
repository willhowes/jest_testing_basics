const chunkArray = require("./chunk");

test("chunkArray function exits", () => {
  expect(chunkArray).toBeDefined();
});

test("Chunk an array of 10 values with the length of 2", () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const len = 2;
  expect(chunkArray(numbers, len)).toEqual([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10]
  ]);
});
