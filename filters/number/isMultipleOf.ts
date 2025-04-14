/**
 * Higher-order function. Returns a function that returns true if the number n is multiple of another number m
 */
export const isMultipleOf = (m: number) => (n: number) => n % m === 0;
