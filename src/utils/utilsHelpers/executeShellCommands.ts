import { exec } from "child_process";

export function executeShellCommand(command: string) {
	exec(command, (error:  Error | null, stdout: string, stderr: string) => {
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
  