import {
  includes,
  doesNotMatch,
  endsWith,
  isEmptyString,
  isEmptyStringTrim,
  isLowerCase,
  isUpperCase,
  matches,
  startsWith,
} from "./string.js";

describe("string filters", () => {
  const someStrings = ["hello", "hallo", "hellscape"];
  const someMixedCaseStrings = ["hello", "hAllo", "HELLO", "Hi!"];
  const someWhitespaceStrings = ["", " ", "  ", "   ", "hi"];

  describe("matches", () => {
    it.each([
      {
        input: someStrings,
        arg: /hell/,
        expected: ["hello", "hellscape"],
      },
    ])(
      "filters based on matching a regular expression",
      ({ input, arg, expected }) => {
        expect(input.filter(matches(arg))).toEqual(expected);
      }
    );
  });

  describe("doesNotMatch", () => {
    it.each([
      {
        input: someStrings,
        arg: /hell/,
        expected: ["hallo"],
      },
    ])(
      "filters based on not matching a regular expression",
      ({ input, arg, expected }) => {
        // @ts-ignore
        expect(input.filter(doesNotMatch(arg))).toEqual(expected);
      }
    );
  });

  describe("startsWith", () => {
    it.each([
      {
        input: someStrings,
        arg: "hell",
        expected: ["hello", "hellscape"],
      },
    ])(
      "filters based on the beginning of the string",
      ({ input, arg, expected }) => {
        expect(input.filter(startsWith(arg))).toEqual(expected);
      }
    );
  });
  describe("endsWith", () => {
    it.each([
      {
        input: someStrings,
        arg: "llo",
        expected: ["hello", "hallo"],
      },
    ])("filters based on the end of the string", ({ input, arg, expected }) => {
      expect(input.filter(endsWith(arg))).toEqual(expected);
    });
  });

  describe("includes", () => {
    it.each([
      {
        input: someStrings,
        arg: "hell",
        expected: ["hello", "hellscape"],
      },
    ])(
      "returns strings that contain a specific substring",
      ({ input, arg, expected }) => {
        expect(input.filter(includes(arg))).toEqual(expected);
      }
    );
  });

  describe("isUpperCase", () => {
    it.each([
      {
        input: someMixedCaseStrings,
        expected: ["HELLO"],
      },
    ])("filters based on the end of the string", ({ input, expected }) => {
      expect(input.filter(isUpperCase)).toEqual(expected);
    });
  });

  describe("isLowerCase", () => {
    it.each([
      {
        input: someMixedCaseStrings,
        expected: ["hello"],
      },
    ])("filters based on the end of the string", ({ input, expected }) => {
      expect(input.filter(isLowerCase)).toEqual(expected);
    });
  });

  describe("isEmptyString", () => {
    it.each([
      {
        input: someWhitespaceStrings,
        expected: [""],
      },
    ])("filters based on the end of the string", ({ input, expected }) => {
      expect(input.filter(isEmptyString)).toEqual(expected);
    });
  });

  describe("isEmtpyStringTrim", () => {
    it.each([
      {
        input: someWhitespaceStrings,
        expected: ["", " ", "  ", "   "],
      },
    ])("filters based on the end of the string", ({ input, expected }) => {
      expect(input.filter(isEmptyStringTrim)).toEqual(expected);
    });
  });
});
