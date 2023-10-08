export const openCommand = {
	command: "open <path>",
	description: "open a file",
	builder: (yargs) => {
		return yargs
			.option("vault", {
				alias: "v",
				describe: "vault to open",
				type: "boolean"
			})
			.positional("path", {
				describe: "path to vault",
				type: "string"
			});
	},
	handler: (argv) => {
		if (argv.vault) {
			console.log("argv: ", argv.path);
		}
	}
}
