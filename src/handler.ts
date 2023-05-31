import matcher from "./matcher";
import parse from "./parse";
import { UnknownDartVersion, Version } from "./version";

export default function (
    yaml: string
): Version {
    const dartVersion = parse(yaml) ?? UnknownDartVersion;

    return matcher(dartVersion);
}