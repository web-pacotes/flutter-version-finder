import { describe, expect, test } from '@jest/globals';
import matcher from './matcher';
import { FallbackVersion, Version } from './version';

describe('matcher', function () {
	describe('dart', function () {
		test('single known version should match single version', () => {
			const version = '3.0.0';

			const matchedVersion = matcher(version);
			const expectedVersion = <Version>{ flutter: '3.10.0', dart: '3.0.0' };

			expect(matchedVersion).toStrictEqual(expectedVersion);
		});

		test('multiple known versions should match latest supported version', () => {
			const version = '2.19.6';

			const matchedVersion = matcher(version);
			const expectedVersion = <Version>{ flutter: '3.7.12', dart: '2.19.6' };

			expect(matchedVersion).toStrictEqual(expectedVersion);
		});

		test('unknown version should match fallback version', () => {
			const version = '?';

			const matchedVersion = matcher(version);
			const expectedVersion = FallbackVersion;

			expect(matchedVersion).toStrictEqual(expectedVersion);
		});
	});
});
