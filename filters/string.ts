import { not } from "../utils.js";
import { is } from "./misc.js";

export const matches = (re: RegExp) => (arg: string) => arg.match(re);
export const doesNotMatch = not(matches);

const stringProxyMethod = (method) => (q: string) => (arg: string) =>
  // @ts-ignore
  String.prototype[method].call(arg, q);
export const startsWith = stringProxyMethod("startsWith");
export const endsWith = stringProxyMethod("endsWith");
export const includes = stringProxyMethod("includes");
export const isUpperCase = (arg: string) => arg.toUpperCase() === arg;
export const isLowerCase = (arg: string) => arg.toLowerCase() === arg;
export const isEmptyString = is("");
export const isEmptyStringTrim = (arg: string) => arg.trim() === "";
