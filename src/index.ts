import { hideBin } from "yargs/helpers";
import yargs from "yargs/yargs";
import { openCommand } from "./commands/openCommand.js";
import { searchCommand } from "./commands/searchCommand.js";
import { defaultCommand } from "./commands/defaultCommand.js";

const argv = yargs(hideBin(process.argv))
	.command(openCommand)
	.command(searchCommand)
	.command(defaultCommand)
	.help(false)
	.argv;
