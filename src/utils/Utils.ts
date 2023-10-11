import { executeShellCommand } from "./utilsHelpers/executeShellCommands.js";
import { readWriteJson } from "./utilsHelpers/readWriteJson.js";
import { JsonData } from "../interfaces/JsonData.js";

export class Utils {
	static executeShellCommand(command: string) {
		executeShellCommand(command);
	}

	// returns data from a JSON file that contains info from the last command ran
	static getCommandHistory() {
		return readWriteJson.readJsonFile();
	}

	// updates a JSON file that stores info about the last command ran
	static updateCommandHistory(cmdHistory: JsonData) {
		readWriteJson.writeJsonFile(cmdHistory)
	}
}
