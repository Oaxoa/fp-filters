/**
 * Argument is present in an array
 */
export const isOneOf = (comparisonArray: unknown[]) => (arg: unknown) =>
  comparisonArray.includes(arg);
