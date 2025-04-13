export const stringMethodProxy =
	(method: 'startsWith' | 'endsWith' | 'includes') => (q: string) => (arg: string) =>
		String.prototype[method].call(arg, q);
