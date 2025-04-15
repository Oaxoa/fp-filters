/**
 * Used on arrays of arrays (2D arrays).
 * Returns true if all elements in the nested array pass the test implemented by the provided function.
 * Example usage:
 * ```ts
 * [[1,2,3], [2,4], [4,8]].filter(everyElement(isEven));
 * // returns [[2,4], [4,8]]
 */
export const everyElement =
	<T>(condition: (item: T) => boolean) =>
	(array: T[]): boolean =>
		array.every(condition);
