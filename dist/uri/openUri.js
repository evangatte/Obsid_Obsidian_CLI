import { encodeArgs } from './uriHelpers.js';
export function buildOpenUri(argv) {
    if (Object.keys(argv).length === 2) {
        return `open "obsidian://open"`;
    }
    else if (argv.path) {
        return `open "obsidian://open?path=${encodeArgs(argv.path.toString())}"`;
    }
    else if (argv.file && argv.vault === undefined) {
        return `open "obsidian://open?file=${encodeArgs(argv.file.toString())}"`;
    }
    else if (argv.vault && argv.file) {
        return `open "obsidian://open?vault=${encodeArgs(argv.vault.toString())}&file=${encodeArgs(argv.file.toString())}"`;
    }
    else if (argv.vault && argv.path === undefined && argv.file === undefined) {
        return `open "obsidian://open?vault=${encodeArgs(argv.vault.toString())}"`;
    }
}
//# sourceMappingURL=openUri.js.map