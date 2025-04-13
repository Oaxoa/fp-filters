import { hasProp } from './hasProp';
import { hasProps } from './hasProps';
import { isGreaterThan } from '../number/isGreaterThan';
import { isLowerThan } from '../number/isLowerThan';
import { hasSameProp } from './hasSameProp';
import { hasSameProps } from './hasSameProps';
import { and, or } from 'fp-booleans';
import { isNumber } from '../type/isNumber';
import { isOdd } from '../number/isOdd';
import { isPositive } from '../number/isPositive';
import { is } from '../misc/is';

describe('object filters', () => {
	const someObjects = [{ a: 0, b: 1 }, { a: 5, b: 6 }, { a: 7, b: 6 }, { a: [1], c: 10 }, { d: 'hello' }];

	describe('hasProp', () => {
		it.each([
			{
				input: someObjects,
				propName: 'a',
				expected: [
					{ a: 0, b: 1 },
					{ a: 5, b: 6 },
					{ a: 7, b: 6 },
					{ a: [1], c: 10 },
				],
			},
		])('returns true if the argument has a specific prop', ({ input, propName, expected }) => {
			expect(input.filter(hasProp(propName))).toEqual(expected);
		});

		it.each([
			{
				input: someObjects,
				propName: 'a',
				value: 5,
				expected: [{ a: 5, b: 6 }],
			},
		])(
			'returns true if the argument has a specific prop with a specific value',
			({ input, propName, value, expected }) => {
				expect(input.filter(hasProp(propName, value))).toEqual(expected);
			}
		);

		it.each([
			{
				input: someObjects,
				propName: 'a',
				value: and(isNumber, isOdd),
				expected: [
					{ a: 5, b: 6 },
					{ a: 7, b: 6 },
				],
			},
			{
				input: someObjects,
				propName: 'a',
				value: or(is(5), is(7)),
				expected: [
					{ a: 5, b: 6 },
					{ a: 7, b: 6 },
				],
			},
		])(
			'returns true if the argument has a specific prop with a value that passes a filter test',
			({ input, propName, value, expected }) => {
				expect(input.filter(hasProp(propName, value))).toEqual(expected);
			}
		);
	});

	describe('hasProps', () => {
		it.each([
			{
				input: someObjects,
				propNames: ['a', 'b'],
				expected: [
					{ a: 0, b: 1 },
					{ a: 5, b: 6 },
					{ a: 7, b: 6 },
				],
			},
		])('returns true if the argument has a specific set of props', ({ input, propNames, expected }) => {
			expect(input.filter(hasProps(propNames))).toEqual(expected);
		});

		it.each([
			{
				input: someObjects,
				propNames: ['a', 'b'],
				values: [5, 6],
				expected: [{ a: 5, b: 6 }],
			},
		])(
			'returns true if the argument has a specific set of props with specific values',
			({ input, propNames, values, expected }) => {
				expect(input.filter(hasProps(propNames, values))).toEqual(expected);
			}
		);

		it.each([
			{
				input: someObjects,
				propNames: ['a', 'b'],
				values: [isGreaterThan(4), isPositive],
				expected: [
					{ a: 5, b: 6 },
					{ a: 7, b: 6 },
				],
			},
			{
				input: someObjects,
				propNames: ['a', 'b'],
				values: [undefined, isLowerThan(10)],
				expected: [
					{ a: 0, b: 1 },
					{ a: 5, b: 6 },
					{ a: 7, b: 6 },
				],
			},
		])(
			'returns true if the argument has a specific set of props that passes a specific set of filters',
			({ input, propNames, values, expected }) => {
				expect(input.filter(hasProps(propNames, values))).toEqual(expected);
			}
		);
	});

	describe('hasSameProp', () => {
		it.each([
			{
				input: someObjects,
				comparisonObject: { a: 5, b: 99, z: -1 },
				propertyName: 'a',
				expected: [{ a: 5, b: 6 }],
			},
			{
				input: someObjects,
				comparisonObject: { a: 5, b: 99, z: -1 },
				propertyName: 'b',
				expected: [],
			},
		])(
			'returns true if the argument has a specific property with the same value as a comparison object',
			({ input, comparisonObject, propertyName, expected }) => {
				expect(input.filter(hasSameProp(comparisonObject, propertyName))).toEqual(expected);
			}
		);
	});

	describe('hasSameProps', () => {
		it.each([
			{
				input: someObjects,
				comparisonObject: { a: 5, b: 6, z: -1 },
				propertyNames: ['a'],
				expected: [{ a: 5, b: 6 }],
			},
			{
				input: someObjects,
				comparisonObject: { a: 5, b: 6, z: -1 },
				propertyNames: ['a', 'b'],
				expected: [{ a: 5, b: 6 }],
			},
			{
				input: someObjects,
				comparisonObject: { a: 5, b: 99, z: -1 },
				propertyNames: ['a', 'b'],
				expected: [],
			},
			{
				input: someObjects,
				comparisonObject: { a: 5, z: 99 },
				propertyNames: ['a', 'z'],
				expected: [],
			},
		])(
			'returns true if the argument has a specific set of properties with the same value as a comparison object',
			({ input, comparisonObject, propertyNames, expected }) => {
				expect(input.filter(hasSameProps(comparisonObject, propertyNames))).toEqual(expected);
			}
		);
	});
});
