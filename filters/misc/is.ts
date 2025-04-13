/**
 * Returns true if the argument is equal to the comparison parameter: ===
 */
export const is =
	<T>(comparison: T) =>
	(arg: T) =>
		comparison === arg;
