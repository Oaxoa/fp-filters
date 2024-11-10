import { and, not } from 'fp-booleans';
import { assignName } from '../utils.js';

type THasLengthProperty = unknown[] | string;

/**
 * Argument has a specific length of len
 */
export const hasLength = (len: number) => (arg: THasLengthProperty) => Boolean(arg?.length === len);

/**
 * Argument has not a specific length of len
 */
export const hasNotLength = not(hasLength);

/**
 * Argument is empty
 */
export const isEmpty = hasLength(0);
assignName(isEmpty, 'isEmpty');

/**
 * Argument is not empty
 */
export const isNotEmpty = not(isEmpty);
assignName(isNotEmpty, 'isNotEmpty');

/**
 * Argument has a minimum length of len
 */
export const hasLengthMin = (len: number) => (arg: THasLengthProperty) => arg?.length >= len;

/**
 * Argument does not meet a minimum length of len
 */
export const hasNotLengthMin = not(hasLengthMin);

/**
 * Argument has a maximum length of len
 */
export const hasLengthMax = (len: number) => (arg: THasLengthProperty) => arg?.length <= len;
/**
 * Argument exceeds a maximum length of len
 */
export const hasNotLengthMax = not(hasLengthMax);

/**
 * Argument has a length between min and max
 */
export const hasLengthBetween = (min: number, max: number) => and(hasLengthMin(min), hasLengthMax(max));

/**
 * Argument has not a length between min and max
 */
export const hasNotLengthBetween = not(hasLengthMax);
