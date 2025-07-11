import { stringMethodProxy } from './stringMethodProxy.js';

/**
 * Returns true if the string includes the specified substring
 * @remarks A proxy for the `String.prototype.includes` method
 */
export const includes = stringMethodProxy('includes');
