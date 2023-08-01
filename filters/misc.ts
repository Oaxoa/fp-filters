import {not} from "../utils.js";

/**
 * Returns all elements
 */
export const all = () => true;

/**
 * Returns no elements
 */
export const none = () => false;

/**
 * Exact comparison (===)
 */
export const is =
    <T>(comparison: T) =>
        (arg: T) =>
            comparison === arg;
export const isNot = not(is);