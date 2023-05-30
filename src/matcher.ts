import supportedVersions, { FallbackVersion, Version } from './version';

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
