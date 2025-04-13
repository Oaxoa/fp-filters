import { not } from 'fp-booleans';
import { matches } from './matches.js';

/**
 * Returns false if the string matches the specified regexp
 */
export const doesNotMatch = not(matches);
