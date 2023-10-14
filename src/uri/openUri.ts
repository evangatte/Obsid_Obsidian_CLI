import { Arguments} from 'yargs';

export function buildOpenUri(argv: Arguments) {
	if (Object.keys(argv).length === 2) {
		// no flags were passed open default vault
		console.log("no flags were passed open default vault");
		return `open "obsidian://open"`
	} else if (argv.file && argv.vault === undefined) {
		// file was specified but vault was not, open file in default vault	
		console.log("file was specified but vault was not, open file in default vault	")
		return `"open obsidian://open?file=${argv.file}"`
	} else if (argv.vault && argv.file) {
		// vault and file were specified
		console.log("vault and file were specified");
		return `open "obsidian://open?vault=${argv.vault}&file=${argv.file}"`
	} else if (argv.path && argv.vault === undefined) {
		// path was specified but vault was not, open file in default vault
		console.log("path was specified but vault was not, open file in default vault", " Path: ", argv.path)
		return `"open obsidian://open?path=${argv.path}"`
	} else if (argv.vault && argv.path === undefined && argv.file === undefined) {
		// only the vault was specified, open vault
		console.log("only the vault was specified, open vault");
		return `open "obsidian://open"`
	} else if (argv.path && argv.vault) {
		// path and vault were specified
		console.log("path and vault were specified");
		return `open "obsidian://open?vault=${argv.vault}&path=${argv.path}"`
	}
}
