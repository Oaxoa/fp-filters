import { pattern } from './pattern';
import { isEvenIndex } from './isEvenIndex';
import { isEveryNthIndex } from './isEveryNthIndex';

describe('position', () => {
	const someNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	describe('pattern', () => {
		describe('returns elements based on their index', () => {
			it.each([
				{
					input: someNumbers,
					p: [true, true, false],
					expected: [1, 2, 4, 5, 7, 8, 10],
				},
			])('accepts an array of booleans', ({ input, p, expected }) => {
				expect(input.filter(pattern(p))).toEqual(expected);
			});
			it.each([
				{
					input: someNumbers,
					p: [true, true, false],
					expected: [1, 2, 4, 5, 7, 8, 10],
				},
			])('accepts a comma separated list of booleans ', ({ input, p, expected }) => {
				expect(input.filter(pattern(...p))).toEqual(expected);
			});
		});
	});

	describe('evenIndex', () => {
		it.each([{ input: someNumbers, expected: [1, 3, 5, 7, 9] }])(
			'returns elements that have an even index',
			({ input, expected }) => {
				expect(input.filter(isEvenIndex)).toEqual(expected);
			}
		);
	});

	describe('everyN', () => {
		it.each([
			{
				input: someNumbers,
				every: 2,
				expected: [1, 3, 5, 7, 9],
			},
			{ input: someNumbers, every: 3, offset: 1, expected: [2, 5, 8] },
		])('returns elements that have an even index', ({ input, every, offset, expected }) => {
			expect(input.filter(isEveryNthIndex(every, offset))).toEqual(expected);
		});
	});
});
