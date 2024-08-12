import { and, not } from 'fp-booleans';
import { is } from './misc.js';

/**
 * Returns true if the number is round
 */
export const isRound = (arg: number) => Math.round(arg) === arg;
/**
 * Returns true if the number is an integer
 */
export const isInteger = (arg: number) => parseInt(String(arg), 10) === arg;
/**
 * Returns true if the number is greater than
 */
export const isGreaterThan = (n: number) => (arg: number) => arg > n;
/**
 * Returns true if the number is lower than
 */
export const isLowerThan = (n: number) => (arg: number) => arg < n;
/**
 * Returns true if the number is greater than or equal to
 */
export const isGreaterOrEqualTo = not(isLowerThan);
/**
 * Returns true if the number is lower than or equal to
 */
export const isLowerOrEqualTo = not(isGreaterThan);
/**
 * Returns true if the number is even
 */
export const isEven = (n: number) => n % 2 === 0;
/**
 * Returns true if the number is odd
 */
export const isOdd = not(isEven);
/**
 * Returns true if the number is positive
 */
export const isPositive = isGreaterThan(0);
/**
 * Returns true if the number is positive or zero
 */
export const isPositiveOrZero = isGreaterOrEqualTo(0);
/**
 * Returns true if the number is negative
 */
export const isNegative = not(isPositiveOrZero);
/**
 * Returns true if the number is negative or zero
 */
export const isNegativeOrZero = not(isPositive);
/**
 * Returns true if the number is 0
 */
export const isZero = is(0);
/**
 * Returns true if the number is not zero
 */
export const isNotZero = not(isZero);
/**
 * Returns true if the number is between a min/max (included) range
 */
export const isBetween = (min: number, max: number) =>
	and(isGreaterOrEqualTo(min), isLowerOrEqualTo(max));
