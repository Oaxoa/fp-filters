import { not, or } from "../utils.js";

export const isOfType =
  (type: unknown) =>
  (arg: unknown): arg is typeof type =>
    typeof arg === type;
export const isNotOfType = not(isOfType);
export const isBoolean = isOfType("boolean");
export const isNotBoolean = not(isBoolean);
export const isString = isOfType("string");
export const isNotString = not(isString);
export const isNumber = isOfType("number");
export const isNotNumber = not(isNumber);
export const isObject = isOfType("object");
export const isNotObject = not(isObject);
export const isArray = (arg: unknown) => Array.isArray(arg);
export const isNotArray = not(isArray);
export const isUndefined = isOfType("undefined");
export const isNotUndefined = not(isUndefined);
export const isNull = (arg: unknown) => arg === null;
export const isNotNull = not(isNull);
export const isNil = or(isUndefined, isNull);
export const isNotNil = not(isNil);
export const isNotNaN = not(isNaN);
export const isInstanceOf = (classReference: Function) => (arg: unknown) =>
  arg instanceof classReference;
export const isNotInstanceOf = not(isInstanceOf);
