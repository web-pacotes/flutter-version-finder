import {
	Channel,
	ComparableVersion,
	FallbackBetaVersion,
	FallbackStableVersion,
	UnknownDartVersion,
	SupportedVersions,
	versionToNumber
} from './version';

/**
 * Finds the supported {@link Version} for a specific Flutter project, by matching the supported Dart version.
 *
 * @param dart - A string that identifies the Dart version in the semantic versioning format
 * @returns The matched {@link Version} or as a fallback {@link FallbackStableVersion}
 */
export default function (
	dart: string,
	channel: Channel = 'stable'
): ComparableVersion {
	const version = dart;

	if (version === UnknownDartVersion) {
		return FallbackStableVersion;
	}

	const dartVersionNumber = versionToNumber(dart);

	const supportedVersion = SupportedVersions.find(
		(x) => x.dartNumber === dartVersionNumber && x.channel === channel
	);

	if (supportedVersion) {
		return supportedVersion;
	}

	const higherVersions = SupportedVersions.filter(
		(x) => x.dartNumber > dartVersionNumber && x.channel === channel
	);

	return higherVersions.length > 0
		? higherVersions[higherVersions.length - 1]
		: channel === 'stable'
		? FallbackStableVersion
		: FallbackBetaVersion;
}
