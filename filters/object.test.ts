import { hasProp, hasProps } from "./object";

describe("object filters", () => {
  const someObjects = [
    { a: 0, b: 1 },
    { a: 5, b: 6 },
    { a: 7, b: 6 },
    { a: [], c: 10 },
    { d: "hello" },
  ];

  describe("hasProp", () => {
    it.each([
      {
        input: someObjects,
        propName: "a",
        expected: [
          { a: 0, b: 1 },
          { a: 5, b: 6 },
          { a: 7, b: 6 },
          { a: [], c: 10 },
        ],
      },
    ])(
      "returns objects that have a specific prop",
      ({ input, propName, expected }) => {
        expect(input.filter(hasProp(propName))).toEqual(expected);
      }
    );

    it.each([
      {
        input: someObjects,
        propName: "a",
        value: 5,
        expected: [{ a: 5, b: 6 }],
      },
    ])(
      "or objects that have a specific prop with a specific value",
      ({ input, propName, value, expected }) => {
        expect(input.filter(hasProp(propName, value))).toEqual(expected);
      }
    );
  });

  describe("hasProps", () => {
    it.each([
      {
        input: someObjects,
        propNames: ["a", "b"],
        expected: [
          { a: 0, b: 1 },
          { a: 5, b: 6 },
          { a: 7, b: 6 },
        ],
      },
    ])(
      "or objects that have a specific set of props",
      ({ input, propNames, expected }) => {
        expect(input.filter(hasProps(propNames))).toEqual(expected);
      }
    );

    it.each([
      {
        input: someObjects,
        propNames: ["a", "b"],
        values: [5, 6],
        expected: [{ a: 5, b: 6 }],
      },
    ])(
      "or objects that have a specific set of props and specific values",
      ({ input, propNames, values, expected }) => {
        expect(input.filter(hasProps(propNames, values))).toEqual(expected);
      }
    );
  });
});
