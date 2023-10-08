import { hideBin } from "yargs/helpers";
import yargs from "yargs/yargs";

const argv = yargs(hideBin(process.argv))
	.command("open", "open a file", (yargs) => {
		yargs
		.option("vault", {
			alias: "v",
			describe: "vault to open",
			type: "boolean"
		})
		.positional("path", {
			describe: "path to vault",
			type: "string"
		});
	}, (argv) => {
		console.log("test");
	})
	.help()
	.argv
	