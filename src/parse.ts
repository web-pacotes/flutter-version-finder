const lockDartVersionRegex = /dart: "(.){0,2}(([0-9]\.*){3})(.*)"/g;
const yamlDartVersionRegex = /sdk: '(.){0,2}(([0-9]{1,}\.*){3})(.*)'/g;

export default function (yaml: string) {
	return (
		extractDartVersionFromLock(yaml) ?? extractDartVersionFromYAML(yaml)
	);
}

function extractDartVersionFromLock(yaml: string) {
	return lockDartVersionRegex.exec(yaml)?.at(2);
}

function extractDartVersionFromYAML(yaml: string) {
	return yamlDartVersionRegex.exec(yaml)?.at(2);
}
