import { executeShellCommand } from "./utilsHelpers/executeShellCommands.js";
import { readWriteJson } from "./utilsHelpers/readWriteJson.js";
export class Utils {
    static executeShellCommand(command) {
        executeShellCommand(command);
    }
    static getCommandHistory() {
        return readWriteJson.readJsonFile();
    }
    static updateCommandHistory(cmdHistory) {
        readWriteJson.writeJsonFile(cmdHistory);
    }
}
//# sourceMappingURL=Utils.js.map