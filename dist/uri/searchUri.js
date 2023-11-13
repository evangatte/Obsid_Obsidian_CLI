import { encodeArgs } from './uriHelpers.js';
export function buildSearchUri(argv) {
    if (Object.keys(argv).length === 2) {
        return `open "obsidian://search"`;
    }
    else if (argv.query && argv.vault) {
        return `open "obsidian://search?vault=${encodeArgs(argv.vault.toString())}&query=${argv.query.toString()}"`;
    }
}
//# sourceMappingURL=searchUri.js.map