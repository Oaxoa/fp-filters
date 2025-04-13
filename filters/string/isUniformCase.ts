import { or } from 'fp-booleans';
import { isUpperCase } from './isUpperCase.js';
import { isLowerCase } from './isLowerCase.js';

/**
 * Returns true if the string is using a uniform case (lower or upper)
 */
export const isUniformCase = or(isUpperCase, isLowerCase);
