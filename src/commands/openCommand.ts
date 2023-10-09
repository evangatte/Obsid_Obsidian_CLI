import { Arguments, Argv } from 'yargs';
import { Uri } from '../uri/Uri.js';

export const openCommand = {
	command: "open [vault] [file] [path]",
	description: "open a file",
	builder: (yargs: Argv) => {
		return yargs
			.option("vault", {
				alias: "v",
				describe: "vault to open",
				type: "string"
			})
			.option("file", {
				alias: "f",
				describe: "file to open",
				type: "string"
			})
			.option("path", {
				alias: "p",
				describe: "path to file", 
				type: "string",
			})
	},
	handler: (argv: Arguments) => {
		// check for errors
		if (argv.vault && argv.path && argv.file) {
			// vault, file, and path were specified, error
			console.error("ERROR: only a path or a file can be specified")
			process.exit();
		}

		// build uri
		Uri.buildOpenUri(argv)
	}
}
