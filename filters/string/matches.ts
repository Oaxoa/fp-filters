/**
 * Returns true if the string matches the specified regexp
 */
export const matches =
	(re: RegExp) =>
	(arg: string): boolean =>
		Boolean(arg?.match(re));
