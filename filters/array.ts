/**
 * Argument is present in an array
 */
export const isOneOf = (comparisonArray: any[]) => (arg) =>
  comparisonArray.includes(arg);
