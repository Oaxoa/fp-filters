import { stringMethodProxy } from './stringMethodProxy.js';

/**
 * Returns true if the string ends with the specified substring
 * @remarks A proxy for the `String.prototype.endsWith` method
 */
export const endsWith = stringMethodProxy('endsWith');
