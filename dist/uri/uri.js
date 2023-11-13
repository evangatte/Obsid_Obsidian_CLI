import { buildOpenUri } from "./openUri.js";
import { buildSearchUri } from "./searchUri.js";
import { buildCreateUri } from "./createUri.js";
export class Uri {
    static buildOpenUri(argv) {
        return buildOpenUri(argv);
    }
    static buildSearchUri(argv) {
        return buildSearchUri(argv);
    }
    static buildCreateUri(argv) {
        return buildCreateUri(argv);
    }
}
//# sourceMappingURL=Uri.js.map