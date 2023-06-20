import { not } from "./utils";

describe("utils", () => {
  const greaterThan = (n: number) => (arg: number) => arg > n;
  const greaterThan5 = greaterThan(5);

  describe("not", () => {
    const someNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const upTo5 = [1, 2, 3, 4, 5];

    it.each([{ input: someNumbers, expected: upTo5 }])(
      "it is able to flip a simple filter",
      ({ input, expected }) => {
        expect(input.filter(not(greaterThan5))).toEqual(expected);
      }
    );
    it.each([{ input: someNumbers, expected: upTo5 }])(
      "it can also flip higher order functions",
      ({ input, expected }) => {
        // @ts-ignore
        expect(input.filter(not(greaterThan)(5))).toEqual(expected);
      }
    );
  });
});
