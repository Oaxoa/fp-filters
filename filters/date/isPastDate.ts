import { compareDates } from './compareDates';
import { isLowerThan } from '../number/isLowerThan';

export const isPastDate = compareDates(isLowerThan);
