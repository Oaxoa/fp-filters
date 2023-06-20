import { all, is, isInstanceOf, isNot, none } from "./misc";

describe("misc filters", () => {
  const someElements = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    5,
    "hello",
    [],
    [1, 2],
    {},
    { a: 1 },
  ];

  describe("all", () => {
    it.each([{ input: someElements, expected: someElements }])(
      "returns all elements",
      ({ input, expected }) => {
        expect(input.filter(all)).toEqual(expected);
      }
    );
  });

  describe("none", () => {
    it.each([{ input: someElements, expected: [] }])(
      "returns no elements",
      ({ input, expected }) => {
        expect(input.filter(none)).toEqual(expected);
      }
    );
  });

  describe("is", () => {
    it.each([{ input: someElements, expected: [5, 5] }])(
      "returns elements that have a specific value",
      ({ input, expected }) => {
        expect(input.filter(is(5))).toEqual(expected);
      }
    );
  });

  describe("isNot", () => {
    it.each([
      {
        input: someElements,
        expected: [1, 2, 3, 4, 6, 7, 8, 9, "hello", [], [1, 2], {}, { a: 1 }],
      },
    ])("returns elements that have a specific value", ({ input, expected }) => {
      // @ts-ignore
      expect(input.filter(isNot(5))).toEqual(expected);
    });
  });

  describe("isInstanceOf", () => {
    it.each([
      {
        input: someElements,
        classReference: Array,
        expected: [[], [1, 2]],
      },
    ])(
      "returns elements that are instance of a specific class",
      ({ input, classReference, expected }) => {
        expect(input.filter(isInstanceOf(classReference))).toEqual(expected);
      }
    );
  });
});
