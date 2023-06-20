import { isIn, isOneOf } from "./array";

describe("array filters", () => {
  describe("isOneOf / isIn", () => {
    it.each([
      { input: [1, 2, 3, 4, 3, 5, 2], array: [2, 3], expected: [2, 3, 3, 2] },
    ])(
      "returns true if an element is contained in the comparison array",
      ({ input, array, expected }) => {
        expect(input.filter(isOneOf(array))).toEqual(expected);
        expect(input.filter(isIn(array))).toEqual(expected);
      }
    );
  });
});
