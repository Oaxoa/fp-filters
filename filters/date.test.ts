import {
	isBetweenDates,
	isDayOfTheWeek,
	isFutureDate,
	isFutureOrSameDate,
	isLeapYear,
	isPastDate,
	isPastOrSameDate,
	isSame,
	isSameDate,
	isSameHoursMinutes,
	isSameMonthDay,
	isSameYearMonth,
	isSameYearMonthDay,
	isSameYearMonthDayHours,
	isSameYearMonthDayHoursMinutes,
	isSameYearToDate,
	isWeekend,
	isWorkingWeek,
	TDateEntity,
	TDaysOfTheWeek,
} from './date';
import { addEmptyLabel } from '../utils';

describe('date', () => {
	describe('isSameDate', () => {
		it.each([
			{ comparisonDate: '2024-06-01', input: '2024-06-01', expected: true },
			{ comparisonDate: '2024-06-01', input: '2024-06-01 00:00:05', expected: false },
			{ comparisonDate: '2024-06-01 00:00:05', input: '2024-06-01 00:00:05', expected: true },
			{ comparisonDate: '2024-06-01', input: '2024-06-02', expected: false },
		])('', ({ comparisonDate, input, expected }) => {
			expect(isSameDate(new Date(comparisonDate))(new Date(input))).toEqual(expected);
		});
	});

	describe('isFutureDate', () => {
		it.each([
			{ comparisonDate: '2024-06-01', input: '2024-06-02', expected: true },
			{ comparisonDate: '2024-06-01', input: '2024-06-01', expected: false },
			{ comparisonDate: '2024-06-01', input: '2024-05-31', expected: false },
		])('', ({ comparisonDate, input, expected }) => {
			expect(isFutureDate(new Date(comparisonDate))(new Date(input))).toEqual(expected);
		});
	});

	describe('isPastDate', () => {
		it.each([
			{ comparisonDate: '2024-06-01', input: '2024-05-31', expected: true },
			{ comparisonDate: '2024-06-01', input: '2024-06-01', expected: false },
			{ comparisonDate: '2024-06-01', input: '2024-06-02', expected: false },
		])('', ({ comparisonDate, input, expected }) => {
			expect(isPastDate(new Date(comparisonDate))(new Date(input))).toEqual(expected);
		});
	});

	describe('isFutureOrSameDate', () => {
		it.each([
			{ comparisonDate: '2024-06-01', input: '2024-05-31', expected: false },
			{ comparisonDate: '2024-06-01', input: '2024-06-01', expected: true },
			{ comparisonDate: '2024-06-01', input: '2024-06-02', expected: true },
		])('', ({ comparisonDate, input, expected }) => {
			expect(isFutureOrSameDate(new Date(comparisonDate))(new Date(input))).toEqual(expected);
		});
	});

	describe('isPastOrSameDate', () => {
		it.each([
			{ comparisonDate: '2024-06-01', input: '2024-05-31', expected: true },
			{ comparisonDate: '2024-06-01', input: '2024-06-01', expected: true },
			{ comparisonDate: '2024-06-01', input: '2024-06-02', expected: false },
		])('', ({ comparisonDate, input, expected }) => {
			expect(isPastOrSameDate(new Date(comparisonDate))(new Date(input))).toEqual(expected);
		});
	});

	type TIsDayOfTheWeekTestCase = {
		input: string;
		day: TDaysOfTheWeek;
		expected: boolean;
	};

	describe('isDayOfTheWeek', () => {
		it.each<TIsDayOfTheWeekTestCase>([
			{ input: '1979-08-03', day: 'Friday', expected: true },
			{ input: '2024-08-17', day: 'Saturday', expected: true },
			{ input: '2024-08-24', day: 'Saturday', expected: true },
			{ input: '2024-08-25', day: 'Saturday', expected: false },
			{ input: '2024-08-25', day: 'Sunday', expected: true },
			{ input: '2024-08-26', day: 'Monday', expected: true },
		])('', ({ input, day, expected }) => {
			expect(isDayOfTheWeek(day)(new Date(input))).toEqual(expected);
		});
	});

	describe('isWeekend', () => {
		it.each([
			{ input: '2024-08-16', expected: false },
			{ input: '2024-08-17', expected: true },
			{ input: '2024-08-18', expected: true },
			{ input: '2024-08-19', expected: false },
		])('', ({ input, expected }) => {
			expect(isWeekend(new Date(input))).toEqual(expected);
		});
	});

	describe('isWorkingWeek', () => {
		it.each([
			{ input: '2024-08-16', expected: true },
			{ input: '2024-08-17', expected: false },
			{ input: '2024-08-18', expected: false },
			{ input: '2024-08-19', expected: true },
		])('', ({ input, expected }) => {
			expect(isWorkingWeek(new Date(input))).toEqual(expected);
		});
	});

	describe('isLeapYear', () => {
		it.each([
			{ input: '2024-01-01', expected: true },
			{ input: '2023-01-01', expected: false },
			{ input: '2100-01-01', expected: false },
			{ input: '1900-01-01', expected: false },
			{ input: '2000-01-01', expected: true },
		])('', ({ input, expected }) => {
			expect(isLeapYear(new Date(input))).toEqual(expected);
		});
	});

	describe('isBetweenDates', () => {
		it.each([
			{ begin: '2023-01-01', end: '2023-12-31', input: '2023-01-01', expected: true },
			{ begin: '2023-01-01', end: '2023-12-31', input: '2023-01-02', expected: true },
			{ begin: '2023-01-01', end: '2023-12-31', input: '2023-12-31', expected: true },
			{
				begin: '2023-01-01 00:00:01',
				end: '2023-01-01 00:00:03',
				input: '2023-01-01',
				expected: false,
			},
			{
				begin: '2023-01-01 00:00:01',
				end: '2023-01-01 00:00:03',
				input: '2023-01-01 00:00:02',
				expected: true,
			},
		])('', ({ begin, end, input, expected }) => {
			expect(isBetweenDates(new Date(begin), new Date(end))(new Date(input))).toEqual(expected);
		});
	});

	type TIsSameTestCase = {
		type: TDateEntity;
		comparisonDate: string;
		input: string;
		expected: boolean;
		label?: string;
	};

	describe('isSame', () => {
		it.each<TIsSameTestCase>([
			{ type: 'year', comparisonDate: '2024-06-01', input: '2024-01-01', expected: true },
			{ type: 'year', comparisonDate: '2024-06-01', input: '2026-06-01', expected: false },
			{ type: 'month', comparisonDate: '2024-06-01', input: '2026-06-01', expected: true },
			{ type: 'month', comparisonDate: '2024-06-01', input: '2024-07-01', expected: false },
			{ type: 'day', comparisonDate: '2024-06-01', input: '2011-08-01', expected: true },
			{ type: 'day', comparisonDate: '2024-06-01', input: '2024-06-02', expected: false },
			{ type: 'dayOfTheWeek', comparisonDate: '2024-06-01', input: '2024-06-01', expected: true },
			{ type: 'dayOfTheWeek', comparisonDate: '2024-06-01', input: '2024-06-08', expected: true },
			{ type: 'dayOfTheWeek', comparisonDate: '2024-06-01', input: '2024-06-15', expected: true },
			{ type: 'dayOfTheWeek', comparisonDate: '2024-06-01', input: '2024-06-02', expected: false },
			{ type: 'hours', comparisonDate: '2024-06-01', input: '2024-06-01', expected: true },
			{ type: 'hours', comparisonDate: '2024-06-01 00:01', input: '2024-06-01 00:02', expected: true },
			{ type: 'hours', comparisonDate: '2024-06-01 00:01', input: '2000-02-14 00:52', expected: true },
			{ type: 'hours', comparisonDate: '2024-06-01 00:01', input: '2000-02-14 01:52', expected: false },

			{ type: 'minutes', comparisonDate: '2024-06-01', input: '2024-06-01', expected: true },
			{
				label: 'same mins different hour',
				type: 'minutes',
				comparisonDate: '2024-06-01 00:01',
				input: '2024-06-01 01:01',
				expected: true,
			},
			{
				label: 'same mins different date',
				type: 'minutes',
				comparisonDate: '2024-06-01 00:01',
				input: '2000-02-14 07:01',
				expected: true,
			},
			{
				type: 'minutes',
				comparisonDate: '2024-06-01 00:01',
				input: '2000-02-14 00:52',
				expected: false,
			},
		])('$label', ({ type, comparisonDate, input, expected }) => {
			expect(isSame(type)(new Date(comparisonDate))(new Date(input))).toEqual(expected);
		});
	});

	describe('isSameYearToDate', () => {
		it.each([
			{ comparisonDate: '2024-06-01', input: '2024-01-01', expected: true },
			{ comparisonDate: '2024-06-01', input: '2023-12-31', expected: false },
			{ comparisonDate: '2024-06-01', input: '2024-03-01', expected: true },
			{ comparisonDate: '2024-06-01', input: '2024-06-01', expected: true },
			{ comparisonDate: '2024-06-01', input: '2024-06-02', expected: false },
			{ comparisonDate: '2024-06-01', input: '2024-12-31', expected: false },
		])('$label', ({ comparisonDate, input, expected }) => {
			expect(isSameYearToDate(new Date(comparisonDate))(new Date(input))).toEqual(expected);
		});
	});

	describe('isSameYearMonth', () => {
		it.each([
			{ comparisonDate: '2024-06-01', input: '2024-06-01', expected: true },
			{ comparisonDate: '2024-06-15', input: '2024-06-15', expected: true },
			{ comparisonDate: '2024-06-01', input: '2024-06-30', expected: true },
			{ comparisonDate: '2024-06-01', input: '2024-05-31', expected: false },
			{ comparisonDate: '2024-06-01', input: '2024-07-01', expected: false },
		])('$label', ({ comparisonDate, input, expected }) => {
			expect(isSameYearMonth(new Date(comparisonDate))(new Date(input))).toEqual(expected);
		});
	});

	describe('isSameMonthDay', () => {
		it.each(
			[
				{ comparisonDate: '2024-06-01', input: '2024-06-01', expected: true },
				{ comparisonDate: '2024-06-01', input: '2023-06-01', expected: true },
				{ label: 'Boh', comparisonDate: '2024-06-01', input: '2024-06-02', expected: false },
				{ comparisonDate: '2024-06-01', input: '2024-05-01', expected: false },
				{ comparisonDate: '2024-06-01', input: '2023-05-01', expected: false },
			].map(addEmptyLabel)
		)('$label', ({ comparisonDate, input, expected }) => {
			expect(isSameMonthDay(new Date(comparisonDate))(new Date(input))).toEqual(expected);
		});
	});

	describe('isSameYearMonthDay', () => {
		it.each(
			[
				{ comparisonDate: '2024-06-01', input: '2024-06-01', expected: true },
				{ comparisonDate: '2024-06-01 00:00', input: '2024-06-01 00:01', expected: true },
				{ comparisonDate: '2024-06-01', input: '2024-06-02', expected: false },
				{ comparisonDate: '2024-06-01', input: '2024-07-01', expected: false },
				{ comparisonDate: '2024-06-01', input: '2023-06-01', expected: false },
			].map(addEmptyLabel)
		)('$label', ({ comparisonDate, input, expected }) => {
			expect(isSameYearMonthDay(new Date(comparisonDate))(new Date(input))).toEqual(expected);
		});
	});
	describe('isSameHoursMinutes', () => {
		it.each(
			[
				{ comparisonDate: '2024-06-01', input: '2024-06-01', expected: true },
				{ comparisonDate: '2024-06-01', input: '2023-07-02', expected: true },
				{ comparisonDate: '2024-06-01 00:00:00', input: '2024-06-01 00:00:00', expected: true },
				{ comparisonDate: '2024-06-01 00:00:00', input: '2023-07-02 00:00:00', expected: true },
				{ comparisonDate: '2024-06-01 00:00:00', input: '2023-07-02 00:00:01', expected: true },
				{ comparisonDate: '2024-06-01 00:00:00', input: '2024-06-01 00:01:00', expected: false },
				{ comparisonDate: '2024-06-01 00:00:00', input: '2024-06-01 01:00:00', expected: false },
				{ comparisonDate: '2024-06-01 00:00:00', input: '2023-07-02 03:01:20', expected: false },
			].map(addEmptyLabel)
		)('$label', ({ comparisonDate, input, expected }) => {
			expect(isSameHoursMinutes(new Date(comparisonDate))(new Date(input))).toEqual(expected);
		});
	});
	describe('isSameYearMonthDayHours', () => {
		it.each(
			[
				{ comparisonDate: '2024-06-01', input: '2024-06-01', expected: true },
				{ comparisonDate: '2024-06-01 00:00', input: '2024-06-01 00:00', expected: true },
				{ comparisonDate: '2024-06-01 00:00', input: '2024-06-01 00:01', expected: true },
				{ comparisonDate: '2024-06-01 00:00', input: '2024-06-01 01:00', expected: false },
				{ comparisonDate: '2024-06-01 00:00', input: '2024-06-02 00:00', expected: false },
				{ comparisonDate: '2024-06-01 00:00', input: '2024-07-01 00:00', expected: false },
				{ comparisonDate: '2024-06-01 00:00', input: '2023-06-01 00:00', expected: false },
				{ comparisonDate: '2024-06-01 00:00', input: '2023-07-02 01:01', expected: false },
			].map(addEmptyLabel)
		)('$label', ({ comparisonDate, input, expected }) => {
			expect(isSameYearMonthDayHours(new Date(comparisonDate))(new Date(input))).toEqual(expected);
		});
	});
	describe('isSameYearMonthDayHoursMinutes', () => {
		it.each(
			[
				{ comparisonDate: '2024-06-01', input: '2024-06-01', expected: true },
				{ comparisonDate: '2024-06-01 00:00:00', input: '2024-06-01 00:00:00', expected: true },
				{ comparisonDate: '2024-06-01 00:00:00', input: '2024-06-01 00:00:01', expected: true },
				{ comparisonDate: '2024-06-01 00:00', input: '2024-06-01 00:00', expected: true },
				{ comparisonDate: '2024-06-01 00:00', input: '2024-06-01 00:01', expected: false },
				{ comparisonDate: '2024-06-01 00:00', input: '2024-06-01 01:00', expected: false },
				{ comparisonDate: '2024-06-01 00:00', input: '2024-06-02 00:00', expected: false },
				{ comparisonDate: '2024-06-01 00:00', input: '2024-07-01 00:00', expected: false },
				{ comparisonDate: '2024-06-01 00:00', input: '2023-06-01 00:00', expected: false },
				{ comparisonDate: '2024-06-01 00:00', input: '2023-07-02 01:01', expected: false },
			].map(addEmptyLabel)
		)('$label', ({ comparisonDate, input, expected }) => {
			expect(isSameYearMonthDayHoursMinutes(new Date(comparisonDate))(new Date(input))).toEqual(
				expected
			);
		});
	});
});
