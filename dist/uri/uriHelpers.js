export function encodeArgs(unformattedUriPath) {
    return unformattedUriPath.replace(/ /g, "%20").replace(/\//g, "%2F");
}
//# sourceMappingURL=uriHelpers.js.map