import fs from "fs";
import { fileURLToPath } from "url";
import { JsonData } from "../../interfaces/JsonData.js";
import { JsonHandlers } from "../../interfaces/JsonHandlers.js";

// dynamically get relative path of 'commandHistory.json' regardless of projects location
const __filename: string = fileURLToPath(import.meta.url);
const vaultJsonFilePath: string = __filename.replace("dist/utils/utilsHelpers/readWriteJson.js", "commandHistory.json");

function readJsonFile(): JsonData {
	let rawdata = fs.readFileSync(vaultJsonFilePath, {encoding: "utf8", flag: "r"});
	const data: JsonData = JSON.parse(rawdata.toString());

	console.log("JSON Data: ", data);

	fs.close;

	return data;
}

function writeJsonFile(data: JsonData) {
	const jsonString = JSON.stringify(data);
	fs.writeFileSync(vaultJsonFilePath, jsonString);
	fs.close;

	return;
}

export const readWriteJson: JsonHandlers = {
	readJsonFile: readJsonFile,
	writeJsonFile: writeJsonFile
}
