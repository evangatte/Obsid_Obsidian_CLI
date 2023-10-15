import { hideBin } from "yargs/helpers";
import yargs from "yargs/yargs";
import { openCommand } from "./commands/openCommand.js";
import { searchCommand } from "./commands/searchCommand.js";
import { createCommand } from "./commands/createCommand.js"
import { defaultCommand } from "./commands/defaultCommand.js";

const argv = yargs(hideBin(process.argv))
	.command(openCommand)
	.command(searchCommand)
	.command(createCommand)
	.command(defaultCommand)
	.help(false)
	.argv;
