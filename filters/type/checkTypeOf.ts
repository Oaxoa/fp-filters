import { TTypeMap } from './types';

export const checkTypeOf = (type: keyof TTypeMap) => (arg: unknown) => typeof arg === type;
