import { not, or } from "../utils";

export const isOfType = (type) => (arg) => typeof arg === type;
export const isNotOfType = not(isOfType);
export const isBoolean = isOfType("boolean");
export const isNotBoolean = not(isBoolean);
export const isString = isOfType("string");
export const isNotString = not(isString);
export const isNumber = isOfType("number");
export const isNotNumber = not(isNumber);
export const isObject = isOfType("object");
export const isNotObject = not(isObject);
export const isArray = (arg) => Array.isArray(arg);
export const isNotArray = not(isArray);
export const isUndefined = isOfType("undefined");
export const isNotUndefined = not(isUndefined);
export const isNull = (arg) => arg === null;
export const isNotNull = not(isNull);
export const isNullable = or(isUndefined, isNull);
export const isNotNullable = not(isNullable);
export const isNotNaN = not(isNaN);
export const isInstanceOf = (classReference) => (arg) =>
  arg instanceof classReference;
export const isNotInstanceOf = not(isInstanceOf);
