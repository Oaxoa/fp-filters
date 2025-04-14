/**
 * Returns all elements. Useful as identity function for a filter. E.g.: as a default value.
 * E.g.:
 * ```js
 * const getData = (filter = all) => data.filter(filter);
 * ```
 */
export const all = () => true;
