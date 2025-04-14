import { isIncludedIn } from './isIncludedIn.js';
import { everyElement } from './everyElement.js';
import { isEven } from '../number/isEven.js';

describe('array', () => {
	describe('everyElement', () => {
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
		])(
			'returns true if an element is an array and all its children pass the test provided by the function',
			({ input, expected }) => {
				expect(input.filter(everyElement(isEven))).toEqual(expected);
			}
		);
	});

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
});
