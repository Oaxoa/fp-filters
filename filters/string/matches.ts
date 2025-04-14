/**
 * Returns true if the string matches the specified regexp.
 * @remarks Returning a boolean cannot be used to extract the match.
 */
export const matches =
	(re: RegExp) =>
	(arg: string): boolean =>
		Boolean(arg?.match(re));
