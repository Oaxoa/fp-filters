import {stringMethodProxy} from './stringMethodProxy.js';

/**
 * Returns true if the string starts with the specified substring
 * @remarks A proxy for the `String.prototype.startsWith` method
 */
export const startsWith = stringMethodProxy('startsWith');
