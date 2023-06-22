import { assignName } from "../utils";

/**
 * Allows to specify a pattern that is repeated. The elements are returned based on their index matching the pattern
 */
export const pattern =
  (...args) =>
  (item, index) => {
    const mask = Array.isArray(args[0]) ? args[0] : [...args];
    return mask[index % mask.length];
  };

/**
 * Returns elements with an odd index
 */
export const oddIndex = pattern(false, true);
assignName(oddIndex, "oddIndex");

/**
 * Returns elements with an even index
 */
export const evenIndex = pattern(true, false);
assignName(evenIndex, "evenIndex");

/**
 * Returns an element every N (offset possible)
 */
export const everyN = (n: number, start: number = 0) => {
  const p = Array(n).fill(false);
  p[start] = true;
  return pattern(...p);
};
