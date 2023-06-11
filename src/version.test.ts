import { describe, expect, test } from '@jest/globals';
import { versionToNumber } from './version';

describe('version', function () {
	describe('versionToNumber', function () {
		test('returns 0 if version is equal to "-"', () => {
			const version = '-';

			const versionNumber = versionToNumber(version);
			const expectedVersionNumber = 0;

			expect(versionNumber).toStrictEqual(expectedVersionNumber);
		});

		test('returns 101 if version is "1.0.0"', () => {
			const version = '1.0.0';

			const versionNumber = versionToNumber(version);
			const expectedVersionNumber = 100;

			expect(versionNumber).toStrictEqual(expectedVersionNumber);
		});

		test('returns 211 if version is "2.1.0"', () => {
			const version = '2.1.0';

			const versionNumber = versionToNumber(version);
			const expectedVersionNumber = 610;

			expect(versionNumber).toStrictEqual(expectedVersionNumber);
		});

		test('returns 322 if version is "3.2.1"', () => {
			const version = '3.2.1';

			const versionNumber = versionToNumber(version);
			const expectedVersionNumber = 921;

			expect(versionNumber).toStrictEqual(expectedVersionNumber);
		});
	});
});
