import { compareDates } from './compareDates.js';
import { isGreaterOrEqualTo } from '../number/isGreaterOrEqualTo.js';

export const isFutureOrSameDate = compareDates(isGreaterOrEqualTo);
