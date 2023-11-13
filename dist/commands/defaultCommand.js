const help = `
\x1b[1mCommands:\x1b[0m
	\x1b[1mopen:\x1b[0m open vault or vault and file
		Examples: 
			obsid open -v "My Vault"
			obsid open -v "My Vault" -f "My File"
			obsid open -p "path/to/file/inside/of/vault"
\n
	\x1b[1msearch:\x1b[0m open search inside of vault
		Examples:
			obsid search -v "My Vault"
			obsid search -v "My Vault" -q "My Search Query"
\n
\x1b[1mFlags:\x1b[0m
	-v/--vault
	-p/--path
	-f/--file
	-q/--query
`;
export const defaultCommand = {
    command: "*",
    description: "open a file",
    builder: (yargs) => {
        return yargs
            .option("help", {
            alias: "h",
            describe: "help",
            type: "boolean"
        });
    },
    handler: (argv) => {
        if (argv.h) {
            console.log(help);
        }
    }
};
//# sourceMappingURL=defaultCommand.js.map