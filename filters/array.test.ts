import { isIncludedIn } from './array.js';

const someValues = [1, 2, 3, 4, 3, 'Hello', 2];
const someSubset = ['Hello', 2, 3];

describe('array filters', () => {
	describe('isIncludedIn', () => {
		it.each([{ input: someValues, array: someSubset, expected: [2, 3, 3, 'Hello', 2] }])(
			'returns true if an element is contained in the comparison array',
			({ input, array, expected }) => {
				expect(input.filter(isIncludedIn(array))).toEqual(expected);
			}
		);
	});
});
