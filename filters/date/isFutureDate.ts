import { compareDates } from './compareDates.js';
import { isGreaterThan } from '../number/isGreaterThan.js';

export const isFutureDate = compareDates(isGreaterThan);
