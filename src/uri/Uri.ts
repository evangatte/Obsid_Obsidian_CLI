import { Arguments } from "yargs";
import { buildOpenUri } from "./openUri.js";
import { buildSearchUri } from "./searchUri.js";
import { buildCreateUri } from "./createUri.js";

export class Uri {
	static buildOpenUri(argv: Arguments) {
		return buildOpenUri(argv);
	}

	static buildSearchUri(argv: Arguments) {
		return buildSearchUri(argv);
	}

	static buildCreateUri(argv: Arguments) {
		return buildCreateUri(argv);
	}
}
