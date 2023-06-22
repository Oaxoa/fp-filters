import { not } from "../utils";
import { is } from "./misc";

export const matches = (re: RegExp) => (arg: string) => arg.match(re);
export const doesNotMatch = not(matches);
export const startsWith = (prefix: string) => (arg: string) =>
  arg.match(new RegExp(`^${prefix}`));
export const endsWith = (suffix: string) => (arg: string) =>
  arg.match(new RegExp(`${suffix}$`));
export const contains = (q: string) => (arg: string) =>
  arg.match(new RegExp(`${q}`));
export const isUpperCase = (arg: string) => !arg.match(/[a-z]/);
export const isLowerCase = (arg: string) => !arg.match(/[A-Z]/);
export const isEmptyString = is("");
export const isEmptyStringTrim = (arg: string) => arg.trim() === "";
