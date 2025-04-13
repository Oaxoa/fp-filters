import { stringMethodProxy } from './stringMethodProxy.js';

/**
 * Returns true if the string includes the specified substring
 */
export const includes = stringMethodProxy('includes');
