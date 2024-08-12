export const assignName = (f: Function, name: string) =>
	Object.defineProperty(f, 'name', {
		value: name,
		configurable: true,
	});
