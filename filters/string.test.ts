import {
	includes,
	doesNotMatch,
	endsWith,
	isEmptyString,
	isEmptyStringTrim,
	isLowerCase,
	isUpperCase,
	matches,
	startsWith,
	isEmail,
	isPalindrome,
	isTrimmable,
	isTrimmableStart,
	isTrimmableEnd,
	isUniformCase,
} from './string.js';

describe('string filters', () => {
	const someStrings = ['hello', 'hallo', 'hellscape'];
	const someMixedCaseStrings = ['hello', 'hAllo', 'HELLO', 'Hi!'];
	const someWhitespaceStrings = ['', ' ', '  ', '   ', 'hi'];
	const someTrimmableStrings = ['a', ' a', 'a ', ' a ', '  aa     '];

	describe('matches', () => {
		it.each([
			{
				input: someStrings,
				arg: /hell/,
				expected: ['hello', 'hellscape'],
			},
		])('returns elements that match a regular expression', ({ input, arg, expected }) => {
			expect(input.filter(matches(arg))).toEqual(expected);
		});
	});

	describe('doesNotMatch', () => {
		it.each([
			{
				input: someStrings,
				arg: /hell/,
				expected: ['hallo'],
			},
		])('returns elements that do not match a regular expression', ({ input, arg, expected }) => {
			// @ts-ignore
			expect(input.filter(doesNotMatch(arg))).toEqual(expected);
		});
	});

	describe('startsWith', () => {
		it.each([
			{
				input: someStrings,
				arg: 'hell',
				expected: ['hello', 'hellscape'],
			},
		])('returns elements that begin with the argument', ({ input, arg, expected }) => {
			expect(input.filter(startsWith(arg))).toEqual(expected);
		});
	});

	describe('endsWith', () => {
		it.each([
			{
				input: someStrings,
				arg: 'llo',
				expected: ['hello', 'hallo'],
			},
		])('returns elements that end with the argument', ({ input, arg, expected }) => {
			expect(input.filter(endsWith(arg))).toEqual(expected);
		});
	});

	describe('includes', () => {
		it.each([
			{
				input: someStrings,
				arg: 'll',
				expected: ['hello', 'hallo', 'hellscape'],
			},
		])('returns elements that contain a specific substring', ({ input, arg, expected }) => {
			expect(input.filter(includes(arg))).toEqual(expected);
		});
	});

	describe('isUpperCase', () => {
		it.each([
			{
				input: someMixedCaseStrings,
				expected: ['HELLO'],
			},
		])('return upper case strings', ({ input, expected }) => {
			expect(input.filter(isUpperCase)).toEqual(expected);
		});
	});

	describe('isLowerCase', () => {
		it.each([
			{
				input: someMixedCaseStrings,
				expected: ['hello'],
			},
		])('return lower case strings', ({ input, expected }) => {
			expect(input.filter(isLowerCase)).toEqual(expected);
		});
	});

	// describe('isUniformCase', () => {
	// 	it.each([
	// 		{
	// 			input: someMixedCaseStrings,
	// 			expected: ['hello', 'HELLO'],
	// 		},
	// 	])('return strings that use a uniform case (lower or upper)', ({ input, expected }) => {
	// 		expect(input.filter(isUniformCase)).toEqual(expected);
	// 	});
	// });

	describe('isEmptyString', () => {
		it.each([
			{
				input: someWhitespaceStrings,
				expected: [''],
			},
		])('filters based on the end of the string', ({ input, expected }) => {
			expect(input.filter(isEmptyString)).toEqual(expected);
		});
	});

	describe('isEmtpyStringTrim', () => {
		it.each([
			{
				input: someWhitespaceStrings,
				expected: ['', ' ', '  ', '   '],
			},
		])('filters based on the end of the string', ({ input, expected }) => {
			expect(input.filter(isEmptyStringTrim)).toEqual(expected);
		});
	});
	describe('isTrimmable', () => {
		it.each([
			{
				input: someTrimmableStrings,
				expected: [' a', 'a ', ' a ', '  aa     '],
			},
		])('filters based on the end of the string', ({ input, expected }) => {
			expect(input.filter(isTrimmable)).toEqual(expected);
		});
	});

	describe('isTrimmableStart', () => {
		it.each([
			{
				input: someTrimmableStrings,
				expected: [' a', ' a ', '  aa     '],
			},
		])('filters based on the end of the string', ({ input, expected }) => {
			expect(input.filter(isTrimmableStart)).toEqual(expected);
		});
	});

	describe('isTrimmableEnd', () => {
		it.each([
			{
				input: someTrimmableStrings,
				expected: ['a ', ' a ', '  aa     '],
			},
		])('filters based on the end of the string', ({ input, expected }) => {
			expect(input.filter(isTrimmableEnd)).toEqual(expected);
		});
	});
	describe('isEmail', () => {
		it.each([
			{
				input: [
					'a',
					'aa',
					'aa',
					'a@a.a',
					'a@aa.a',
					'a@aaa.a',
					'a@aaa.aa',
					'a@aaa.aaa',
					'aa@aaa.aaa',
					'a a@aaa.aaa',
					'aa@aa a.aaa',
					'aa@aaa.aa a',
					'a"a@aaa.aaa',
					'a🟠a@aaa.aaa',
				],
				expected: ['a@a.a', 'a@aa.a', 'a@aaa.a', 'a@aaa.aa', 'a@aaa.aaa', 'aa@aaa.aaa'],
			},
		])('filters based on the end of the string', ({ input, expected }) => {
			expect(input.filter(isEmail)).toEqual(expected);
		});
	});
	describe('isPalindrome', () => {
		it.each([
			{
				input: ['a', 'aa', 'aba', 'abba', 'ab🟠 🟠ba', 'abbaa', 'ab'],
				expected: ['a', 'aa', 'aba', 'abba'],
			},
		])('filters based on the end of the string', ({ input, expected }) => {
			expect(input.filter(isPalindrome)).toEqual(expected);
		});
	});
});
