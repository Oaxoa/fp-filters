import {
	isGreaterThan,
	isGreaterOrEqualTo,
	isBetween,
	isEven,
	isInteger,
	isPositive,
	isPositiveOrZero,
	isRound,
	isZero,
	isLowerThan,
} from './number.js';

describe('number filters', () => {
	const someElements = [0, 1, 1.1, 1.9, -2, -2.9, 3.0, -4.0];

	describe('isRound', () => {
		it.each([{ input: someElements, expected: [0, 1, -2, 3, -4] }])(
			'returns true if the argument is rounds',
			({ input, expected }) => {
				expect(input.filter(isRound)).toEqual(expected);
			}
		);
	});
	describe('isInteger', () => {
		it.each([{ input: someElements, expected: [0, 1, -2, 3, -4] }])(
			'returns true if the argument is an integer',
			({ input, expected }) => {
				expect(input.filter(isInteger)).toEqual(expected);
			}
		);
	});

	describe('isGreaterThan', () => {
		it.each([{ input: someElements, expected: [1.1, 1.9, 3] }])(
			'returns true if the argument is greater than the argument',
			({ input, expected }) => {
				expect(input.filter(isGreaterThan(1))).toEqual(expected);
			}
		);
	});

	describe('isGreaterOrEqualTo', () => {
		it.each([{ input: someElements, expected: [1, 1.1, 1.9, 3] }])(
			'returns true if the argument is greater than or equal to the argument',
			({ input, expected }) => {
				expect(input.filter(isGreaterOrEqualTo(1))).toEqual(expected);
			}
		);
	});

	describe('isLowerThan', () => {
		it.each([{ input: someElements, expected: [0, -2, -2.9, -4] }])(
			'returns true if the argument is lower than the argument',
			({ input, expected }) => {
				expect(input.filter(isLowerThan(1))).toEqual(expected);
			}
		);
	});

	describe('isEven', () => {
		it.each([{ input: someElements, expected: [0, -2, -4.0] }])(
			'returns true if the argument is even',
			({ input, expected }) => {
				expect(input.filter(isEven)).toEqual(expected);
			}
		);
	});

	describe('isPositive', () => {
		it.each([{ input: someElements, expected: [1, 1.1, 1.9, 3.0] }])(
			'returns true if the argument is positive',
			({ input, expected }) => {
				expect(input.filter(isPositive)).toEqual(expected);
			}
		);
	});

	describe('isPositiveOrZero', () => {
		it.each([{ input: someElements, expected: [0, 1, 1.1, 1.9, 3.0] }])(
			'returns true if the argument is positive or zero',
			({ input, expected }) => {
				expect(input.filter(isPositiveOrZero)).toEqual(expected);
			}
		);
	});

	describe('isZero', () => {
		it.each([{ input: someElements, expected: [0] }])(
			'returns true if the argument is zero',
			({ input, expected }) => {
				expect(input.filter(isZero)).toEqual(expected);
			}
		);
	});

	describe('isBetween', () => {
		it.each([
			{
				input: someElements,
				min: -2,
				max: 3,
				expected: [0, 1, 1.1, 1.9, -2, 3.0],
			},
		])(
			'returns true if the argument is within a range',
			({ input, min, max, expected }) => {
				expect(input.filter(isBetween(min, max))).toEqual(expected);
			}
		);
	});
});
