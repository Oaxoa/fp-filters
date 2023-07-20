import { evenIndex, everyN, oddIndex, pattern } from "./position.js";

describe("position", () => {
  const someNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  describe("pattern", () => {
    it.each([
      {
        input: someNumbers,
        p: [true, true, false],
        expected: [1, 2, 4, 5, 7, 8, 10],
      },
      {
        input: someNumbers,
        p: [true, true, false],
        spreadP: true,
        expected: [1, 2, 4, 5, 7, 8, 10],
      },
    ])(
      "returns elements based on their index",
      ({ input, p, spreadP, expected }) => {
        expect(input.filter(spreadP ? pattern(...p) : pattern(p))).toEqual(
          expected
        );
      }
    );
  });
  describe("oddIndex", () => {
    it.each([{ input: someNumbers, expected: [2, 4, 6, 8, 10] }])(
      "returns elements that have a odd index",
      ({ input, expected }) => {
        expect(input.filter(oddIndex)).toEqual(expected);
      }
    );
  });
  describe("evenIndex", () => {
    it.each([{ input: someNumbers, expected: [1, 3, 5, 7, 9] }])(
      "returns elements that have an even index",
      ({ input, expected }) => {
        expect(input.filter(evenIndex)).toEqual(expected);
      }
    );
  });

  describe("everyN", () => {
    it.each([
      {
        input: someNumbers,
        every: 2,
        offset: undefined,
        expected: [1, 3, 5, 7, 9],
      },
      { input: someNumbers, every: 3, offset: 1, expected: [2, 5, 8] },
    ])(
      "returns elements that have an even index",
      ({ input, every, offset, expected }) => {
        expect(input.filter(everyN(every, offset))).toEqual(expected);
      }
    );
  });
});
