# flutter-version-finder

Micro library that finds the appropriate Flutter version to use on a Flutter project

![npm version](https://badgen.net/npm/v/@web-pacotes/flutter-version-finder) ![npm total downloads](https://badgen.net/npm/dt/@web-pacotes/flutter-version-finder) ![bundlephobia bundle size](https://badgen.net/bundlephobia/min/@web-pacotes/flutter-version-finder)

---

## How to use

To use this package, start by reading the content of a `pubspec.yaml` or `pubspec.lock` file. Then, import the finder function and feed it the file content.

```typescript
import { default as finder } from 'flutter-version-finder';
import { readFileSync } from 'fs';

// Read the content of a pubspec.yaml or pubspec.lock file
const path = 'example/example.lock';

const data = readFileSync(path).toString();

// Find the matching Flutter version
const result = finder(data);

// Hoooraaaay! It should print the Flutter version that is compatible with the lock file
console.log(result); // { flutter: '3.10.0', dart: '3.0.0' }
```

Additionally, you can finder Flutter versions directly from the CLI:

```bash
npx flutter-version-finder --path=example/example.lock
```

## Features

- Find supported Flutter version from `pubspec.yaml`
- Find supported Flutter version from `pubspec.lock`

---

## Scripts

- `npm run build` to transpile and bundle files in `.cjs`, `.js`, `.d.ts` and respective source-maps
- `npm run start` to run the project with `swc` compilation

- `npm run test` to run the unit tests
- `npm run lint` to analyze and lint the project
- `npm run format` to format the project based on lint feedback
- `npm run docs` to generate docs site
- `npm run docs:publish` to generate docs site and publish it to GitHub Pages

- `npm run release` to create the temporary changesets file
- `npm run publish` to publish the package to NPM

## Hooks

This repository is configured with client-side Git hooks that automatically format + lint the codebase before each push. You can install it by running the following command:

```bash
./hooks/INSTALL
```

## Automatically Publishing to NPM

To automatically publish the package to NPM, you will need to grab a token of the publisher account for CI usage, and set it as a repository secret in GitHub under the `NPM_TOKEN` identifier.

---

### Bugs and Contributions

Found any bug (including typos) in the package? Do you have any suggestion
or feature to include for future releases? Please create an issue via
GitHub in order to track each contribution. Also, pull requests are very
welcome!
