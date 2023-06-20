import {
  isInteger,
  isNegative,
  isNegativeOrZero,
  isNumber,
  isPositive,
  isPositiveOrZero,
  isRound,
} from "./number";

describe("number filters", () => {
  const someNumbers = [0, 1, 1.1, 1.9, -2, -2.9, 3.0, -4.0];
  const someElements = [[], {}, "hello", 1, -2.45, 10_000_001, 0xff0000];

  describe("isRound", () => {
    it.each([{ input: someNumbers, expected: [0, 1, -2, 3, -4] }])(
      "returns round numbers",
      ({ input, expected }) => {
        expect(input.filter(isRound)).toEqual(expected);
      }
    );
  });
  describe("isInteger", () => {
    it.each([{ input: someNumbers, expected: [0, 1, -2, 3, -4] }])(
      "returns integer numbers",
      ({ input, expected }) => {
        expect(input.filter(isInteger)).toEqual(expected);
      }
    );
  });

  describe("isNumber", () => {
    it.each([
      { input: someElements, expected: [1, -2.45, 10_000_001, 0xff0000] },
    ])("returns numbers", ({ input, expected }) => {
      expect(input.filter(isNumber)).toEqual(expected);
    });
  });

  describe("isPositive", () => {
    it.each([{ input: someNumbers, expected: [1, 1.1, 1.9, 3.0] }])(
      "returns positive numbers",
      ({ input, expected }) => {
        expect(input.filter(isPositive)).toEqual(expected);
      }
    );
  });

  describe("isPositiveOrZero", () => {
    it.each([{ input: someNumbers, expected: [0, 1, 1.1, 1.9, 3.0] }])(
      "returns positive numbers",
      ({ input, expected }) => {
        expect(input.filter(isPositiveOrZero)).toEqual(expected);
      }
    );
  });

  describe("isNegative", () => {
    it.each([{ input: someNumbers, expected: [-2, -2.9, -4.0] }])(
      "returns negative numbers",
      ({ input, expected }) => {
        expect(input.filter(isNegative)).toEqual(expected);
      }
    );
  });

  describe("isNegativeOrZero", () => {
    it.each([{ input: someNumbers, expected: [0, -2, -2.9, -4.0] }])(
      "returns negative numbers",
      ({ input, expected }) => {
        expect(input.filter(isNegativeOrZero)).toEqual(expected);
      }
    );
  });

  describe("isZero", () => {
    it.each([{ input: someNumbers, expected: [0, -2, -2.9, -4.0] }])(
      "returns negative numbers",
      ({ input, expected }) => {
        expect(input.filter(isNegativeOrZero)).toEqual(expected);
      }
    );
  });
});
