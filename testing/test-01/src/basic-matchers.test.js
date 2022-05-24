const strictValue = require("./basic-matchers.js");
// Test structure
describe("Basic matchers function", () => {
  it(" equality  ", () => {
    expect(strictValue(42)).toBe(42); // Strict equality (===)
    expect(strictValue(42)).not.toBe(); // Strick Equality (!==)
    expect([1, 2]).toEqual([1, 2]); // Deep equality
    expect({ a: undefined, b: 2 }).not.toStrictEqual({ b: 2 });
  });
});
