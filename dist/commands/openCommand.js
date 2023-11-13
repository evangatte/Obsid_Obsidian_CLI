import { Uri } from '../uri/Uri.js';
import { Utils } from '../utils/Utils.js';
export const openCommand = {
    command: "open [vault] [file] [path]",
    description: "open a file",
    builder: (yargs) => {
        return yargs
            .option("vault", {
            alias: "v",
            describe: "vault to open",
            type: "string"
        })
            .option("file", {
            alias: "f",
            describe: "file to open",
            type: "string"
        })
            .option("path", {
            alias: "p",
            describe: "path to file",
            type: "string",
        });
    },
    handler: (argv) => {
        const uri = Uri.buildOpenUri(argv);
        Utils.executeShellCommand(`${uri}`);
    }
};
//# sourceMappingURL=openCommand.js.map