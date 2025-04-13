import { THasLengthProperty } from './types';

/**
 * Argument has a maximum length of len
 */
export const hasLengthMax = (len: number) => (arg: THasLengthProperty) => arg?.length <= len;
