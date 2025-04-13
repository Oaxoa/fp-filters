import { isLowerOrEqualTo } from '../number/isLowerOrEqualTo';
import { compareDates } from './compareDates';

export const isPastOrSameDate = compareDates(isLowerOrEqualTo);
