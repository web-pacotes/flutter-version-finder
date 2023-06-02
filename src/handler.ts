import matcher from "./matcher";
import parse from "./parse";
import { UnknownDartVersion, Version } from "./version";

/**
 * Find the supported Flutter version for a pubspec.yaml/lock file.
 * 
 * @param yaml - A string describing the content of the pubspec file.
 * @returns The matched {@link Version} that is supported  for the project described by the pubspec file.
 */
export default function (
    yaml: string
): Version {
    const dartVersion = parse(yaml) ?? UnknownDartVersion;

    return matcher(dartVersion);
}