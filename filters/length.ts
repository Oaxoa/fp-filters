import { and, assignName, not } from "../utils.js";

type THasLengthProperty = unknown[] | string;

/**
 * Argument has a specific length
 */
export const hasLength = (len: number) => (arg: THasLengthProperty) =>
  arg.length === len;
/**
 * Argument is empty
 */
export const isEmpty = hasLength(0);
assignName(isEmpty, "isEmpty");

/**
 * Argument is not empty
 */
export const isNotEmpty = not(isEmpty);
assignName(isNotEmpty, "isNotEmpty");

/**
 * Argument has a minimum length
 */
export const hasMinimumLength = (len: number) => (arg: THasLengthProperty) =>
  arg.length >= len;

/**
 * Argument has a maximum length
 */
export const hasMaximumLength = (len: number) => (arg: THasLengthProperty) =>
  arg.length <= len;

/**
 * Argument has a length between min and max
 */
export const clampLength = (min: number, max: number) =>
  and(hasMinimumLength(min), hasMaximumLength(max));
