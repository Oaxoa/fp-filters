import { compareDates } from './compareDates';
import { isGreaterThan } from '../number/isGreaterThan';

export const isFutureDate = compareDates(isGreaterThan);
