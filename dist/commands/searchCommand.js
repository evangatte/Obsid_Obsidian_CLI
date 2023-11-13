import { Uri } from '../uri/Uri.js';
import { Utils } from '../utils/Utils.js';
export const searchCommand = {
    command: "search [vault] [query]",
    description: "search",
    builder: (yargs) => {
        return yargs
            .option("vault", {
            alias: "v",
            describe: "vault to search",
            type: "string",
        })
            .option("query", {
            alias: "q",
            describe: "search query",
            type: "string",
        });
    },
    handler: (argv) => {
        const uri = Uri.buildSearchUri(argv);
        Utils.executeShellCommand(`${uri}`);
    }
};
//# sourceMappingURL=searchCommand.js.map