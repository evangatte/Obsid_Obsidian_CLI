export function buildOpenUri(argv) {
    if (Object.keys(argv).length === 2) {
        console.log("no flags were passed open default vault");
        return `open "obsidian://open"`;
    }
    else if (argv.file && argv.vault === undefined) {
        console.log("file was specified but vault was not, open file in default vault	");
        return `"open obsidian://open?file=${argv.file}"`;
    }
    else if (argv.vault && argv.file) {
        console.log("vault and file were specified");
        return `open "obsidian://open?vault=${argv.vault}&file=${argv.file}"`;
    }
    else if (argv.path && argv.vault === undefined) {
        console.log("path was specified but vault was not, open file in default vault", " Path: ", argv.path);
        return `"open obsidian://open?path=${argv.path}"`;
    }
    else if (argv.vault && argv.path === undefined && argv.file === undefined) {
        console.log("only the vault was specified, open vault");
        return `"open obsidian://open"`;
    }
    else if (argv.path && argv.vault) {
        console.log("path and vault were specified");
    }
}
//# sourceMappingURL=openUri.js.map