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

const toDate = (s: string) => new Date(s);

describe('date', () => {
	describe('isSameDate', () => {
		it.each([
			{
				comparison: '2024-06-01',
				input: ['2024-06-01', '2024-06-02'],
				expected: ['2024-06-01'],
			},
			{
				comparison: '2024-06-01 00:00:01',
				input: ['2024-06-01 00:00:01', '2024-06-01 00:00:00', '2024-06-01 00:00:02'],
				expected: ['2024-06-01 00:00:01'],
			},
		])('', ({ comparison, input, expected }) => {
			expect(input.map(toDate).filter(isSameDate(new Date(comparison)))).toEqual(expected.map(toDate));
		});
	});

	describe('isFutureDate', () => {
		it.each([
			{
				comparison: '2024-06-01',
				input: ['2024-06-02', '2024-06-01', '2024-05-31'],
				expected: ['2024-06-02'],
			},
			{
				comparison: '2024-06-01 00:00:01',
				input: ['2024-06-01 00:00:02', '2024-06-01 00:00:01', '2024-06-01 00:00:00'],
				expected: ['2024-06-01 00:00:02'],
			},
		])('', ({ comparison, input, expected }) => {
			expect(input.map(toDate).filter(isFutureDate(new Date(comparison)))).toEqual(
				expected.map(toDate)
			);
		});
	});

	describe('isPastDate', () => {
		it.each([
			{
				comparison: '2024-06-01',
				input: ['2024-05-31', '2024-06-01', '2024-06-02'],
				expected: ['2024-05-31'],
			},
			{
				comparison: '2024-06-01 00:00:01',
				input: ['2024-06-01 00:00:00', '2024-06-01 00:00:01'],
				expected: ['2024-06-01 00:00:00'],
			},
		])('', ({ comparison, input, expected }) => {
			expect(input.map(toDate).filter(isPastDate(new Date(comparison)))).toEqual(expected.map(toDate));
		});
	});

	describe('isFutureOrSameDate', () => {
		it.each([
			{
				comparison: '2024-06-01',
				input: ['2024-05-31', '2024-06-01', '2024-06-02'],
				expected: ['2024-06-01', '2024-06-02'],
			},
			{
				comparison: '2024-06-01 00:00:01',
				input: ['2024-06-01 00:00:00', '2024-06-01 00:00:01', '2024-06-01 00:00:02'],
				expected: ['2024-06-01 00:00:01', '2024-06-01 00:00:02'],
			},
		])('', ({ comparison, input, expected }) => {
			expect(input.map(toDate).filter(isFutureOrSameDate(new Date(comparison)))).toEqual(
				expected.map(toDate)
			);
		});
	});

	describe('isPastOrSameDate', () => {
		it.each([
			{
				comparison: '2024-06-01',
				input: ['2024-05-31', '2024-06-01', '2024-06-02'],
				expected: ['2024-05-31', '2024-06-01'],
			},
			{
				comparison: '2024-06-01 00:00:01',
				input: ['2024-06-01 00:00:00', '2024-06-01 00:00:01', '2024-06-01 00:00:02'],
				expected: ['2024-06-01 00:00:00', '2024-06-01 00:00:01'],
			},
		])('', ({ comparison, input, expected }) => {
			expect(input.map(toDate).filter(isPastOrSameDate(new Date(comparison)))).toEqual(
				expected.map(toDate)
			);
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
			{
				input: ['2024-08-16', '2024-08-17', '2024-08-18', '2024-08-19'],
				expected: ['2024-08-17', '2024-08-18'],
			},
		])('', ({ input, expected }) => {
			expect(input.map(toDate).filter(isWeekend)).toEqual(expected.map(toDate));
		});
	});

	describe('isWorkingWeek', () => {
		it.each([
			{
				input: ['2024-08-16', '2024-08-17', '2024-08-18', '2024-08-19'],
				expected: ['2024-08-16', '2024-08-19'],
			},
		])('', ({ input, expected }) => {
			expect(input.map(toDate).filter(isWorkingWeek)).toEqual(expected.map(toDate));
		});
	});

	describe('isLeapYear', () => {
		it.each([
			{
				input: ['2024-05-01', '2023-05-01', '2100-05-01', '1900-05-01', '2000-05-01'],
				expected: ['2024-05-01', '2000-05-01'],
			},
		])('', ({ input, expected }) => {
			expect(input.map(toDate).filter(isLeapYear)).toEqual(expected.map(toDate));
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
		comparison: string;
		input: string;
		expected: boolean;
		label?: string;
	};

	describe('isSame', () => {
		it.each<TIsSameTestCase>([
			{ type: 'year', comparison: '2024-06-01', input: '2024-01-01', expected: true },
			{ type: 'year', comparison: '2024-06-01', input: '2026-06-01', expected: false },
			{ type: 'month', comparison: '2024-06-01', input: '2026-06-01', expected: true },
			{ type: 'month', comparison: '2024-06-01', input: '2024-07-01', expected: false },
			{ type: 'day', comparison: '2024-06-01', input: '2011-08-01', expected: true },
			{ type: 'day', comparison: '2024-06-01', input: '2024-06-02', expected: false },
			{ type: 'dayOfTheWeek', comparison: '2024-06-01', input: '2024-06-01', expected: true },
			{ type: 'dayOfTheWeek', comparison: '2024-06-01', input: '2024-06-08', expected: true },
			{ type: 'dayOfTheWeek', comparison: '2024-06-01', input: '2024-06-15', expected: true },
			{ type: 'dayOfTheWeek', comparison: '2024-06-01', input: '2024-06-02', expected: false },
			{ type: 'hours', comparison: '2024-06-01', input: '2024-06-01', expected: true },
			{ type: 'hours', comparison: '2024-06-01 00:01', input: '2024-06-01 00:02', expected: true },
			{ type: 'hours', comparison: '2024-06-01 00:01', input: '2000-02-14 00:52', expected: true },
			{ type: 'hours', comparison: '2024-06-01 00:01', input: '2000-02-14 01:52', expected: false },

			{ type: 'minutes', comparison: '2024-06-01', input: '2024-06-01', expected: true },
			{
				type: 'minutes',
				comparison: '2024-06-01 00:01',
				input: '2024-06-01 01:01',
				expected: true,
			},
			{
				type: 'minutes',
				comparison: '2024-06-01 00:01',
				input: '2000-02-14 07:01',
				expected: true,
			},
			{
				type: 'minutes',
				comparison: '2024-06-01 00:01',
				input: '2000-02-14 00:52',
				expected: false,
			},
		])('', ({ type, comparison, input, expected }) => {
			expect(isSame(type)(new Date(comparison))(new Date(input))).toEqual(expected);
		});
	});

	describe('isSameYearToDate', () => {
		it.each([
			{
				comparison: '2024-06-01',
				input: ['2024-01-01', '2023-12-31', '2024-03-01', '2024-06-01', '2024-06-02', '2024-12-31'],
				expected: ['2024-01-01', '2024-03-01', '2024-06-01'],
			},
		])('', ({ comparison, input, expected }) => {
			expect(input.map(toDate).filter(isSameYearToDate(new Date(comparison)))).toEqual(
				expected.map(toDate)
			);
		});
	});

	describe('isSameYearMonth', () => {
		it.each([
			{
				comparison: '2024-06-01',
				input: ['2024-06-01', '2024-06-30', '2024-05-31', '2024-07-01', '2025-06-01'],
				expected: ['2024-06-01', '2024-06-30'],
			},
		])('', ({ comparison, input, expected }) => {
			expect(input.map(toDate).filter(isSameYearMonth(new Date(comparison)))).toEqual(
				expected.map(toDate)
			);
		});
	});

	describe('isSameMonthDay', () => {
		it.each([
			{
				comparison: '2024-06-01',
				input: ['2024-06-01', '2023-06-01', '2024-06-02', '2024-05-01', '2023-05-01'],
				expected: ['2024-06-01', '2023-06-01'],
			},
		])('', ({ comparison, input, expected }) => {
			expect(input.map(toDate).filter(isSameMonthDay(new Date(comparison)))).toEqual(
				expected.map(toDate)
			);
		});
	});

	describe('isSameYearMonthDay', () => {
		it.each([
			{
				comparison: '2024-06-01 00:00',
				input: ['2024-06-01 00:01'],
				expected: ['2024-06-01 00:01'],
			},
			{
				comparison: '2024-06-01',
				input: ['2024-06-01', '2024-06-02', '2024-07-01', '2023-06-01'],
				expected: ['2024-06-01'],
			},
		])('', ({ comparison, input, expected }) => {
			expect(input.map(toDate).filter(isSameYearMonthDay(new Date(comparison)))).toEqual(
				expected.map(toDate)
			);
		});
	});

	describe('isSameHoursMinutes', () => {
		it.each([
			{
				comparison: '2024-06-01',
				input: ['2024-06-01', '2024-06-01'],
				expected: ['2024-06-01', '2024-06-01'],
			},
			{
				comparison: '2024-06-01 00:00:00',
				input: ['2024-06-01 00:00:00', '2023-07-02 00:00:00', '2023-07-02 00:00:01'],
				expected: ['2024-06-01 00:00:00', '2023-07-02 00:00:00', '2023-07-02 00:00:01'],
			},
		])('', ({ comparison, input, expected }) => {
			expect(input.map(toDate).filter(isSameHoursMinutes(new Date(comparison)))).toEqual(
				expected.map(toDate)
			);
		});
	});

	describe('isSameYearMonthDayHours', () => {
		it.each([
			{ comparison: '2024-06-01', input: ['2024-06-01'], expected: ['2024-06-01'] },
			{
				comparison: '2024-06-01 00:00',
				input: [
					'2024-06-01 00:00:00',
					'2024-06-01 00:00:01',
					'2024-06-01 00:01:00',
					'2024-06-01 01:00',
					'2024-06-02 00:00',
					'2024-07-01 00:00',
					'2025-06-01 00:00',
					'2025-07-02 01:01',
				],
				expected: ['2024-06-01 00:00:00', '2024-06-01 00:00:01', '2024-06-01 00:01:00'],
			},
		])('', ({ comparison, input, expected }) => {
			expect(input.map(toDate).filter(isSameYearMonthDayHours(new Date(comparison)))).toEqual(
				expected.map(toDate)
			);
		});
	});

	describe('isSameYearMonthDayHoursMinutes', () => {
		it.each([
			{ comparison: '2024-06-01', input: ['2024-06-01'], expected: ['2024-06-01'] },
			{
				comparison: '2024-06-01 00:00',
				input: [
					'2024-06-01 00:00:00',
					'2024-06-01 00:00:01',
					'2024-06-01 00:01:01',
					'2024-06-01 00:00',
					'2024-06-01 00:01',
					'2024-06-01 01:00',
					'2024-06-02 00:00',
					'2024-07-01 00:00',
					'2025-06-01 00:00',
					'2025-07-02 01:01',
				],
				expected: ['2024-06-01 00:00:00', '2024-06-01 00:00:01', '2024-06-01 00:00'],
			},
		])('', ({ comparison, input, expected }) => {
			expect(input.map(toDate).filter(isSameYearMonthDayHoursMinutes(new Date(comparison)))).toEqual(
				expected.map(toDate)
			);
		});
	});
});
