import { THasLengthProperty } from './types.js';

/**
 * Argument has a minimum length of len
 */
export const hasLengthMin = (len: number) => (arg: THasLengthProperty) => arg?.length >= len;
