import { Arguments} from 'yargs';
import { encodeArgs } from './uriHelpers.js';

export function buildSearchUri(argv: Arguments) {
	if (Object.keys(argv).length === 2) {
		// no flags were passed open search in default vault
		// console.log("no flags were passed open search in default vault");
		return `open "obsidian://search"`
	} else if (argv.query && argv.vault) {
		// vault and query specified
		// console.log("vault and query specified")
		return `open "obsidian://search?vault=${encodeArgs(argv.vault.toString())}&query=${argv.query.toString()}"`
	} 
}