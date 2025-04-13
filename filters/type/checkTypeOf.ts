import { TTypeMap } from './types.js';

export const checkTypeOf = (type: keyof TTypeMap) => (arg: unknown) => typeof arg === type;
