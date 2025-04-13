import { stringMethodProxy } from './stringMethodProxy.js';

/**
 * Returns true if the string ends with the specified substring
 */
export const endsWith = stringMethodProxy('endsWith');
