import { Arguments } from "yargs";
import { buildOpenUri } from "./uriHelpers/openUri.js";

enum Actions {
	Open = "open",
	Search = "search",
	New = "new"
}

export class Uri {
	static buildOpenUri(argv: Arguments) {
		buildOpenUri(argv)
	}
}
