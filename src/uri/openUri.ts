import { Arguments} from 'yargs';
import { encodeArgs } from './uriHelpers.js';

export function buildOpenUri(argv: Arguments) {
	if (Object.keys(argv).length === 2) {
		// no flags were passed open default vault
		// console.log("no flags were passed open default vault");
		return `open "obsidian://open"`
	} else if (argv.path) {
		// path was specified
		return `open "obsidian://open?path=${encodeArgs(argv.path.toString())}"`
	} else if (argv.file && argv.vault === undefined) {
		// file was specified but vault was not, open file in default vault	
		// console.log("file was specified but vault was not, open file in default vault	")
		return `open "obsidian://open?file=${encodeArgs(argv.file.toString())}"`
	} else if (argv.vault && argv.file) {
		// vault and file were specified
		// console.log("vault and file were specified");
		return `open "obsidian://open?vault=${encodeArgs(argv.vault.toString())}&file=${encodeArgs(argv.file.toString())}"`
	}  else if (argv.vault && argv.path === undefined && argv.file === undefined) {
		// only the vault was specified, open vault
		// console.log("only the vault was specified, open vault");
		return `open "obsidian://open?vault=${encodeArgs(argv.vault.toString())}"`
	} 
}
