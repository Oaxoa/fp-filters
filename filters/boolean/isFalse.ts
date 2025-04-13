import { not } from 'fp-booleans';
import { isTrue } from './isTrue.js';

export const isFalse = not(isTrue);
