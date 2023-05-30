const lockYAMLDartVersionRegex = /dart: "(.){0,2}(([0-9]\.*){3})(.*)"/g;
const noLockYAMLDartVersionRegex = /sdk: '(.){0,2}(([0-9]{1,}\.*){3})(.*)'/g;

export default function (yaml: string) {
	return (
		extractDartVersionFromLockYAML(yaml) ?? extractDartVersionFromYAML(yaml)
	);
}

function extractDartVersionFromLockYAML(yaml: string) {
	return lockYAMLDartVersionRegex.exec(yaml)?.at(2);
}

function extractDartVersionFromYAML(yaml: string) {
	return noLockYAMLDartVersionRegex.exec(yaml)?.at(2);
}
