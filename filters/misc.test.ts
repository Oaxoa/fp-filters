import {
  all,
  is,
  isInstanceOf,
  isNot,
  isNotInstanceOf,
  isNotOfType,
  isOfType,
  none,
} from "./misc";

describe("misc filters", () => {
  const someElements = [1, 2, 3, "hello", [], [1, 2], {}, { a: 1 }, 3];

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
    it.each([{ input: someElements, expected: [3, 3] }])(
      "returns elements that have a specific value",
      ({ input, expected }) => {
        expect(input.filter(is(3))).toEqual(expected);
      }
    );
  });

  describe("isNot", () => {
    it.each([
      {
        input: someElements,
        expected: [1, 2, "hello", [], [1, 2], {}, { a: 1 }],
      },
    ])("returns elements that have a specific value", ({ input, expected }) => {
      // @ts-ignore
      expect(input.filter(isNot(3))).toEqual(expected);
    });
  });

  describe("isInstanceOf", () => {
    it.each([
      {
        input: someElements,
        classReference: Array,
        expected: [[], [1, 2]],
      },
      {
        input: someElements,
        classReference: Object,
        expected: [[], [1, 2], {}, { a: 1 }],
      },
    ])(
      "returns elements that are instance of a specific class",
      ({ input, classReference, expected }) => {
        expect(input.filter(isInstanceOf(classReference))).toEqual(expected);
      }
    );
  });
  describe("isNotInstanceOf", () => {
    it.each([
      {
        input: someElements,
        classReference: Array,
        expected: [1, 2, 3, "hello", {}, { a: 1 }, 3],
      },
      {
        input: someElements,
        classReference: Object,
        expected: [1, 2, 3, "hello", 3],
      },
    ])(
      "returns elements that are not instance of a specific class",
      ({ input, classReference, expected }) => {
        // @ts-ignore
        expect(input.filter(isNotInstanceOf(classReference))).toEqual(expected);
      }
    );
  });

  describe("isOfType", () => {
    it.each([
      {
        input: someElements,
        type: "number",
        expected: [1, 2, 3, 3],
      },
      {
        input: someElements,
        type: "object",
        expected: [[], [1, 2], {}, { a: 1 }],
      },
    ])(
      "returns elements that whom type is the argument",
      ({ input, type, expected }) => {
        expect(input.filter(isOfType(type))).toEqual(expected);
      }
    );
  });
  describe("isNotOfType", () => {
    it.each([
      {
        input: someElements,
        type: "number",
        expected: ["hello", [], [1, 2], {}, { a: 1 }],
      },
      {
        input: someElements,
        type: "object",
        expected: [1, 2, 3, "hello", 3],
      },
    ])(
      "returns elements that whom type is the argument",
      ({ input, type, expected }) => {
        // @ts-ignore
        expect(input.filter(isNotOfType(type))).toEqual(expected);
      }
    );
  });
});
