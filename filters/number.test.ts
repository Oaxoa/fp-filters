import {
  gt,
  gte,
  isBetween,
  isEven,
  isInteger,
  isNegative,
  isNegativeOrZero,
  isNotZero,
  isPositive,
  isPositiveOrZero,
  isRound,
  isZero,
  lt,
  lte,
} from "./number.js";

describe("number filters", () => {
  const someNumbers = [0, 1, 1.1, 1.9, -2, -2.9, 3.0, -4.0];

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

  describe("gt", () => {
    it.each([{ input: someNumbers, expected: [1.1, 1.9, 3] }])(
      "returns numbers greater than the argument",
      ({ input, expected }) => {
        expect(input.filter(gt(1))).toEqual(expected);
      }
    );
  });

  describe("gte", () => {
    it.each([{ input: someNumbers, expected: [1, 1.1, 1.9, 3] }])(
      "returns numbers greater than or equal to the argument",
      ({ input, expected }) => {
        expect(input.filter(gte(1))).toEqual(expected);
      }
    );
  });

  describe("lt", () => {
    it.each([{ input: someNumbers, expected: [0, -2, -2.9, -4] }])(
      "returns numbers lower than the argument",
      ({ input, expected }) => {
        expect(input.filter(lt(1))).toEqual(expected);
      }
    );
  });

  describe("lte", () => {
    it.each([{ input: someNumbers, expected: [0, 1, -2, -2.9, -4] }])(
      "returns numbers lower than or equal to the argument",
      ({ input, expected }) => {
        expect(input.filter(lte(1))).toEqual(expected);
      }
    );
  });

  describe("isEven", () => {
    it.each([{ input: someNumbers, expected: [0, -2, -4.0] }])(
      "returns even numbers",
      ({ input, expected }) => {
        expect(input.filter(isEven)).toEqual(expected);
      }
    );
  });

  describe("isOdd", () => {
    it.each([{ input: someNumbers, expected: [0, -2, -4.0] }])(
      "returns even numbers",
      ({ input, expected }) => {
        expect(input.filter(isEven)).toEqual(expected);
      }
    );
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
    it.each([{ input: someNumbers, expected: [0] }])(
      "returns zeros",
      ({ input, expected }) => {
        expect(input.filter(isZero)).toEqual(expected);
      }
    );
  });

  describe("isNotZero", () => {
    it.each([
      { input: someNumbers, expected: [1, 1.1, 1.9, -2, -2.9, 3.0, -4.0] },
    ])("returns non zeros", ({ input, expected }) => {
      expect(input.filter(isNotZero)).toEqual(expected);
    });
  });

  describe("isBetween", () => {
    it.each([
      {
        input: someNumbers,
        min: -2,
        max: 3,
        expected: [0, 1, 1.1, 1.9, -2, 3.0],
      },
    ])("returns numbers within a range", ({ input, min, max, expected }) => {
      expect(input.filter(isBetween(min, max))).toEqual(expected);
    });
  });
});
