import supportedVersions, { FallbackVersion, Version } from './version';

/**
 * Finds the supported {@link Version} for a specific Flutter project, by matching the supported Dart version.
 *
 * @param dart - A string that identifies the Dart version in the semantic versioning format
 * @returns The matched {@link Version} or as a fallback {@link FallbackVersion}
 */
export default function (dart: string): Version {
	const version = dart;

	const supportedVersion = supportedVersions.find((x) => x.dart === version);

	if (supportedVersion) {
		return supportedVersion;
	}

	const higherVersions = supportedVersions.filter((x) => x.dart > version);

	return higherVersions.length > 0
		? higherVersions[higherVersions.length - 1]
		: FallbackVersion;
}
