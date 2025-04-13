import { THasLengthProperty } from './types.js';

/**
 * Argument has a specific length of len
 */
export const hasLength = (len: number) => (arg: THasLengthProperty) => Boolean(arg?.length === len);
