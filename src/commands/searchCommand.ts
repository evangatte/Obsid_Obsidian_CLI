import { Arguments, Argv } from 'yargs';

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
		console.log("search")
	}
}
