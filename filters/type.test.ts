import {
  isBoolean,
  isNotBoolean,
  isNotNumber,
  isNotString,
  isNumber,
  isString,
  isInstanceOf,
  isNotInstanceOf,
  isNotOfType,
  isOfType,
  isObject,
  isNotArray,
  isArray,
  isNotObject,
  isUndefined,
  isNotNull,
  isNotUndefined,
  isNull,
  isNotNaN,
  isNil,
  isNotNil,
} from "./type.js";

describe("type filters", () => {
  const someElements = [
    1,
    2,
    true,
    false,
    "true",
    "false",
    "hello",
    [],
    [1, 2],
    {},
    { a: 1 },
    undefined,
    null,
    NaN,
  ];

  describe("isOfType", () => {
    it.each([
      {
        input: someElements,
        type: "number",
        expected: [1, 2, NaN],
      },
      {
        input: someElements,
        type: "object",
        expected: [[], [1, 2], {}, { a: 1 }, null],
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
        expected: [
          true,
          false,
          "true",
          "false",
          "hello",
          [],
          [1, 2],
          {},
          { a: 1 },
          undefined,
          null,
        ],
      },
      {
        input: someElements,
        type: "object",
        expected: [1, 2, true, false, "true", "false", "hello", undefined, NaN],
      },
    ])(
      "returns elements that whom type is the argument",
      ({ input, type, expected }) => {
        // @ts-ignore
        expect(input.filter(isNotOfType(type))).toEqual(expected);
      }
    );
  });

  describe("isBoolean", () => {
    it.each([
      {
        input: someElements,
        expected: [true, false],
      },
    ])("returns boolean values", ({ input, expected }) => {
      expect(input.filter(isBoolean)).toEqual(expected);
    });
  });

  describe("isNotBoolean", () => {
    it.each([
      {
        input: someElements,
        expected: [
          1,
          2,
          "true",
          "false",
          "hello",
          [],
          [1, 2],
          {},
          { a: 1 },
          undefined,
          null,
          NaN,
        ],
      },
    ])("returns non-boolean values", ({ input, expected }) => {
      expect(input.filter(isNotBoolean)).toEqual(expected);
    });
  });

  describe("isString", () => {
    it.each([
      {
        input: someElements,
        expected: ["true", "false", "hello"],
      },
    ])("returns strings", ({ input, expected }) => {
      expect(input.filter(isString)).toEqual(expected);
    });
  });

  describe("isNotString", () => {
    it.each([
      {
        input: someElements,
        expected: [
          1,
          2,
          true,
          false,
          [],
          [1, 2],
          {},
          { a: 1 },
          undefined,
          null,
          NaN,
        ],
      },
    ])("returns non-strings", ({ input, expected }) => {
      expect(input.filter(isNotString)).toEqual(expected);
    });
  });

  describe("isNumber", () => {
    it.each([
      {
        input: someElements,
        expected: [1, 2, NaN],
      },
    ])("returns numbers", ({ input, expected }) => {
      expect(input.filter(isNumber)).toEqual(expected);
    });
  });

  describe("isNotNumber", () => {
    it.each([
      {
        input: someElements,
        expected: [
          true,
          false,
          "true",
          "false",
          "hello",
          [],
          [1, 2],
          {},
          { a: 1 },
          undefined,
          null,
        ],
      },
    ])("returns non-numbers", ({ input, expected }) => {
      expect(input.filter(isNotNumber)).toEqual(expected);
    });
  });

  describe("isObject", () => {
    it.each([
      {
        input: someElements,
        expected: [[], [1, 2], {}, { a: 1 }, null],
      },
    ])("returns objects (typeof based)", ({ input, expected }) => {
      expect(input.filter(isObject)).toEqual(expected);
    });
  });

  describe("isNotObject", () => {
    it.each([
      {
        input: someElements,
        expected: [1, 2, true, false, "true", "false", "hello", undefined, NaN],
      },
    ])("returns non-objects (typeof based)", ({ input, expected }) => {
      expect(input.filter(isNotObject)).toEqual(expected);
    });
  });

  describe("isArray", () => {
    it.each([
      {
        input: someElements,
        expected: [[], [1, 2]],
      },
    ])("returns arrays", ({ input, expected }) => {
      expect(input.filter(isArray)).toEqual(expected);
    });
  });

  describe("isNotArray", () => {
    it.each([
      {
        input: someElements,
        expected: [
          1,
          2,
          true,
          false,
          "true",
          "false",
          "hello",
          {},
          { a: 1 },
          undefined,
          null,
          NaN,
        ],
      },
    ])("returns non-arrays", ({ input, expected }) => {
      expect(input.filter(isNotArray)).toEqual(expected);
    });
  });

  describe("isNotArray", () => {
    it.each([
      {
        input: someElements,
        expected: [
          1,
          2,
          true,
          false,
          "true",
          "false",
          "hello",
          {},
          { a: 1 },
          undefined,
          null,
          NaN,
        ],
      },
    ])("returns non-arrays", ({ input, expected }) => {
      expect(input.filter(isNotArray)).toEqual(expected);
    });
  });
  describe("isUndefined", () => {
    it.each([{ input: someElements, expected: [undefined] }])(
      "returns undefined elements",
      ({ input, expected }) => {
        expect(input.filter(isUndefined)).toEqual(expected);
      }
    );
  });

  describe("isNotUndefined", () => {
    it.each([
      {
        input: someElements,
        expected: [
          1,
          2,
          true,
          false,
          "true",
          "false",
          "hello",
          [],
          [1, 2],
          {},
          { a: 1 },
          null,
          NaN,
        ],
      },
    ])("returns non-undefined elements", ({ input, expected }) => {
      expect(input.filter(isNotUndefined)).toEqual(expected);
    });
  });
  describe("isNull", () => {
    it.each([{ input: someElements, expected: [null] }])(
      "returns null elements",
      ({ input, expected }) => {
        expect(input.filter(isNull)).toEqual(expected);
      }
    );
  });

  describe("isNotNull", () => {
    it.each([
      {
        input: someElements,
        expected: [
          1,
          2,
          true,
          false,
          "true",
          "false",
          "hello",
          [],
          [1, 2],
          {},
          { a: 1 },
          undefined,
          NaN,
        ],
      },
    ])("returns non-undefined elements", ({ input, expected }) => {
      expect(input.filter(isNotNull)).toEqual(expected);
    });
  });

  describe("isNil", () => {
    it.each([{ input: someElements, expected: [undefined, null] }])(
      "returns nil (nullable) elements",
      ({ input, expected }) => {
        expect(input.filter(isNil)).toEqual(expected);
      }
    );
  });

  describe("isNotNil", () => {
    it.each([
      {
        input: someElements,
        expected: [
          1,
          2,
          true,
          false,
          "true",
          "false",
          "hello",
          [],
          [1, 2],
          {},
          { a: 1 },
          NaN,
        ],
      },
    ])("returns non-nil (non-nullable) elements", ({ input, expected }) => {
      expect(input.filter(isNotNil)).toEqual(expected);
    });
  });

  describe("isNotNaN", () => {
    it.each([
      {
        input: someElements,
        expected: [1, 2, true, false, [], null],
      },
    ])("returns non-NaN elements", ({ input, expected }) => {
      expect(input.filter(isNotNaN)).toEqual(expected);
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
        expected: [
          1,
          2,
          true,
          false,
          "true",
          "false",
          "hello",
          {},
          { a: 1 },
          undefined,
          null,
          NaN,
        ],
      },
      {
        input: someElements,
        classReference: Object,
        expected: [
          1,
          2,
          true,
          false,
          "true",
          "false",
          "hello",
          undefined,
          null,
          NaN,
        ],
      },
    ])(
      "returns elements that are not instance of a specific class",
      ({ input, classReference, expected }) => {
        // @ts-ignore
        expect(input.filter(isNotInstanceOf(classReference))).toEqual(expected);
      }
    );
  });
});
