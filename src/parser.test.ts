import { describe, expect, test } from '@jest/globals';
import parser from './parser';
import { ChannelessVersion } from './version';

describe('parser', function () {
	describe('pubspec.lock', function () {
		describe('dart', function () {
			test('is able to parse versions without pre-releases', () => {
				const yaml = `dart: ">=3.0.0 <4.0.0"`;

				const matchedVersion = parser(yaml);
				const expectedVersion = <ChannelessVersion>{ dart: '3.0.0' };

				expect(matchedVersion).toMatchObject(expectedVersion);
			});

			test('is able to parse versions with pre-releases', () => {
				const yaml = `dart: ">=3.0.0-0 <4.0.0"`;

				const matchedVersion = parser(yaml);
				const expectedVersion = <ChannelessVersion>{ dart: '3.0.0' };

				expect(matchedVersion).toMatchObject(expectedVersion);
			});

			test('is able to parse versions with multiple digits', () => {
				const yaml = `dart: ">=333.22.99-5555 <4.0.0"`;

				const matchedVersion = parser(yaml);
				const expectedVersion = <ChannelessVersion>{ dart: '333.22.99' };

				expect(matchedVersion).toMatchObject(expectedVersion);
			});

			test('is able to parse versions without versions ranging', () => {
				const yaml = `dart: "3.0.0"`;

				const matchedVersion = parser(yaml);
				const expectedVersion = <ChannelessVersion>{ dart: '3.0.0' };

				expect(matchedVersion).toMatchObject(expectedVersion);
			});

			test('is able to parse versions with single ticks', () => {
				const yaml = `dart: '3.0.0'`;

				const matchedVersion = parser(yaml);
				const expectedVersion = <ChannelessVersion>{ dart: '3.0.0' };

				expect(matchedVersion).toMatchObject(expectedVersion);
			});
		});

		describe('flutter', function () {
			test('is able to parse versions without pre-releases', () => {
				const yaml = `flutter: ">=3.0.0 <4.0.0"`;

				const matchedVersion = parser(yaml);
				const expectedVersion = <ChannelessVersion>{ flutter: '3.0.0' };

				expect(matchedVersion).toMatchObject(expectedVersion);
			});

			test('is able to parse versions with pre-releases', () => {
				const yaml = `flutter: ">=3.0.0-0 <4.0.0"`;

				const matchedVersion = parser(yaml);
				const expectedVersion = <ChannelessVersion>{ flutter: '3.0.0' };

				expect(matchedVersion).toMatchObject(expectedVersion);
			});

			test('is able to parse versions with multiple digits', () => {
				const yaml = `flutter: ">=333.22.99-5555 <4.0.0"`;

				const matchedVersion = parser(yaml);
				const expectedVersion = <ChannelessVersion>{ flutter: '333.22.99' };

				expect(matchedVersion).toMatchObject(expectedVersion);
			});

			test('is able to parse versions without versions ranging', () => {
				const yaml = `flutter: "3.0.0"`;

				const matchedVersion = parser(yaml);
				const expectedVersion = <ChannelessVersion>{ flutter: '3.0.0' };

				expect(matchedVersion).toMatchObject(expectedVersion);
			});

			test('is able to parse versions with single ticks', () => {
				const yaml = `flutter: '3.0.0'`;

				const matchedVersion = parser(yaml);
				const expectedVersion = <ChannelessVersion>{ flutter: '3.0.0' };

				expect(matchedVersion).toMatchObject(expectedVersion);
			});
		});
	});

	describe('pubspec.yaml', function () {
		describe('dart', function () {
			test('is able to parse versions without pre-releases', () => {
				const yaml = `sdk: '>=3.0.0 <4.0.0'`;

				const matchedVersion = parser(yaml);
				const expectedVersion = <ChannelessVersion>{ dart: '3.0.0' };

				expect(matchedVersion).toMatchObject(expectedVersion);
			});

			test('is able to parse versions with pre-releases', () => {
				const yaml = `sdk: '>=3.0.0-0 <4.0.0'`;

				const matchedVersion = parser(yaml);
				const expectedVersion = <ChannelessVersion>{ dart: '3.0.0' };

				expect(matchedVersion).toMatchObject(expectedVersion);
			});

			test('is able to parse versions with multiple digits', () => {
				const yaml = `sdk: '>=333.22.99-5555 <4.0.0'`;

				const matchedVersion = parser(yaml);
				const expectedVersion = <ChannelessVersion>{ dart: '333.22.99' };

				expect(matchedVersion).toMatchObject(expectedVersion);
			});

			test('is able to parse versions without versions ranging', () => {
				const yaml = `sdk: '3.0.0'`;

				const matchedVersion = parser(yaml);
				const expectedVersion = <ChannelessVersion>{ dart: '3.0.0' };

				expect(matchedVersion).toMatchObject(expectedVersion);
			});

			test('is able to parse versions with double quotes', () => {
				const yaml = `sdk: "3.0.0"`;

				const matchedVersion = parser(yaml);
				const expectedVersion = <ChannelessVersion>{ dart: '3.0.0' };

				expect(matchedVersion).toMatchObject(expectedVersion);
			});
		});
	});
});
