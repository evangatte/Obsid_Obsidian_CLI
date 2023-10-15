import { Arguments, Argv } from 'yargs';
import { Uri } from '../uri/Uri.js';
import { Utils } from '../utils/Utils.js';

export const searchCommand = {
	command: "search [vault] [query]",
	description: "search",
	builder: (yargs: Argv) => {
		return yargs
			.option("vault", {
				alias: "v",
				describe: "vault to search", 
				type: "string",
			})
			.option("query", {
				alias: "q",
				describe: "search query", 
				type: "string",
			})
	},
	handler: (argv: Arguments) => {
		// build uri
		const uri = Uri.buildSearchUri(argv);
		// console.log("URI: ", uri);
		Utils.executeShellCommand(`${uri}`);
	}
}
