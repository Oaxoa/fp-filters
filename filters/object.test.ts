import { hasProp, hasProps, sameProp, sameProps } from "./object";

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
    /**
     * { a: 0, b: 1 },
     *     { a: 5, b: 6 },
     *     { a: 7, b: 6 },
     *     { a: [], c: 10 },
     *     { d: "hello" },
     */
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

  describe("sameProp", () => {
    it.each([
      {
        input: someObjects,
        comparisonObject: { a: 5, b: 99, z: -1 },
        propertyName: "a",
        expected: [{ a: 5, b: 6 }],
      },
      {
        input: someObjects,
        comparisonObject: { a: 5, b: 99, z: -1 },
        propertyName: "b",
        expected: [],
      },
    ])(
      "checks that the iteratee has the a property with the same value as a comparison object",
      ({ input, comparisonObject, propertyName, expected }) => {
        expect(input.filter(sameProp(comparisonObject, propertyName))).toEqual(
          expected
        );
      }
    );
  });

  describe("sameProp", () => {
    it.each([
      {
        input: someObjects,
        comparisonObject: { a: 5, b: 6, z: -1 },
        propertyNames: ["a"],
        expected: [{ a: 5, b: 6 }],
      },
      {
        input: someObjects,
        comparisonObject: { a: 5, b: 6, z: -1 },
        propertyNames: ["a", "b"],
        expected: [{ a: 5, b: 6 }],
      },
      {
        input: someObjects,
        comparisonObject: { a: 5, b: 99, z: -1 },
        propertyNames: ["a", "b"],
        expected: [],
      },
      {
        input: someObjects,
        comparisonObject: { a: 5, z: 99 },
        propertyNames: ["a", "z"],
        expected: [],
      },
    ])(
      "checks that the iteratee has a set of properties with the same value as a comparison object",
      ({ input, comparisonObject, propertyNames, expected }) => {
        expect(
          input.filter(sameProps(comparisonObject, propertyNames))
        ).toEqual(expected);
      }
    );
  });
});
