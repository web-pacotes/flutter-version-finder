import { describe, expect, test } from '@jest/globals';
import matcher from './matcher';
import { FallbackStableVersion, UnknownDartVersion, Version } from './version';

describe('matcher', function () {
	describe('dart', function () {
		test('single known version should match single version', () => {
			const version = '3.0.0';

			const matchedVersion = matcher(version);
			const expectedVersion = <Version>{
				flutter: '3.10.0',
				dart: '3.0.0',
				channel: 'stable'
			};

			expect(matchedVersion).toMatchObject(expectedVersion);
		});

		test('multiple known versions should match latest supported version', () => {
			const version = '2.19.6';

			const matchedVersion = matcher(version);
			const expectedVersion = <Version>{
				flutter: '3.7.12',
				dart: '2.19.6',
				channel: 'stable'
			};

			expect(matchedVersion).toMatchObject(expectedVersion);
		});

		test('unknown version should match fallback version', () => {
			const version = UnknownDartVersion;

			const matchedVersion = matcher(version);
			const expectedVersion = FallbackStableVersion;

			expect(matchedVersion).toMatchObject(expectedVersion);
		});
	});

	describe('channel', function () {
		test('stable channel always matches a stable channel version, even if version is not available', () => {
			const version = '11.0.0';
			const channel = 'stable';

			const matchedVersion = matcher(version, channel);
			const expectedVersion = <Pick<Version, 'channel'>>{ channel: 'stable' };

			expect(matchedVersion).toMatchObject(expectedVersion);
		});

		test('beta channel always matches a beta channel version', () => {
			const version = '11.0.0';
			const channel = 'beta';

			const matchedVersion = matcher(version, channel);
			const expectedVersion = <Pick<Version, 'channel'>>{ channel: 'beta' };

			expect(matchedVersion).toMatchObject(expectedVersion);
		});
	});
});
