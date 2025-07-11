import { not } from 'fp-booleans';
import { matches } from './matches.js';

/**
 * Returns false if the string matches the specified regexp.
 * Negative of {@link matches}
 */
export const doesNotMatch = not(matches);
