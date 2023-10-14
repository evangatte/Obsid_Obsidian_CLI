import { Arguments } from "yargs";
import { buildOpenUri } from "./openUri.js";

enum Actions {
	Open = "open",
	Search = "search",
	New = "new"
}

export class Uri {
	static buildOpenUri(argv: Arguments) {
		return buildOpenUri(argv)
	}
}
