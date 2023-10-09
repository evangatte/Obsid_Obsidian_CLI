export const searchCommand = {
	command: "search [vault] [query]",
	description: "search",
	builder: (yargs: any) => {
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
	handler: (argv: any) => {
		console.log("search")
	}
}
