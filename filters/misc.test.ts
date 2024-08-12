import { all, is, none } from './misc.js';

describe('misc filters', () => {
	const someElements = [1, 2, 3, 2, 'hello'];

	describe('all', () => {
		it.each([{ input: someElements, expected: someElements }])(
			'returns all elements',
			({ input, expected }) => {
				expect(input.filter(all)).toEqual(expected);
			}
		);
	});

	describe('none', () => {
		it.each([{ input: someElements, expected: [] }])(
			'returns no elements',
			({ input, expected }) => {
				expect(input.filter(none)).toEqual(expected);
			}
		);
	});

	describe('is', () => {
		it.each([
			{ input: someElements, value: 2, expected: [2, 2] },
			{ input: someElements, value: 'hello', expected: ['hello'] },
		])('returns elements that have a specific value', ({ input, value, expected }) => {
			expect(input.filter(is(value))).toEqual(expected);
		});
	});
});
