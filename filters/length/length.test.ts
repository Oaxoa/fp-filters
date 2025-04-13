import { isEmpty } from './isEmpty.js';
import { hasLength } from './hasLength.js';
import { hasLengthMin } from './hasLengthMin.js';
import { hasLengthMax } from './hasLengthMax.js';
import { hasLengthBetween } from './hasLengthBetween.js';

describe('length filters', () => {
	const someInput = [[], [1], [1, 2], [1, 2, 3], '', 'a', 'ab', 'abc'];

	describe('isEmpty', () => {
		it.each([{ input: someInput, expected: [[], ''] }])(
			'returns true is string or array is empty (zero length)',
			({ input, expected }) => {
				expect(input.filter(isEmpty)).toEqual(expected);
			}
		);
	});

	describe('hasLength', () => {
		it.each([{ input: someInput, length: 2, expected: [[1, 2], 'ab'] }])(
			'returns empty strings or arrays',
			({ input, length, expected }) => {
				expect(input.filter(hasLength(length))).toEqual(expected);
			}
		);
	});

	describe('hasLengthMin', () => {
		it.each([{ input: someInput, length: 2, expected: [[1, 2], [1, 2, 3], 'ab', 'abc'] }])(
			'returns empty strings or arrays',
			({ input, length, expected }) => {
				expect(input.filter(hasLengthMin(length))).toEqual(expected);
			}
		);
	});

	describe('hasLengthMax', () => {
		it.each([{ input: someInput, length: 2, expected: [[], [1], [1, 2], '', 'a', 'ab'] }])(
			'returns empty strings or arrays',
			({ input, length, expected }) => {
				expect(input.filter(hasLengthMax(length))).toEqual(expected);
			}
		);
	});

	describe('hasLengthBetween', () => {
		it.each([{ input: someInput, min: 1, max: 2, expected: [[1], [1, 2], 'a', 'ab'] }])(
			'returns empty strings or arrays',
			({ input, min, max, expected }) => {
				expect(input.filter(hasLengthBetween(min, max))).toEqual(expected);
			}
		);
	});
});
