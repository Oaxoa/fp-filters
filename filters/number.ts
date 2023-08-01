import {and, not} from "../utils.js";

export const isRound = (arg: number) => Math.round(arg) === arg;
export const isInteger = (arg: number) => parseInt(String(arg), 10) === arg;
export const gt = (n: number) => (arg: number) => arg > n;
export const gte = (n: number) => (arg: number) => arg >= n;
export const lt = (n: number) => (arg: number) => arg < n;
export const lte = (n: number) => (arg: number) => arg <= n;
export const isEven = (n: number) => n % 2 === 0;
export const isOdd = not(isEven);
export const isPositive = gt(0);
export const isPositiveOrZero = gte(0);
export const isNegative = not(isPositiveOrZero);
export const isNegativeOrZero = not(isPositive);
export const isZero = (arg: number) => arg === 0;
export const isNotZero = not(isZero);
export const isBetween = (min: number, max: number) => and(gte(min), lte(max));
