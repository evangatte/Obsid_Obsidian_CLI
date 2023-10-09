export const openCommand = {
	command: "open [vault] [file] [path]",
	description: "open a file",
	builder: (yargs: any) => {
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
	handler: (argv: any) => {
		if (Object.keys(argv).length === 2) {
			// no flags were passed open default vault
			console.log("no flags were passed open default vault")
		} else if (argv.file && argv.vault === undefined) {
			// file was specified but vault was not, open file in default vault	
			console.log("file was specified but vault was not, open file in default vault	")
		} else if (argv.vault && argv.file) {
			// vault and file were specified
			console.log("vault and file were specified")
		}
	}
}
