/**
 * Higher-order function. Returns a function that checks if the given argument is an instance of the specified class.
 */
export const isInstanceOf =
	<T>(classReference: new (...args: any[]) => T) =>
	(arg: unknown): arg is T =>
		arg instanceof classReference;
