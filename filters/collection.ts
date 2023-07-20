import { assignName, not } from "../utils.js";

/**
 * Argument is unique within the collection
 */
export const isUnique = (item, index, arr) => arr.indexOf(item) === index;

/**
 * Argument has a specific length
 */
export const hasLength = (len: number) => (arg: any[] | string) =>
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
export const hasMinimumLength = (len) => (arg) => arg.length >= len;

/**
 * Argument has a maximum length
 */
export const hasMaximumLength = (len) => (arg) => arg.length <= len;

/**
 * Argument has a length between min and max
 */
export const clampLength = (min, max) => (arg) =>
  arg.length >= min && arg.length <= max;
