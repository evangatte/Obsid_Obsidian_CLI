import { exec } from "child_process";
export function executeShellCommand(command) {
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing the command: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Shell Command ERROR: ${stderr}`);
            return;
        }
    });
}
//# sourceMappingURL=executeShellCommands.js.map