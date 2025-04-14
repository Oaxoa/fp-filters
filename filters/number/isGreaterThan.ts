/**
 * Higher-order function. Returns a function that returns true if the number is greater than the comparison
 */
export const isGreaterThan = (n: number) => (arg: number) => arg > n;
