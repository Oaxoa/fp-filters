import { isLowerOrEqualTo } from '../number/isLowerOrEqualTo.js';
import { compareDates } from './compareDates.js';

export const isPastOrSameDate = compareDates(isLowerOrEqualTo);
