import { or } from 'fp-booleans';
import { isUpperCase } from './isUpperCase';
import { isLowerCase } from './isLowerCase';

/**
 * Returns true if the string is using a uniform case (lower or upper)
 */
export const isUniformCase = or(isUpperCase, isLowerCase);
