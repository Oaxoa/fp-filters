import { not } from 'fp-booleans';
import { isTrue } from './isTrue';

export const isFalse = not(isTrue);
