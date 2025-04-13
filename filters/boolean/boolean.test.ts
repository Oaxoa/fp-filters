import { isTrue } from './isTrue';
import { isTruthy } from './isTruthy';

describe('boolean', () => {
	describe('isTrue', () => {
		const someBooleans = [true, true, false, true, false];

		it.each([{ input: someBooleans, expected: [true, true, true] }])('', ({ input, expected }) => {
			expect(input.filter(isTrue)).toEqual(expected);
		});
	});

	describe('isTruthy', () => {
		const someValues = [true, false, 1, 0, '', 'Hello', [], [1, 2], {}, { a: 1 }];

		it.each([{ input: someValues, expected: [true, 1, 'Hello', [], [1, 2], {}, { a: 1 }] }])(
			'',
			({ input, expected }) => {
				expect(input.filter(isTruthy)).toEqual(expected);
			}
		);
	});
});
