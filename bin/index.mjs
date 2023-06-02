#!/usr/bin/env node

import { parseArgs } from 'util';
import { existsSync, readFileSync } from 'fs';

import pkg from '../dist/index.js';

const finder = pkg.default;

var args = process.argv.slice(2);

// fail safe
if (args.length === 0 || args.find((arg) => arg.match(/--?h(elp){0,1}/g))) {
	args = ['-h', 'true'];
}

const options = {
	help: {
		type: 'string',
		short: 'h',
		description: 'Displays available commands'
	},
	path: {
		type: 'string',
		short: 'p',
		description: 'Path to pubspec file'
	}
};

const { values } = parseArgs({ args, options });

if (values.help) {
	console.log(
		`flutter-version-finder: find the appropriate Flutter version to use on a Flutter project`
	);

	Object.entries(options).forEach(([k, v]) =>
		console.log(`  --${k}: ${v.description}`)
	);

	process.exit(0);
}

const path = values.path;

if (!existsSync(path)) {
	console.error(`could not locate pubspec file with path: ${path}`);

	process.exit(1);
}

const yaml = readFileSync(path);

const result = finder(yaml);

console.log(result);
