import { compareDates } from './compareDates.js';
import { isLowerThan } from '../number/isLowerThan.js';

export const isPastDate = compareDates(isLowerThan);
