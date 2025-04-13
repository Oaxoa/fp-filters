import { THasLengthProperty } from './types';

/**
 * Argument has a minimum length of len
 */
export const hasLengthMin = (len: number) => (arg: THasLengthProperty) => arg?.length >= len;
