import versions from './version.supported';

/**
 * The, channel in which the version is available
 */
export type Channel = 'stable' | 'beta';

/**
 * Defines an association of a Flutter version with its compatible Dart version
 */
export type Version = {
	flutter: string;
	dart: string;
	channel: Channel;
};

export type ChannelessVersion = Partial<Omit<Version, 'channel'>>;

export type ComparableVersion = {
	flutterNumber: number;
	dartNumber: number;
} & Version;

export const SupportedVersions = versions.map(
	(x) => <ComparableVersion>{ ...x }
) satisfies ComparableVersion[];

export const FallbackStableVersion = <ComparableVersion>{
	...SupportedVersions.find((x) => x.channel === 'stable')
};
export const FallbackBetaVersion = <ComparableVersion>{
	...SupportedVersions.find((x) => x.channel === 'beta')
};
export const UnknownDartVersion = '?';

/**
 * Converts a version in the semantic versioning schema in a number
 * @param version - Semantic version number to be converted
 * @returns Parsed number or 0 if passed version is '-'
 */
export function versionToNumber(version: string) {
	if (version === '-') {
		return 0;
	}

	const versionSplit = version
		.replace(/-|\+|[a-z]/g, '')
		.split('.')
		.filter((x) => x !== '');

	return versionSplit.reduce((p, c, i) => p + versionPartToNumber(c, i), 0);
}

function versionPartToNumber(part: string, index: number) {
	const base =
		10 ** (2 - index) *
		Number.parseInt(part) *
		(index === 0 && part > '1' ? (index + 1) * 3 : 1);

	if (part.length === 1) {
		return base;
	}

	return base + Number.parseInt(part.slice(1));
}
