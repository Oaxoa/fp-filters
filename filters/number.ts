import { not } from "../utils";

export const isRound = (arg: number) => Math.round(arg) === arg;
export const isInteger = (arg: number) => parseInt(String(arg), 10) === arg;
export const isNumber = (arg: number) => typeof arg === "number";
export const isPositive = (arg: number) => arg > 0;
export const isPositiveOrZero = (arg: number) => arg >= 0;
export const isNegative = not(isPositiveOrZero);
export const isNegativeOrZero = not(isPositive);
export const isZero = (arg: number) => arg === 0;
export const isNotZero = not(isZero);
export const isBetween = (min: number, max: number) => (arg: number) =>
  arg > min && arg < max;
