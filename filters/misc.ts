import { not } from "../utils";

/**
 * Returns all elements
 */
export const all = () => true;

/**
 * Returns no element
 */
export const none = () => false;

/**
 * Exact comparison
 */
export const is =
  <T>(comparison: T) =>
  (arg: T): arg is T =>
    comparison === arg;
export const isNot = not(is);

/**
 * Argument is instance of a class
 */
export const isInstanceOf = (classReference) => (arg) =>
  arg instanceof classReference;

/**
 * Argument is not instance of a class
 */
export const isNotInstanceOf = not(isInstanceOf);

/**
 * Argument is of a specific type
 */
export const isType = (type) => (arg) => typeof arg === type;

/**
 * Argument is not of a specific type
 */
export const isNotType = not(isType);
