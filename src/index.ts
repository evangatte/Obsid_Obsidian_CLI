import { hideBin } from "yargs/helpers";
import yargs from "yargs/yargs";
import { openCommand } from "./commands/openCommand.js";
import { searchCommand } from "./commands/searchCommand.js";

const argv = yargs(hideBin(process.argv))
	.command(openCommand)
	.command(searchCommand)
	.help(false)
	.argv;
