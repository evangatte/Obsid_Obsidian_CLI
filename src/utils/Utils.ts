import { executeShellCommand } from "./utilsHelpers/executeShellCommands.js";

export class Utils {
	static executeShellCommand(command: string) {
		executeShellCommand(command);
	}
}
