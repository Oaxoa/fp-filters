/**
 * Higher-order function. Returns a function that returns true if the number is lower than the comparison
 */
export const isLowerThan = (n: number) => (arg: number) => arg < n;
