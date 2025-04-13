export const isInstanceOf =
	<T>(classReference: new (...args: any[]) => T) =>
	(arg: unknown): arg is T =>
		arg instanceof classReference;
