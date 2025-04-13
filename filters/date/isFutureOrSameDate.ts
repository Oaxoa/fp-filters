import { compareDates } from './compareDates';
import { isGreaterOrEqualTo } from '../number/isGreaterOrEqualTo';

export const isFutureOrSameDate = compareDates(isGreaterOrEqualTo);
