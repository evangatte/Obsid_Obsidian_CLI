export function encodeArgs(unformattedUriPath: string): string {
    return unformattedUriPath.replace(/ /g, "%20").replace(/\//g, "%2F");
}
