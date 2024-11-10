import { isInstanceOf, isOfType, TTypeMap, isNotOfType, isSameTypeAs, isNotSameTypeAs } from './type.js';

describe('type filters', () => {
	type TTestEntryInput = number | string | boolean | unknown[] | object | undefined | null;
	const someElements: TTestEntryInput[] = [
		1,
		2,
		true,
		false,
		'true',
		'false',
		'hello',
		[],
		[1, 2],
		{},
		{ a: 1 },
		undefined,
		null,
		NaN,
	];

	describe('isOfType', () => {
		type TestEntry = {
			input: TTestEntryInput[];
			type: keyof TTypeMap;
			expected: unknown[];
		};
		it.each<TestEntry>([
			{
				input: someElements,
				type: 'number',
				expected: [1, 2, NaN],
			},
			{
				input: someElements,
				type: 'object',
				expected: [[], [1, 2], {}, { a: 1 }, null],
			},
		])('returns elements that match the type', ({ input, type, expected }) => {
			expect(input.filter(isOfType(type))).toEqual(expected);
		});
	});

	describe('isNotOfType', () => {
		type TestEntry = {
			input: TTestEntryInput[];
			type: keyof TTypeMap;
			expected: unknown[];
		};
		it.each<TestEntry>([
			{
				input: someElements,
				type: 'number',
				expected: [true, false, 'true', 'false', 'hello', [], [1, 2], {}, { a: 1 }, undefined, null],
			},
			{
				input: someElements,
				type: 'object',
				expected: [1, 2, true, false, 'true', 'false', 'hello', undefined, NaN],
			},
		])('returns elements that do not match the type', ({ input, type, expected }) => {
			expect(input.filter(isNotOfType(type))).toEqual(expected);
		});
	});

	describe('isInstanceOf', () => {
		it.each([
			{
				input: someElements,
				classReference: Array,
				expected: [[], [1, 2]],
			},
			{
				input: someElements,
				classReference: Object,
				expected: [[], [1, 2], {}, { a: 1 }],
			},
		])(
			'returns elements that are instance of a specific class',
			({ input, classReference, expected }) => {
				expect(input.filter(isInstanceOf(classReference))).toEqual(expected);
			}
		);
	});

	describe('isSameTypeAs', () => {
		it.each([
			{
				input: someElements,
				comparison: 42,
				expected: [1, 2, NaN],
			},
			{
				input: someElements,
				comparison: 'sup?',
				expected: ['true', 'false', 'hello'],
			},
			{
				input: someElements,
				comparison: [9, 8, 7],
				expected: [[], [1, 2], {}, { a: 1 }, null],
			},
			{
				input: someElements,
				comparison: { hello: 'world' },
				expected: [[], [1, 2], {}, { a: 1 }, null],
			},
		])(
			'returns elements that have the same type of the comparison argument',
			({ input, comparison, expected }) => {
				expect(input.filter(isSameTypeAs(comparison))).toEqual(expected);
			}
		);
	});

	describe('isNotSameTypeAs', () => {
		it.each([
			{
				input: someElements,
				comparison: 42,
				expected: [true, false, 'true', 'false', 'hello', [], [1, 2], {}, { a: 1 }, undefined, null],
			},
			{
				input: someElements,
				comparison: 'sup?',
				expected: [1, 2, true, false, [], [1, 2], {}, { a: 1 }, undefined, null, NaN],
			},
			{
				input: someElements,
				comparison: [9, 8, 7],
				expected: [1, 2, true, false, 'true', 'false', 'hello', undefined, NaN],
			},
			{
				input: someElements,
				comparison: { hello: 'world' },
				expected: [1, 2, true, false, 'true', 'false', 'hello', undefined, NaN],
			},
		])(
			'returns elements that do not have the same type of the comparison argument',
			({ input, comparison, expected }) => {
				expect(input.filter(isNotSameTypeAs(comparison))).toEqual(expected);
			}
		);
	});
});
