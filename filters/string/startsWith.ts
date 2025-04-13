import { stringMethodProxy } from './stringMethodProxy.js';

/**
 * Returns true if the string starts with the specified substring
 */
export const startsWith = stringMethodProxy('startsWith');
