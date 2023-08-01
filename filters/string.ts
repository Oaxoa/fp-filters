import {not} from "../utils.js";
import {is} from "./misc.js";

export const matches = (re: RegExp) => (arg: string) => arg.match(re);
export const doesNotMatch = not(matches);
 
const stringMethodProxy =
    (method: "startsWith" | "endsWith" | "includes") =>
        (q: string) =>
            (arg: string) =>
                String.prototype[method].call(arg, q);
export const startsWith = stringMethodProxy("startsWith");
export const endsWith = stringMethodProxy("endsWith");
export const includes = stringMethodProxy("includes");
export const isUpperCase = (arg: string) => arg.toUpperCase() === arg;
export const isLowerCase = (arg: string) => arg.toLowerCase() === arg;
export const isEmptyString = is("");
export const isEmptyStringTrim = (arg: string) => arg.trim() === "";
