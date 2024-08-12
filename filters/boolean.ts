import { not } from 'fp-booleans';

export const isTrue = (arg: boolean) => arg;
export const isFalse = not(isTrue);
export const isTruthy = Boolean;
export const isFalsey = not(Boolean);
