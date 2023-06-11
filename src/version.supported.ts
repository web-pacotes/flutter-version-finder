/**
 * A set with all supported Flutter versions as described in https://docs.flutter.dev/release/archive.
 * 
 * To update this list you must use the following code snippet:
 * 
 * ```
 * 
 * 	function parseVersionPart(c, i) {
		const base = ((10 ** (2 - i)) * Number.parseInt(c))* ( i === 0 && c > 1 ? (i + 1) * 3 : 1)

		if (c.length === 1) {

			return base;
		
		}

		return base + Number.parseInt(c.slice(1))
	}

	function sem_version_number(sem_ver) {
		if (!sem_ver || sem_ver === '-') {
			return 0;
		}

		const versionSplit = sem_ver.replaceAll(/-|\+|[a-z]/g, '').split('.').filter((x) => x !== '');

		return versionSplit.reduce((p, c, i) => p + parseVersionPart(c, i), 0);
	}

	for (let i = 0; i < table.childElementCount; i++) {
		const flutterVersion = table.children[i].children[0].innerText;
		const dartVersion = table.children[i].children[4].innerText;
		const flutterVersionNumber = sem_version_number(flutterVersion);
		const dartVersionNumber = sem_version_number(dartVersion);

		console.log(`{ flutter: '${flutterVersion}', dart: '${dartVersion}', flutterNumber: ${flutterVersionNumber}, dartNumber: ${dartVersionNumber}, channel: 'channel'}`)
	}
 * 
 * ```
 */
