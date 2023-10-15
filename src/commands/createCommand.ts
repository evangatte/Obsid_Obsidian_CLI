import { Arguments, Argv } from 'yargs';
import { Uri } from '../uri/Uri.js';
import { Utils } from '../utils/Utils.js';

export const createCommand = {
	command: "create [vault] [file] [path] [content]",
	description: "open a file",
	builder: (yargs: Argv) => {
		return yargs
			.option("vault", {
				alias: "v",
				describe: "vault to create note in",
				type: "string"
			})
			.option("name", {
				alias: "f",
				describe: "name of file to be created",
				type: "string"
			})
			.option("file", {
				alias: "f",
				describe: "A vault absolute path, including the name. Will override name if specified", 
				type: "string",
			})
			.option("path", {
				alias: "p",
				describe: "A globally absolute path. Works similar to the path option in the open action, which will override both vault and file", 
				type: "string",
			})
			.option("content", {
				alias: "c",
				describe: "(optional) the contents of the note", 
				type: "string",
			})
			.option("silent", {
				alias: "s",
				describe: "(optional) include this parameter if you don't want to open the new note", 
				type: "boolean",
			})
			.option("append", {
				alias: "a",
				describe: "(optional) include this parameter to append to an existing file if one exists", 
				type: "boolean",
			})
			.option("overwrite", {
				alias: "o",
				describe: "(optional) overwrite an existing file if one exists, but only if append isn't set", 
				type: "boolean",
			})
	},
	handler: (argv: Arguments) => {
		// build uri
		const uri = Uri.buildCreateUri(argv)
		// console.log("URI: ", uri);
		Utils.executeShellCommand(`${uri}`);
	}
}
