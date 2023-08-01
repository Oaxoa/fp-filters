import {
  clampLength,
  hasLength,
  hasMaximumLength,
  hasMinimumLength,
  isEmpty,
  isNotEmpty,
} from "./length.js";

describe("length filters", () => {
  const input = [[], [1], [1, 2], [1, 2, 3], "", "a", "ab", "abc"];
  describe("isEmpty", () => {
    it.each([{ input, expected: [[], ""] }])(
      "returns empty strings or arrays",
      ({ input, expected }) => {
        expect(input.filter(isEmpty)).toEqual(expected);
      }
    );
  });
  describe("isNotEmpty", () => {
    it.each([{ input, expected: [[1], [1, 2], [1, 2, 3], "a", "ab", "abc"] }])(
      "returns empty strings or arrays",
      ({ input, expected }) => {
        expect(input.filter(isNotEmpty)).toEqual(expected);
      }
    );
  });

  describe("hasLength", () => {
    it.each([{ input, length: 2, expected: [[1, 2], "ab"] }])(
      "returns empty strings or arrays",
      ({ input, length, expected }) => {
        expect(input.filter(hasLength(length))).toEqual(expected);
      }
    );
  });

  describe("hasMinimumLength", () => {
    it.each([{ input, length: 2, expected: [[1, 2], [1, 2, 3], "ab", "abc"] }])(
      "returns empty strings or arrays",
      ({ input, length, expected }) => {
        expect(input.filter(hasMinimumLength(length))).toEqual(expected);
      }
    );
  });

  describe("hasMaximumLength", () => {
    it.each([{ input, length: 2, expected: [[], [1], [1, 2], "", "a", "ab"] }])(
      "returns empty strings or arrays",
      ({ input, length, expected }) => {
        expect(input.filter(hasMaximumLength(length))).toEqual(expected);
      }
    );
  });

  describe("clampLength", () => {
    it.each([{ input, min: 1, max: 2, expected: [[1], [1, 2], "a", "ab"] }])(
      "returns empty strings or arrays",
      ({ input, min, max, expected }) => {
        expect(input.filter(clampLength(min, max))).toEqual(expected);
      }
    );
  });
});
