import { hideBin } from "yargs/helpers";
import yargs from "yargs/yargs";
import { openCommand } from "./commands/openCommand.js";

const argv = yargs(hideBin(process.argv))
	.command(openCommand)
	.help()
	.argv;
