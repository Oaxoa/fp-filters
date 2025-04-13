import { THasLengthProperty } from './types.js';

/**
 * Argument has a maximum length of len
 */
export const hasLengthMax = (len: number) => (arg: THasLengthProperty) => arg?.length <= len;