export default [
	{
		flutter: '3.10.4',
		dart: '3.0.3',
		flutterNumber: 1004,
		dartNumber: 903,
		channel: 'stable'
	},
	{
		flutter: '3.10.3',
		dart: '3.0.3',
		flutterNumber: 1003,
		dartNumber: 903,
		channel: 'stable'
	},
	{
		flutter: '3.10.2',
		dart: '3.0.2',
		flutterNumber: 1002,
		dartNumber: 902,
		channel: 'stable'
	},
	{
		flutter: '3.10.1',
		dart: '3.0.1',
		flutterNumber: 1001,
		dartNumber: 901,
		channel: 'stable'
	},
	{
		flutter: '3.10.0',
		dart: '3.0.0',
		flutterNumber: 1000,
		dartNumber: 900,
		channel: 'stable'
	},
	{
		flutter: '3.7.12',
		dart: '2.19.6',
		flutterNumber: 984,
		dartNumber: 805,
		channel: 'stable'
	},
	{
		flutter: '3.7.11',
		dart: '2.19.6',
		flutterNumber: 982,
		dartNumber: 805,
		channel: 'stable'
	},
	{
		flutter: '3.7.10',
		dart: '2.19.6',
		flutterNumber: 980,
		dartNumber: 805,
		channel: 'stable'
	},
	{
		flutter: '3.7.9',
		dart: '2.19.6',
		flutterNumber: 979,
		dartNumber: 805,
		channel: 'stable'
	},
	{
		flutter: '3.7.8',
		dart: '2.19.5',
		flutterNumber: 978,
		dartNumber: 804,
		channel: 'stable'
	},
	{
		flutter: '3.7.7',
		dart: '2.19.4',
		flutterNumber: 977,
		dartNumber: 803,
		channel: 'stable'
	},
	{
		flutter: '3.7.6',
		dart: '2.19.3',
		flutterNumber: 976,
		dartNumber: 802,
		channel: 'stable'
	},
	{
		flutter: '3.7.5',
		dart: '2.19.2',
		flutterNumber: 975,
		dartNumber: 801,
		channel: 'stable'
	},
	{
		flutter: '3.7.4',
		dart: '2.19.2',
		flutterNumber: 974,
		dartNumber: 801,
		channel: 'stable'
	},
	{
		flutter: '3.7.3',
		dart: '2.19.2',
		flutterNumber: 973,
		dartNumber: 801,
		channel: 'stable'
	},
	{
		flutter: '3.7.2',
		dart: '2.19.2',
		flutterNumber: 972,
		dartNumber: 801,
		channel: 'stable'
	},
	{
		flutter: '3.7.1',
		dart: '2.19.1',
		flutterNumber: 971,
		dartNumber: 800,
		channel: 'stable'
	},
	{
		flutter: '3.7.0',
		dart: '2.19.0',
		flutterNumber: 970,
		dartNumber: 799,
		channel: 'stable'
	},
	{
		flutter: '3.3.10',
		dart: '2.18.6',
		flutterNumber: 940,
		dartNumber: 794,
		channel: 'stable'
	},
	{
		flutter: '3.3.9',
		dart: '2.18.5',
		flutterNumber: 939,
		dartNumber: 793,
		channel: 'stable'
	},
	{
		flutter: '3.3.8',
		dart: '2.18.4',
		flutterNumber: 938,
		dartNumber: 792,
		channel: 'stable'
	},
	{
		flutter: '3.3.7',
		dart: '2.18.4',
		flutterNumber: 937,
		dartNumber: 792,
		channel: 'stable'
	},
	{
		flutter: '3.3.6',
		dart: '2.18.2',
		flutterNumber: 936,
		dartNumber: 790,
		channel: 'stable'
	},
	{
		flutter: '3.3.5',
		dart: '2.18.2',
		flutterNumber: 935,
		dartNumber: 790,
		channel: 'stable'
	},
	{
		flutter: '3.3.4',
		dart: '2.18.2',
		flutterNumber: 934,
		dartNumber: 790,
		channel: 'stable'
	},
	{
		flutter: '3.3.3',
		dart: '2.18.2',
		flutterNumber: 933,
		dartNumber: 790,
		channel: 'stable'
	},
	{
		flutter: '3.3.2',
		dart: '2.18.1',
		flutterNumber: 932,
		dartNumber: 789,
		channel: 'stable'
	},
	{
		flutter: '3.3.1',
		dart: '2.18.0',
		flutterNumber: 931,
		dartNumber: 788,
		channel: 'stable'
	},
	{
		flutter: '3.3.0',
		dart: '2.18.0',
		flutterNumber: 930,
		dartNumber: 788,
		channel: 'stable'
	},
	{
		flutter: '3.0.5',
		dart: '2.17.6',
		flutterNumber: 905,
		dartNumber: 783,
		channel: 'stable'
	},
	{
		flutter: '3.0.4',
		dart: '2.17.5',
		flutterNumber: 904,
		dartNumber: 782,
		channel: 'stable'
	},
	{
		flutter: '3.0.3',
		dart: '2.17.5',
		flutterNumber: 903,
		dartNumber: 782,
		channel: 'stable'
	},
	{
		flutter: '3.0.2',
		dart: '2.17.3',
		flutterNumber: 902,
		dartNumber: 780,
		channel: 'stable'
	},
	{
		flutter: '3.0.1',
		dart: '2.17.1',
		flutterNumber: 901,
		dartNumber: 778,
		channel: 'stable'
	},
	{
		flutter: '3.0.0',
		dart: '2.17.0',
		flutterNumber: 900,
		dartNumber: 777,
		channel: 'stable'
	},
	{
		flutter: '2.10.5',
		dart: '2.16.2',
		flutterNumber: 705,
		dartNumber: 768,
		channel: 'stable'
	},
	{
		flutter: '2.10.4',
		dart: '2.16.2',
		flutterNumber: 704,
		dartNumber: 768,
		channel: 'stable'
	},
	{
		flutter: '2.10.3',
		dart: '2.16.1',
		flutterNumber: 703,
		dartNumber: 767,
		channel: 'stable'
	},
	{
		flutter: '2.10.2',
		dart: '2.16.1',
		flutterNumber: 702,
		dartNumber: 767,
		channel: 'stable'
	},
	{
		flutter: '2.10.1',
		dart: '2.16.1',
		flutterNumber: 701,
		dartNumber: 767,
		channel: 'stable'
	},
	{
		flutter: '2.10.0',
		dart: '2.16.0',
		flutterNumber: 700,
		dartNumber: 766,
		channel: 'stable'
	},
	{
		flutter: '2.8.1',
		dart: '2.15.1',
		flutterNumber: 681,
		dartNumber: 756,
		channel: 'stable'
	},
	{
		flutter: '2.8.0',
		dart: '2.15.0',
		flutterNumber: 680,
		dartNumber: 755,
		channel: 'stable'
	},
	{
		flutter: '2.5.3',
		dart: '2.14.4',
		flutterNumber: 653,
		dartNumber: 748,
		channel: 'stable'
	},
	{
		flutter: '2.5.2',
		dart: '2.14.3',
		flutterNumber: 652,
		dartNumber: 747,
		channel: 'stable'
	},
	{
		flutter: '2.5.1',
		dart: '2.14.2',
		flutterNumber: 651,
		dartNumber: 746,
		channel: 'stable'
	},
	{
		flutter: '2.5.0',
		dart: '2.14.0',
		flutterNumber: 650,
		dartNumber: 744,
		channel: 'stable'
	},
	{
		flutter: '2.2.3',
		dart: '2.13.4',
		flutterNumber: 623,
		dartNumber: 737,
		channel: 'stable'
	},
	{
		flutter: '2.2.2',
		dart: '2.13.3',
		flutterNumber: 622,
		dartNumber: 736,
		channel: 'stable'
	},
	{
		flutter: '2.2.1',
		dart: '2.13.1',
		flutterNumber: 621,
		dartNumber: 734,
		channel: 'stable'
	},
	{
		flutter: '2.2.0',
		dart: '2.13.0',
		flutterNumber: 620,
		dartNumber: 733,
		channel: 'stable'
	},
	{
		flutter: '2.0.6',
		dart: '2.12.3',
		flutterNumber: 606,
		dartNumber: 725,
		channel: 'stable'
	},
	{
		flutter: '2.0.5',
		dart: '2.12.3',
		flutterNumber: 605,
		dartNumber: 725,
		channel: 'stable'
	},
	{
		flutter: '2.0.4',
		dart: '2.12.2',
		flutterNumber: 604,
		dartNumber: 724,
		channel: 'stable'
	},
	{
		flutter: '2.0.3',
		dart: '2.12.2',
		flutterNumber: 603,
		dartNumber: 724,
		channel: 'stable'
	},
	{
		flutter: '2.0.2',
		dart: '2.12.1',
		flutterNumber: 602,
		dartNumber: 723,
		channel: 'stable'
	},
	{
		flutter: '2.0.1',
		dart: '2.12.0',
		flutterNumber: 601,
		dartNumber: 722,
		channel: 'stable'
	},
	{
		flutter: '2.0.0',
		dart: '2.12.0',
		flutterNumber: 600,
		dartNumber: 722,
		channel: 'stable'
	},
	{
		flutter: '1.22.6',
		dart: '-',
		flutterNumber: 328,
		dartNumber: 0,
		channel: 'stable'
	},
	{
		flutter: '1.22.5',
		dart: '-',
		flutterNumber: 327,
		dartNumber: 0,
		channel: 'stable'
	},
	{
		flutter: '1.22.4',
		dart: '2.10.4',
		flutterNumber: 326,
		dartNumber: 704,
		channel: 'stable'
	},
	{
		flutter: '1.22.3',
		dart: '2.10.3',
		flutterNumber: 325,
		dartNumber: 703,
		channel: 'stable'
	},
	{
		flutter: '1.22.2',
		dart: '2.10.2',
		flutterNumber: 324,
		dartNumber: 702,
		channel: 'stable'
	},
	{
		flutter: '1.22.1',
		dart: '2.10.1',
		flutterNumber: 323,
		dartNumber: 701,
		channel: 'stable'
	},
	{
		flutter: '1.22.0',
		dart: '2.10.0',
		flutterNumber: 322,
		dartNumber: 700,
		channel: 'stable'
	},
	{
		flutter: '1.20.4',
		dart: '2.9.2',
		flutterNumber: 304,
		dartNumber: 692,
		channel: 'stable'
	},
	{
		flutter: '1.20.3',
		dart: '2.9.2',
		flutterNumber: 303,
		dartNumber: 692,
		channel: 'stable'
	},
	{
		flutter: '1.20.2',
		dart: '2.9.1',
		flutterNumber: 302,
		dartNumber: 691,
		channel: 'stable'
	},
	{
		flutter: '1.20.1',
		dart: '2.9.0',
		flutterNumber: 301,
		dartNumber: 690,
		channel: 'stable'
	},
	{
		flutter: '1.20.0',
		dart: '2.9.0',
		flutterNumber: 300,
		dartNumber: 690,
		channel: 'stable'
	},
	{
		flutter: '1.17.5',
		dart: '-',
		flutterNumber: 282,
		dartNumber: 0,
		channel: 'stable'
	},
	{
		flutter: '1.17.4',
		dart: '-',
		flutterNumber: 281,
		dartNumber: 0,
		channel: 'stable'
	},
	{
		flutter: '1.17.3',
		dart: '-',
		flutterNumber: 280,
		dartNumber: 0,
		channel: 'stable'
	},
	{
		flutter: '1.17.2',
		dart: '-',
		flutterNumber: 279,
		dartNumber: 0,
		channel: 'stable'
	},
	{
		flutter: '1.17.1',
		dart: '-',
		flutterNumber: 278,
		dartNumber: 0,
		channel: 'stable'
	},
	{
		flutter: '1.17.0',
		dart: '-',
		flutterNumber: 277,
		dartNumber: 0,
		channel: 'stable'
	},
	{
		flutter: 'v1.12.13+hotfix.9',
		dart: '-',
		flutterNumber: 238.9,
		dartNumber: 0,
		channel: 'stable'
	},
	{
		flutter: 'v1.12.13+hotfix.8',
		dart: '-',
		flutterNumber: 238.8,
		dartNumber: 0,
		channel: 'stable'
	},
	{
		flutter: '3.12.0',
		dart: '3.1.0',
		flutterNumber: 1022,
		dartNumber: 910,
		channel: 'beta'
	},
	{
		flutter: '3.11.0-0.1.pre',
		dart: '3.1.0',
		flutterNumber: 1011.1,
		dartNumber: 910,
		channel: 'beta'
	},
	{
		flutter: '3.11.0-0.0.pre',
		dart: '3.1.0',
		flutterNumber: 1011,
		dartNumber: 910,
		channel: 'beta'
	},
	{
		flutter: '3.10.0-1.5.pre',
		dart: '3.0.0',
		flutterNumber: 1002.5,
		dartNumber: 900,
		channel: 'beta'
	},
	{
		flutter: '3.10.0-1.4.pre',
		dart: '3.0.0',
		flutterNumber: 1002.4,
		dartNumber: 900,
		channel: 'beta'
	},
	{
		flutter: '3.10.0-1.3.pre',
		dart: '3.0.0',
		flutterNumber: 1002.3,
		dartNumber: 900,
		channel: 'beta'
	},
	{
		flutter: '3.10.0-1.1.pre',
		dart: '3.0.0',
		flutterNumber: 1002.1,
		dartNumber: 900,
		channel: 'beta'
	},
	{
		flutter: '3.9.0-0.2.pre',
		dart: '3.0.0',
		flutterNumber: 990.2,
		dartNumber: 900,
		channel: 'beta'
	},
	{
		flutter: '3.9.0-0.1.pre',
		dart: '3.0.0',
		flutterNumber: 990.1,
		dartNumber: 900,
		channel: 'beta'
	},
	{
		flutter: '3.8.0-10.1.pre',
		dart: '3.0.0',
		flutterNumber: 1000.1,
		dartNumber: 900,
		channel: 'beta'
	},
	{
		flutter: '3.7.0-1.5.pre',
		dart: '2.19.0',
		flutterNumber: 972.5,
		dartNumber: 799,
		channel: 'beta'
	},
	{
		flutter: '3.7.0-1.4.pre',
		dart: '2.19.0',
		flutterNumber: 972.4,
		dartNumber: 799,
		channel: 'beta'
	},
	{
		flutter: '3.7.0-1.3.pre',
		dart: '2.19.0',
		flutterNumber: 972.3,
		dartNumber: 799,
		channel: 'beta'
	},
	{
		flutter: '3.7.0-1.2.pre',
		dart: '2.19.0',
		flutterNumber: 972.2,
		dartNumber: 799,
		channel: 'beta'
	},
	{
		flutter: '3.7.0-1.1.pre',
		dart: '2.19.0',
		flutterNumber: 972.1,
		dartNumber: 799,
		channel: 'beta'
	},
	{
		flutter: '3.6.0-0.1.pre',
		dart: '2.19.0',
		flutterNumber: 960.1,
		dartNumber: 799,
		channel: 'beta'
	},
	{
		flutter: '3.4.0-34.1.pre',
		dart: '2.19.0',
		flutterNumber: 1008.1,
		dartNumber: 799,
		channel: 'beta'
	},
	{
		flutter: '3.4.0-17.2.pre',
		dart: '2.19.0',
		flutterNumber: 974.2,
		dartNumber: 799,
		channel: 'beta'
	},
	{
		flutter: '3.4.0-17.1.pre',
		dart: '2.19.0',
		flutterNumber: 974.1,
		dartNumber: 799,
		channel: 'beta'
	},
	{
		flutter: '3.3.0-0.5.pre',
		dart: '2.18.0',
		flutterNumber: 930.5,
		dartNumber: 788,
		channel: 'beta'
	},
	{
		flutter: '3.3.0-0.4.pre',
		dart: '2.18.0',
		flutterNumber: 930.4,
		dartNumber: 788,
		channel: 'beta'
	},
	{
		flutter: '3.3.0-0.3.pre',
		dart: '2.18.0',
		flutterNumber: 930.3,
		dartNumber: 788,
		channel: 'beta'
	},
	{
		flutter: '3.3.0-0.2.pre',
		dart: '2.18.0',
		flutterNumber: 930.2,
		dartNumber: 788,
		channel: 'beta'
	},
	{
		flutter: '3.3.0-0.1.pre',
		dart: '2.18.0',
		flutterNumber: 930.1,
		dartNumber: 788,
		channel: 'beta'
	},
	{
		flutter: '3.3.0-0.0.pre',
		dart: '2.18.0',
		flutterNumber: 930,
		dartNumber: 788,
		channel: 'beta'
	},
	{
		flutter: '3.1.0-9.0.pre',
		dart: '2.18.0',
		flutterNumber: 928,
		dartNumber: 788,
		channel: 'beta'
	},
	{
		flutter: '3.1.0',
		dart: '2.18.0',
		flutterNumber: 910,
		dartNumber: 788,
		channel: 'beta'
	},
	{
		flutter: '2.13.0-0.4.pre',
		dart: '2.17.0',
		flutterNumber: 733.4,
		dartNumber: 777,
		channel: 'beta'
	},
	{
		flutter: '2.13.0-0.3.pre',
		dart: '2.17.0',
		flutterNumber: 733.3,
		dartNumber: 777,
		channel: 'beta'
	},
	{
		flutter: '2.13.0-0.2.pre',
		dart: '2.17.0',
		flutterNumber: 733.2,
		dartNumber: 777,
		channel: 'beta'
	},
	{
		flutter: '2.13.0-0.1.pre',
		dart: '2.17.0',
		flutterNumber: 733.1,
		dartNumber: 777,
		channel: 'beta'
	},
	{
		flutter: '2.12.0-4.2.pre',
		dart: '2.17.0',
		flutterNumber: 730.2,
		dartNumber: 777,
		channel: 'beta'
	},
	{
		flutter: '2.12.0-4.1.pre',
		dart: '2.17.0',
		flutterNumber: 730.1,
		dartNumber: 777,
		channel: 'beta'
	},
	{
		flutter: '2.11.0-0.1.pre',
		dart: '2.17.0',
		flutterNumber: 711.1,
		dartNumber: 777,
		channel: 'beta'
	},
	{
		flutter: '2.10.0-0.3.pre',
		dart: '2.16.0',
		flutterNumber: 700.3,
		dartNumber: 766,
		channel: 'beta'
	},
	{
		flutter: '2.10.0-0.2.pre',
		dart: '2.16.0',
		flutterNumber: 700.2,
		dartNumber: 766,
		channel: 'beta'
	},
	{
		flutter: '2.10.0-0.1.pre',
		dart: '2.16.0',
		flutterNumber: 700.1,
		dartNumber: 766,
		channel: 'beta'
	},
	{
		flutter: '2.9.0-0.1.pre',
		dart: '-',
		flutterNumber: 690.1,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '2.8.0-3.3.pre',
		dart: '-',
		flutterNumber: 686.3,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '2.8.0-3.2.pre',
		dart: '-',
		flutterNumber: 686.2,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '2.8.0-3.1.pre',
		dart: '-',
		flutterNumber: 686.1,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '2.7.0-3.1.pre',
		dart: '-',
		flutterNumber: 676.1,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '2.7.0-3.0.pre',
		dart: '-',
		flutterNumber: 676,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '2.6.0-5.2.pre',
		dart: '-',
		flutterNumber: 670.2,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '2.5.0',
		dart: '2.14.0',
		flutterNumber: 650,
		dartNumber: 744,
		channel: 'beta'
	},
	{
		flutter: '2.5.0-5.3.pre',
		dart: '-',
		flutterNumber: 660.3,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '2.5.0-5.2.pre',
		dart: '-',
		flutterNumber: 660.2,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '2.5.0-5.1.pre',
		dart: '-',
		flutterNumber: 660.1,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '2.4.0-4.2.pre',
		dart: '-',
		flutterNumber: 648.2,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '2.4.0-4.1.pre',
		dart: '-',
		flutterNumber: 648.1,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '2.3.0-24.1.pre',
		dart: '-',
		flutterNumber: 678.1,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '2.2.2',
		dart: '2.13.3',
		flutterNumber: 622,
		dartNumber: 736,
		channel: 'beta'
	},
	{
		flutter: '2.2.0',
		dart: '2.13.0',
		flutterNumber: 620,
		dartNumber: 733,
		channel: 'beta'
	},
	{
		flutter: '2.2.0-10.3.pre',
		dart: '-',
		flutterNumber: 640.3,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '2.2.0-10.2.pre',
		dart: '-',
		flutterNumber: 640.2,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '2.2.0-10.1.pre',
		dart: '-',
		flutterNumber: 640.1,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '2.1.0-12.2.pre',
		dart: '-',
		flutterNumber: 634.2,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '2.0.2',
		dart: '2.12.1',
		flutterNumber: 602,
		dartNumber: 723,
		channel: 'beta'
	},
	{
		flutter: '2.0.1',
		dart: '2.12.0',
		flutterNumber: 601,
		dartNumber: 722,
		channel: 'beta'
	},
	{
		flutter: '2.0.0',
		dart: '2.12.0',
		flutterNumber: 600,
		dartNumber: 722,
		channel: 'beta'
	},
	{
		flutter: '1.26.0-17.8.pre',
		dart: '-',
		flutterNumber: 400.8,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '1.26.0-17.7.pre',
		dart: '-',
		flutterNumber: 400.7,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '1.26.0-17.6.pre',
		dart: '-',
		flutterNumber: 400.6,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '1.26.0-17.5.pre',
		dart: '-',
		flutterNumber: 400.5,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '1.26.0-17.4.pre',
		dart: '-',
		flutterNumber: 400.4,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '1.26.0-17.3.pre',
		dart: '-',
		flutterNumber: 400.3,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '1.26.0-17.2.pre',
		dart: '-',
		flutterNumber: 400.2,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '1.25.0-8.3.pre',
		dart: '-',
		flutterNumber: 371.3,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '1.25.0-8.2.pre',
		dart: '-',
		flutterNumber: 371.2,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '1.25.0-8.1.pre',
		dart: '-',
		flutterNumber: 371.1,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '1.24.0-10.2.pre',
		dart: '-',
		flutterNumber: 364.2,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '1.23.0-18.1.pre',
		dart: '-',
		flutterNumber: 369.1,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '1.22.0-12.4.pre',
		dart: '-',
		flutterNumber: 346.4,
		dartNumber: 0,
		channel: 'beta'
	},
	{
		flutter: '1.22.0-12.3.pre',
		dart: '-',
		flutterNumber: 346.3,
		dartNumber: 0,
		channel: 'beta'
	}
];
