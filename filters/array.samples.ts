import { isIncludedIn, isNotIncludedIn } from './array.js';

const samples = [1, 'Ciao'];

const res = [1, 2, 'Ciao'].filter(isIncludedIn(samples));
const resNot = [1, 2, 'Ciao'].filter(isNotIncludedIn(samples));
