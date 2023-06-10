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

type ComparableVersion = {
	flutterNumber: number;
	dartNumber: number;
} & Version;

/**
 * A set of {@link Version} with all supported Flutter versions as described in https://docs.flutter.dev/release/archive.
 * 
 * To update this list you must use the following code snippet:
 * 
 * ```
 * function sem_version_number(sem_ver) {
		if (!sem_ver || sem_ver === '-') {
			return 0;
		}

		const versionSplit = sem_ver.replaceAll(/-|\+|[a-z]/g, '').split('.').filter((x) => x !== '');

		return versionSplit.reduce((p, c, i) => p + ((10 ** (2 - i) * Number.parseInt(c))), 1);
	}

	for (let i = 0; i < table.childElementCount; i++) {
		const flutterVersion = table.children[i].children[0].innerText;
		const dartVersion = table.children[i].children[4].innerText;
		const flutterVersionNumber = sem_version_number(flutterVersion);
		const dartVersionNumber = sem_version_number(dartVersion);

		console.log(`{ flutter: '${flutterVersion}', dart: '${dartVersion}', flutterNumber: ${flutterVersionNumber}, dartNumber: ${dartVersionNumber} channel: 'beta'}`)
	}
 * ```
 */
const supportedVersions = [
	{
		flutter: '3.10.4',
		dart: '3.0.3',
		flutterNumber: 405,
		dartNumber: 304,
		channel: 'stable'
	},
	{
		flutter: '3.10.3',
		dart: '3.0.3',
		flutterNumber: 404,
		dartNumber: 304,
		channel: 'stable'
	},
	{
		flutter: '3.10.2',
		dart: '3.0.2',
		flutterNumber: 403,
		dartNumber: 303,
		channel: 'stable'
	},
	{
		flutter: '3.10.1',
		dart: '3.0.1',
		flutterNumber: 402,
		dartNumber: 302,
		channel: 'stable'
	},
	{
		flutter: '3.10.0',
		dart: '3.0.0',
		flutterNumber: 401,
		dartNumber: 301,
		channel: 'stable'
	},
	{
		flutter: '3.7.12',
		dart: '2.19.6',
		flutterNumber: 383,
		dartNumber: 397,
		channel: 'stable'
	},
	{
		flutter: '3.7.11',
		dart: '2.19.6',
		flutterNumber: 382,
		dartNumber: 397,
		channel: 'stable'
	},
	{
		flutter: '3.7.10',
		dart: '2.19.6',
		flutterNumber: 381,
		dartNumber: 397,
		channel: 'stable'
	},
	{
		flutter: '3.7.9',
		dart: '2.19.6',
		flutterNumber: 380,
		dartNumber: 397,
		channel: 'stable'
	},
	{
		flutter: '3.7.8',
		dart: '2.19.5',
		flutterNumber: 379,
		dartNumber: 396,
		channel: 'stable'
	},
	{
		flutter: '3.7.7',
		dart: '2.19.4',
		flutterNumber: 378,
		dartNumber: 395,
		channel: 'stable'
	},
	{
		flutter: '3.7.6',
		dart: '2.19.3',
		flutterNumber: 377,
		dartNumber: 394,
		channel: 'stable'
	},
	{
		flutter: '3.7.5',
		dart: '2.19.2',
		flutterNumber: 376,
		dartNumber: 393,
		channel: 'stable'
	},
	{
		flutter: '3.7.4',
		dart: '2.19.2',
		flutterNumber: 375,
		dartNumber: 393,
		channel: 'stable'
	},
	{
		flutter: '3.7.3',
		dart: '2.19.2',
		flutterNumber: 374,
		dartNumber: 393,
		channel: 'stable'
	},
	{
		flutter: '3.7.2',
		dart: '2.19.2',
		flutterNumber: 373,
		dartNumber: 393,
		channel: 'stable'
	},
	{
		flutter: '3.7.1',
		dart: '2.19.1',
		flutterNumber: 372,
		dartNumber: 392,
		channel: 'stable'
	},
	{
		flutter: '3.7.0',
		dart: '2.19.0',
		flutterNumber: 371,
		dartNumber: 391,
		channel: 'stable'
	},
	{
		flutter: '3.3.10',
		dart: '2.18.6',
		flutterNumber: 341,
		dartNumber: 387,
		channel: 'stable'
	},
	{
		flutter: '3.3.9',
		dart: '2.18.5',
		flutterNumber: 340,
		dartNumber: 386,
		channel: 'stable'
	},
	{
		flutter: '3.3.8',
		dart: '2.18.4',
		flutterNumber: 339,
		dartNumber: 385,
		channel: 'stable'
	},
	{
		flutter: '3.3.7',
		dart: '2.18.4',
		flutterNumber: 338,
		dartNumber: 385,
		channel: 'stable'
	},
	{
		flutter: '3.3.6',
		dart: '2.18.2',
		flutterNumber: 337,
		dartNumber: 383,
		channel: 'stable'
	},
	{
		flutter: '3.3.5',
		dart: '2.18.2',
		flutterNumber: 336,
		dartNumber: 383,
		channel: 'stable'
	},
	{
		flutter: '3.3.4',
		dart: '2.18.2',
		flutterNumber: 335,
		dartNumber: 383,
		channel: 'stable'
	},
	{
		flutter: '3.3.3',
		dart: '2.18.2',
		flutterNumber: 334,
		dartNumber: 383,
		channel: 'stable'
	},
	{
		flutter: '3.3.2',
		dart: '2.18.1',
		flutterNumber: 333,
		dartNumber: 382,
		channel: 'stable'
	},
	{
		flutter: '3.3.1',
		dart: '2.18.0',
		flutterNumber: 332,
		dartNumber: 381,
		channel: 'stable'
	},
	{
		flutter: '3.3.0',
		dart: '2.18.0',
		flutterNumber: 331,
		dartNumber: 381,
		channel: 'stable'
	},
	{
		flutter: '3.0.5',
		dart: '2.17.6',
		flutterNumber: 306,
		dartNumber: 377,
		channel: 'stable'
	},
	{
		flutter: '3.0.4',
		dart: '2.17.5',
		flutterNumber: 305,
		dartNumber: 376,
		channel: 'stable'
	},
	{
		flutter: '3.0.3',
		dart: '2.17.5',
		flutterNumber: 304,
		dartNumber: 376,
		channel: 'stable'
	},
	{
		flutter: '3.0.2',
		dart: '2.17.3',
		flutterNumber: 303,
		dartNumber: 374,
		channel: 'stable'
	},
	{
		flutter: '3.0.1',
		dart: '2.17.1',
		flutterNumber: 302,
		dartNumber: 372,
		channel: 'stable'
	},
	{
		flutter: '3.0.0',
		dart: '2.17.0',
		flutterNumber: 301,
		dartNumber: 371,
		channel: 'stable'
	},
	{
		flutter: '2.10.5',
		dart: '2.16.2',
		flutterNumber: 306,
		dartNumber: 363,
		channel: 'stable'
	},
	{
		flutter: '2.10.4',
		dart: '2.16.2',
		flutterNumber: 305,
		dartNumber: 363,
		channel: 'stable'
	},
	{
		flutter: '2.10.3',
		dart: '2.16.1',
		flutterNumber: 304,
		dartNumber: 362,
		channel: 'stable'
	},
	{
		flutter: '2.10.2',
		dart: '2.16.1',
		flutterNumber: 303,
		dartNumber: 362,
		channel: 'stable'
	},
	{
		flutter: '2.10.1',
		dart: '2.16.1',
		flutterNumber: 302,
		dartNumber: 362,
		channel: 'stable'
	},
	{
		flutter: '2.10.0',
		dart: '2.16.0',
		flutterNumber: 301,
		dartNumber: 361,
		channel: 'stable'
	},
	{
		flutter: '2.8.1',
		dart: '2.15.1',
		flutterNumber: 282,
		dartNumber: 352,
		channel: 'stable'
	},
	{
		flutter: '2.8.0',
		dart: '2.15.0',
		flutterNumber: 281,
		dartNumber: 351,
		channel: 'stable'
	},
	{
		flutter: '2.5.3',
		dart: '2.14.4',
		flutterNumber: 254,
		dartNumber: 345,
		channel: 'stable'
	},
	{
		flutter: '2.5.2',
		dart: '2.14.3',
		flutterNumber: 253,
		dartNumber: 344,
		channel: 'stable'
	},
	{
		flutter: '2.5.1',
		dart: '2.14.2',
		flutterNumber: 252,
		dartNumber: 343,
		channel: 'stable'
	},
	{
		flutter: '2.5.0',
		dart: '2.14.0',
		flutterNumber: 251,
		dartNumber: 341,
		channel: 'stable'
	},
	{
		flutter: '2.2.3',
		dart: '2.13.4',
		flutterNumber: 224,
		dartNumber: 335,
		channel: 'stable'
	},
	{
		flutter: '2.2.2',
		dart: '2.13.3',
		flutterNumber: 223,
		dartNumber: 334,
		channel: 'stable'
	},
	{
		flutter: '2.2.1',
		dart: '2.13.1',
		flutterNumber: 222,
		dartNumber: 332,
		channel: 'stable'
	},
	{
		flutter: '2.2.0',
		dart: '2.13.0',
		flutterNumber: 221,
		dartNumber: 331,
		channel: 'stable'
	},
	{
		flutter: '2.0.6',
		dart: '2.12.3',
		flutterNumber: 207,
		dartNumber: 324,
		channel: 'stable'
	},
	{
		flutter: '2.0.5',
		dart: '2.12.3',
		flutterNumber: 206,
		dartNumber: 324,
		channel: 'stable'
	},
	{
		flutter: '2.0.4',
		dart: '2.12.2',
		flutterNumber: 205,
		dartNumber: 323,
		channel: 'stable'
	},
	{
		flutter: '2.0.3',
		dart: '2.12.2',
		flutterNumber: 204,
		dartNumber: 323,
		channel: 'stable'
	},
	{
		flutter: '2.0.2',
		dart: '2.12.1',
		flutterNumber: 203,
		dartNumber: 322,
		channel: 'stable'
	},
	{
		flutter: '2.0.1',
		dart: '2.12.0',
		flutterNumber: 202,
		dartNumber: 321,
		channel: 'stable'
	},
	{
		flutter: '2.0.0',
		dart: '2.12.0',
		flutterNumber: 201,
		dartNumber: 321,
		channel: 'stable'
	},
	{
		flutter: '1.22.6',
		dart: '-',
		flutterNumber: 327,
		dartNumber: 0,
		channel: 'stable'
	},
	{
		flutter: '1.22.5',
		dart: '-',
		flutterNumber: 326,
		dartNumber: 0,
		channel: 'stable'
	},
	{
		flutter: '1.22.4',
		dart: '2.10.4',
		flutterNumber: 325,
		dartNumber: 305,
		channel: 'stable'
	},
	{
		flutter: '3.12.0',
		dart: '3.1.0',
		flutterNumber: 421,
		dartNumber: 311,
		channel: 'beta'
	},
	{
		flutter: '3.11.0-0.1.pre',
		dart: '3.1.0',
		flutterNumber: 411.1,
		dartNumber: 311,
		channel: 'beta'
	},
	{
		flutter: '3.11.0-0.0.pre',
		dart: '3.1.0',
		flutterNumber: 411,
		dartNumber: 311,
		channel: 'beta'
	},
	{
		flutter: '3.10.0-1.5.pre',
		dart: '3.0.0',
		flutterNumber: 402.5,
		dartNumber: 301,
		channel: 'beta'
	},
	{
		flutter: '3.10.0-1.4.pre',
		dart: '3.0.0',
		flutterNumber: 402.4,
		dartNumber: 301,
		channel: 'beta'
	},
	{
		flutter: '3.10.0-1.3.pre',
		dart: '3.0.0',
		flutterNumber: 402.3,
		dartNumber: 301,
		channel: 'beta'
	},
	{
		flutter: '3.10.0-1.1.pre',
		dart: '3.0.0',
		flutterNumber: 402.1,
		dartNumber: 301,
		channel: 'beta'
	},
	{
		flutter: '3.9.0-0.2.pre',
		dart: '3.0.0',
		flutterNumber: 391.2,
		dartNumber: 301,
		channel: 'beta'
	},
	{
		flutter: '3.9.0-0.1.pre',
		dart: '3.0.0',
		flutterNumber: 391.1,
		dartNumber: 301,
		channel: 'beta'
	},
	{
		flutter: '3.8.0-10.1.pre',
		dart: '3.0.0',
		flutterNumber: 391.1,
		dartNumber: 301,
		channel: 'beta'
	},
	{
		flutter: '3.7.0-1.5.pre',
		dart: '2.19.0',
		flutterNumber: 372.5,
		dartNumber: 391,
		channel: 'beta'
	},
	{
		flutter: '3.7.0-1.4.pre',
		dart: '2.19.0',
		flutterNumber: 372.4,
		dartNumber: 391,
		channel: 'beta'
	},
	{
		flutter: '3.7.0-1.3.pre',
		dart: '2.19.0',
		flutterNumber: 372.3,
		dartNumber: 391,
		channel: 'beta'
	},
	{
		flutter: '3.7.0-1.2.pre',
		dart: '2.19.0',
		flutterNumber: 372.2,
		dartNumber: 391,
		channel: 'beta'
	},
	{
		flutter: '3.7.0-1.1.pre',
		dart: '2.19.0',
		flutterNumber: 372.1,
		dartNumber: 391,
		channel: 'beta'
	},
	{
		flutter: '3.6.0-0.1.pre',
		dart: '2.19.0',
		flutterNumber: 361.1,
		dartNumber: 391,
		channel: 'beta'
	},
	{
		flutter: '3.4.0-34.1.pre',
		dart: '2.19.0',
		flutterNumber: 375.1,
		dartNumber: 391,
		channel: 'beta'
	},
	{
		flutter: '3.4.0-17.2.pre',
		dart: '2.19.0',
		flutterNumber: 358.2,
		dartNumber: 391,
		channel: 'beta'
	},
	{
		flutter: '3.4.0-17.1.pre',
		dart: '2.19.0',
		flutterNumber: 358.1,
		dartNumber: 391,
		channel: 'beta'
	},
	{
		flutter: '3.3.0-0.5.pre',
		dart: '2.18.0',
		flutterNumber: 331.5,
		dartNumber: 381,
		channel: 'beta'
	},
	{
		flutter: '3.3.0-0.4.pre',
		dart: '2.18.0',
		flutterNumber: 331.4,
		dartNumber: 381,
		channel: 'beta'
	},
	{
		flutter: '3.3.0-0.3.pre',
		dart: '2.18.0',
		flutterNumber: 331.3,
		dartNumber: 381,
		channel: 'beta'
	},
	{
		flutter: '3.3.0-0.2.pre',
		dart: '2.18.0',
		flutterNumber: 331.2,
		dartNumber: 381,
		channel: 'beta'
	},
	{
		flutter: '3.3.0-0.1.pre',
		dart: '2.18.0',
		flutterNumber: 331.1,
		dartNumber: 381,
		channel: 'beta'
	},
	{
		flutter: '3.3.0-0.0.pre',
		dart: '2.18.0',
		flutterNumber: 331,
		dartNumber: 381,
		channel: 'beta'
	},
	{
		flutter: '3.1.0-9.0.pre',
		dart: '2.18.0',
		flutterNumber: 320,
		dartNumber: 381,
		channel: 'beta'
	},
	{
		flutter: '3.1.0',
		dart: '2.18.0',
		flutterNumber: 311,
		dartNumber: 381,
		channel: 'beta'
	},
	{
		flutter: '2.13.0-0.4.pre',
		dart: '2.17.0',
		flutterNumber: 331.4,
		dartNumber: 371,
		channel: 'beta'
	},
	{
		flutter: '2.13.0-0.3.pre',
		dart: '2.17.0',
		flutterNumber: 331.3,
		dartNumber: 371,
		channel: 'beta'
	},
	{
		flutter: '2.13.0-0.2.pre',
		dart: '2.17.0',
		flutterNumber: 331.2,
		dartNumber: 371,
		channel: 'beta'
	},
	{
		flutter: '2.13.0-0.1.pre',
		dart: '2.17.0',
		flutterNumber: 331.1,
		dartNumber: 371,
		channel: 'beta'
	},
	{
		flutter: '2.12.0-4.2.pre',
		dart: '2.17.0',
		flutterNumber: 325.2,
		dartNumber: 371,
		channel: 'beta'
	},
	{
		flutter: '2.12.0-4.1.pre',
		dart: '2.17.0',
		flutterNumber: 325.1,
		dartNumber: 371,
		channel: 'beta'
	},
	{
		flutter: '2.11.0-0.1.pre',
		dart: '2.17.0',
		flutterNumber: 311.1,
		dartNumber: 371,
		channel: 'beta'
	},
	{
		flutter: '2.10.0-0.3.pre',
		dart: '2.16.0',
		flutterNumber: 301.3,
		dartNumber: 361,
		channel: 'beta'
	},
	{
		flutter: '2.10.0-0.2.pre',
		dart: '2.16.0',
		flutterNumber: 301.2,
		dartNumber: 361,
		channel: 'beta'
	},
	{
		flutter: '2.10.0-0.1.pre',
		dart: '2.16.0',
		flutterNumber: 301.1,
		dartNumber: 361,
		channel: 'beta'
	},
	{
		flutter: '2.9.0-0.1.pre',
		dart: '-',
		flutterNumber: 291.1,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '2.8.0-3.3.pre',
		dart: '-',
		flutterNumber: 284.3,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '2.8.0-3.2.pre',
		dart: '-',
		flutterNumber: 284.2,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '2.8.0-3.1.pre',
		dart: '-',
		flutterNumber: 284.1,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '2.7.0-3.1.pre',
		dart: '-',
		flutterNumber: 274.1,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '2.7.0-3.0.pre',
		dart: '-',
		flutterNumber: 274,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '2.6.0-5.2.pre',
		dart: '-',
		flutterNumber: 266.2,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '2.5.0',
		dart: '2.14.0',
		flutterNumber: 251,
		dartNumber: 341,
		channel: 'beta'
	},
	{
		flutter: '2.5.0-5.3.pre',
		dart: '-',
		flutterNumber: 256.3,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '2.5.0-5.2.pre',
		dart: '-',
		flutterNumber: 256.2,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '2.5.0-5.1.pre',
		dart: '-',
		flutterNumber: 256.1,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '2.4.0-4.2.pre',
		dart: '-',
		flutterNumber: 245.2,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '2.4.0-4.1.pre',
		dart: '-',
		flutterNumber: 245.1,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '2.3.0-24.1.pre',
		dart: '-',
		flutterNumber: 255.1,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '2.2.2',
		dart: '2.13.3',
		flutterNumber: 223,
		dartNumber: 334,
		channel: 'beta'
	},
	{
		flutter: '2.2.0',
		dart: '2.13.0',
		flutterNumber: 221,
		dartNumber: 331,
		channel: 'beta'
	},
	{
		flutter: '2.2.0-10.3.pre',
		dart: '-',
		flutterNumber: 231.3,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '2.2.0-10.2.pre',
		dart: '-',
		flutterNumber: 231.2,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '2.2.0-10.1.pre',
		dart: '-',
		flutterNumber: 231.1,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '2.1.0-12.2.pre',
		dart: '-',
		flutterNumber: 223.2,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '2.0.2',
		dart: '2.12.1',
		flutterNumber: 203,
		dartNumber: 322,
		channel: 'beta'
	},
	{
		flutter: '2.0.1',
		dart: '2.12.0',
		flutterNumber: 202,
		dartNumber: 321,
		channel: 'beta'
	},
	{
		flutter: '2.0.0',
		dart: '2.12.0',
		flutterNumber: 201,
		dartNumber: 321,
		channel: 'beta'
	},
	{
		flutter: '1.26.0-17.8.pre',
		dart: '-',
		flutterNumber: 378.8,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '1.26.0-17.7.pre',
		dart: '-',
		flutterNumber: 378.7,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '1.26.0-17.6.pre',
		dart: '-',
		flutterNumber: 378.6,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '1.26.0-17.5.pre',
		dart: '-',
		flutterNumber: 378.5,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '1.26.0-17.4.pre',
		dart: '-',
		flutterNumber: 378.4,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '1.26.0-17.3.pre',
		dart: '-',
		flutterNumber: 378.3,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '1.26.0-17.2.pre',
		dart: '-',
		flutterNumber: 378.2,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '1.25.0-8.3.pre',
		dart: '-',
		flutterNumber: 359.3,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '1.25.0-8.2.pre',
		dart: '-',
		flutterNumber: 359.2,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '1.25.0-8.1.pre',
		dart: '-',
		flutterNumber: 359.1,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '1.24.0-10.2.pre',
		dart: '-',
		flutterNumber: 351.2,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '1.23.0-18.1.pre',
		dart: '-',
		flutterNumber: 349.1,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '1.22.0-12.4.pre',
		dart: '-',
		flutterNumber: 333.4,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '1.22.0-12.3.pre',
		dart: '-',
		flutterNumber: 333.3,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '1.22.0-12.2.pre',
		dart: '-',
		flutterNumber: 333.2,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '1.22.0-12.1.pre',
		dart: '-',
		flutterNumber: 333.1,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '1.21.0-9.2.pre',
		dart: '-',
		flutterNumber: 320.2,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '1.21.0-9.1.pre',
		dart: '-',
		flutterNumber: 320.1,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '1.20.2',
		dart: '2.9.1',
		flutterNumber: 303,
		dartNumber: 292,
		channel: 'beta'
	},
	{
		flutter: '1.20.0-7.4.pre',
		dart: '-',
		flutterNumber: 308.4,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '1.20.0-7.3.pre',
		dart: '-',
		flutterNumber: 308.3,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '1.20.0-7.2.pre',
		dart: '-',
		flutterNumber: 308.2,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '1.19.0-4.3.pre',
		dart: '-',
		flutterNumber: 295.3,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '1.19.0-4.2.pre',
		dart: '-',
		flutterNumber: 295.2,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '1.19.0-4.1.pre',
		dart: '-',
		flutterNumber: 295.1,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '1.18.0-11.1.pre',
		dart: '-',
		flutterNumber: 292.1,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '1.17.0-3.4.pre',
		dart: '-',
		flutterNumber: 274.4,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '1.17.0-3.3.pre',
		dart: '-',
		flutterNumber: 274.3,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '1.17.0-3.2.pre',
		dart: '-',
		flutterNumber: 274.2,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '1.17.0-dev.3.1',
		dart: '-',
		flutterNumber: 271.31,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: 'v1.15.17',
		dart: '-',
		flutterNumber: 268,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: 'v1.14.6',
		dart: '-',
		flutterNumber: 247,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: 'v1.13.6',
		dart: '-',
		flutterNumber: 237,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: 'v1.12.13+hotfix.6',
		dart: '-',
		flutterNumber: 234.6,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: 'v1.12.13+hotfix.5',
		dart: '-',
		flutterNumber: 234.5,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: 'v1.12.13+hotfix.4',
		dart: '-',
		flutterNumber: 234.4,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: 'v1.12.13+hotfix.3',
		dart: '-',
		flutterNumber: 234.3,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: 'v1.12.13+hotfix.2',
		dart: '-',
		flutterNumber: 234.2,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: 'v1.12.13+hotfix.1',
		dart: '-',
		flutterNumber: 234.1,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: 'v1.11.0',
		dart: '-',
		flutterNumber: 211,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: 'v1.10.7',
		dart: '-',
		flutterNumber: 208,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: 'v1.9.1+hotfix.4',
		dart: '-',
		flutterNumber: 192.4,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: 'v1.9.1+hotfix.3',
		dart: '-',
		flutterNumber: 192.3,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: 'v1.9.1+hotfix.2',
		dart: '-',
		flutterNumber: 192.2,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: 'v1.9.1+hotfix.1',
		dart: '-',
		flutterNumber: 192.1,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: 'v1.8.3',
		dart: '-',
		flutterNumber: 184,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: 'v1.7.8+hotfix.4',
		dart: '-',
		flutterNumber: 179.4,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: 'v1.7.8+hotfix.3',
		dart: '-',
		flutterNumber: 179.3,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: 'v1.7.8+hotfix.2',
		dart: '-',
		flutterNumber: 179.2,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: 'v1.6.3',
		dart: '-',
		flutterNumber: 164,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: 'v1.5.4-hotfix.2',
		dart: '-',
		flutterNumber: 155.2,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: 'v1.5.4-hotfix.1',
		dart: '-',
		flutterNumber: 155.1,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: 'v1.5.4',
		dart: '-',
		flutterNumber: 155,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: 'v1.4.9-hotfix.1',
		dart: '-',
		flutterNumber: 150.1,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: 'v1.3.8',
		dart: '-',
		flutterNumber: 139,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: 'v1.2.1',
		dart: '-',
		flutterNumber: 122,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: 'v1.1.8',
		dart: '-',
		flutterNumber: 119,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: 'v1.0.0',
		dart: '-',
		flutterNumber: 101,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: 'v0.11.13',
		dart: '-',
		flutterNumber: 124,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: 'v0.11.12',
		dart: '-',
		flutterNumber: 123,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: 'v0.11.11',
		dart: '-',
		flutterNumber: 122,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: 'v0.11.10',
		dart: '-',
		flutterNumber: 121,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: 'v0.11.9',
		dart: '-',
		flutterNumber: 120,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: 'v0.11.8',
		dart: '-',
		flutterNumber: 119,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: 'v0.11.7',
		dart: '-',
		flutterNumber: 118,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: 'v0.11.3',
		dart: '-',
		flutterNumber: 114,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: 'v0.10.2',
		dart: '-',
		flutterNumber: 103,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: 'v0.9.4',
		dart: '-',
		flutterNumber: 95,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: 'v0.8.2',
		dart: '-',
		flutterNumber: 83,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: 'v0.7.3',
		dart: '-',
		flutterNumber: 74,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: 'v0.6.0',
		dart: '-',
		flutterNumber: 61,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: 'v0.5.1',
		dart: '-',
		flutterNumber: 52,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: 'v0.4.4',
		dart: '-',
		flutterNumber: 45,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: 'v0.3.2',
		dart: '-',
		flutterNumber: 33,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: 'v0.3.1',
		dart: '-',
		flutterNumber: 32,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: 'v0.2.8',
		dart: '-',
		flutterNumber: 29,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: 'v0.2.3',
		dart: '-',
		flutterNumber: 24,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: 'v0.1.5',
		dart: '-',
		flutterNumber: 16,
		dartNumber: 0,
		channel: 'beta'
	}
] satisfies ComparableVersion[];

export const FallbackStableVersion = <Version>{
	...supportedVersions.find((x) => x.channel === 'stable')
};
export const FallbackBetaVersion = <Version>{
	...supportedVersions.find((x) => x.channel === 'beta')
};
export const UnknownDartVersion = '?';

export default supportedVersions;

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

	return versionSplit.reduce(
		(p, c, i) => p + 10 ** (2 - i) * Number.parseInt(c),
		1
	);
}
