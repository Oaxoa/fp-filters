import { not, and, or } from "./utils";
import { gt, isEven } from "./filters/number";

describe("utils", () => {
  const someNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  describe("not", () => {
    const upTo5 = [1, 2, 3, 4, 5];

    it.each([{ input: someNumbers, expected: upTo5 }])(
      "it is able to flip a simple filter",
      ({ input, expected }) => {
        expect(input.filter(not(gt(5)))).toEqual(expected);
      }
    );
    it.each([{ input: someNumbers, expected: upTo5 }])(
      "it can also flip higher order functions",
      ({ input, expected }) => {
        // @ts-ignore
        expect(input.filter(not(gt)(5))).toEqual(expected);
      }
    );
  });

  describe("and", () => {
    it.each([{ input: someNumbers, expected: [6, 8] }])(
      "combines more than one filter where all must be true",
      ({ input, expected }) => {
        // @ts-ignore
        expect(input.filter(and(isEven, gt(5)))).toEqual(expected);
      }
    );
  });

  describe("or", () => {
    it.each([{ input: someNumbers, expected: [2, 4, 6, 7, 8, 9] }])(
      "combines more than one filter where at least one must be true",
      ({ input, expected }) => {
        // @ts-ignore
        expect(input.filter(or(isEven, gt(5)))).toEqual(expected);
      }
    );
  });
});
