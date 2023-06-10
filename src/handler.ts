import matcher from './matcher';
import parse from './parser';
import {
	Channel,
	UnknownDartVersion,
	Version,
	versionToNumber
} from './version';

/**
 * Find the supported Flutter version for a pubspec.yaml/lock file.
 *
 * @param yaml - A string describing the content of the pubspec file.
 * @returns The matched {@link Version} that is supported  for the project described by the pubspec file.
 */
export default function (yaml: string, channel?: Channel): Version {
	const versions = parse(yaml);
	const parsedFlutterVersion = versions.flutter;
	const parsedDartVersion = versions.dart ?? UnknownDartVersion;

	const matchedVersion = matcher(parsedDartVersion, channel);

	if (!parsedFlutterVersion) {
		return matchedVersion;
	}

	const parsedFlutterVersionNumber = versionToNumber(parsedFlutterVersion);

	if (matchedVersion.flutterNumber >= parsedFlutterVersionNumber) {
		return matchedVersion;
	}

	return <Version>{
		...matchedVersion,
		flutter: parsedFlutterVersion
	};
}
