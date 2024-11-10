import { filterElements, isIncludedIn } from './array.js';
import { isEven } from './number';

describe('array filters', () => {
	describe('isIncludedIn', () => {
		it.each([
			{ input: [1, 2, 3, 4, 3, 'Hello', 2], array: ['Hello', 2, 3], expected: [2, 3, 3, 'Hello', 2] },
		])(
			'returns true if an element is contained in the comparison array',
			({ input, array, expected }) => {
				expect(input.filter(isIncludedIn(array))).toEqual(expected);
			}
		);
	});
	describe('filterElements', () => {
		it.each([
			{
				input: [
					[1, 1],
					[1, 2],
					[2, 2],
					[0, 2, 4, 6],
				],
				expected: [
					[2, 2],
					[0, 2, 4, 6],
				],
			},
		])('returns true if an element is contained in the comparison array', ({ input, expected }) => {
			expect(input.filter(filterElements(isEven))).toEqual(expected);
		});
	});
});
