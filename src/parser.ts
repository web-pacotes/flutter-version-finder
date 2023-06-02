const lockDartVersionRegex = /dart: ["|'](.){0,2}(([0-9]{1,}\.*){3})(.*)["|']/g;
const yamlDartVersionRegex = /sdk: ["|'](.){0,2}(([0-9]{1,}\.*){3})(.*)["|']/g;

/**
 * Extracts the Dart version supported in a Flutter project from a pubspec file. This file can be either the pubspec.lock or pubspec.yaml file.
 *
 * @param - yaml A string describing the content of the pubspec file
 * @returns The extracted version as a string, undefined if no Dart version could be found
 */
export default function (yaml: string) {
	return extractDartVersionFromLock(yaml) ?? extractDartVersionFromYAML(yaml);
}

function extractDartVersionFromLock(yaml: string) {
	lockDartVersionRegex.lastIndex = 0;

	return lockDartVersionRegex.exec(yaml)?.at(2);
}

function extractDartVersionFromYAML(yaml: string) {
	yamlDartVersionRegex.lastIndex = 0;

	return yamlDartVersionRegex.exec(yaml)?.at(2);
}
