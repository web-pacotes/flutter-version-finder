import { describe, expect, test } from '@jest/globals';
import parser from './parser';

describe('parser', function () {
	describe('pubspec.lock', function () {
		test('is able to parse versions without pre-releases', () => {
			const yaml = `dart: ">=3.0.0 <4.0.0"`;

			const matchedVersion = parser(yaml);
			const expectedVersion = '3.0.0';

			expect(matchedVersion).toStrictEqual(expectedVersion);
		});

		test('is able to parse versions with pre-releases', () => {
			const yaml = `dart: ">=3.0.0-0 <4.0.0"`;

			const matchedVersion = parser(yaml);
			const expectedVersion = '3.0.0';

			expect(matchedVersion).toStrictEqual(expectedVersion);
		});

		test('is able to parse versions with multiple digits', () => {
			const yaml = `dart: ">=333.22.99-5555 <4.0.0"`;

			const matchedVersion = parser(yaml);
			const expectedVersion = '333.22.99';

			expect(matchedVersion).toStrictEqual(expectedVersion);
		});

		test('is able to parse versions without versions ranging', () => {
			const yaml = `dart: "3.0.0"`;

			const matchedVersion = parser(yaml);
			const expectedVersion = '3.0.0';

			expect(matchedVersion).toStrictEqual(expectedVersion);
		});

		test('is able to parse versions with single ticks', () => {
			const yaml = `dart: '3.0.0'`;

			const matchedVersion = parser(yaml);
			const expectedVersion = '3.0.0';

			expect(matchedVersion).toStrictEqual(expectedVersion);
		});
	});

	describe('pubspec.yaml', function () {
		test('is able to parse versions without pre-releases', () => {
			const yaml = `sdk: '>=3.0.0 <4.0.0'`;

			const matchedVersion = parser(yaml);
			const expectedVersion = '3.0.0';

			expect(matchedVersion).toStrictEqual(expectedVersion);
		});

		test('is able to parse versions with pre-releases', () => {
			const yaml = `sdk: '>=3.0.0-0 <4.0.0'`;

			const matchedVersion = parser(yaml);
			const expectedVersion = '3.0.0';

			expect(matchedVersion).toStrictEqual(expectedVersion);
		});

		test('is able to parse versions with multiple digits', () => {
			const yaml = `sdk: '>=333.22.99-5555 <4.0.0'`;

			const matchedVersion = parser(yaml);
			const expectedVersion = '333.22.99';

			expect(matchedVersion).toStrictEqual(expectedVersion);
		});

		test('is able to parse versions without versions ranging', () => {
			const yaml = `sdk: '3.0.0'`;

			const matchedVersion = parser(yaml);
			const expectedVersion = '3.0.0';

			expect(matchedVersion).toStrictEqual(expectedVersion);
		});

		test('is able to parse versions with double quotes', () => {
			const yaml = `sdk: "3.0.0"`;

			const matchedVersion = parser(yaml);
			const expectedVersion = '3.0.0';

			expect(matchedVersion).toStrictEqual(expectedVersion);
		});
	});
});
