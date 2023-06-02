import { default as finder } from 'flutter-version-finder';
import { readFileSync } from 'fs';

function main() {
	// Read the content of a pubspec.yaml or pubspec.lock file
	const path = 'example/example.lock';

	const data = readFileSync(path).toString();

	// Find the matching Flutter version
	const result = finder(data);

	// Hoooraaaay! It should print the Flutter version that is compatible with the lock file
	console.log(result);
}

main();
