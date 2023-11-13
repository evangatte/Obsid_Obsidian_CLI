import fs from "fs";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const vaultJsonFilePath = __filename.replace("dist/utils/utilsHelpers/readWriteJson.js", "commandHistory.json");
function readJsonFile() {
    let rawdata = fs.readFileSync(vaultJsonFilePath, { encoding: "utf8", flag: "r" });
    const data = JSON.parse(rawdata.toString());
    console.log("JSON Data: ", data);
    fs.close;
    return data;
}
function writeJsonFile(data) {
    const jsonString = JSON.stringify(data);
    fs.writeFileSync(vaultJsonFilePath, jsonString);
    fs.close;
    return;
}
export const readWriteJson = {
    readJsonFile: readJsonFile,
    writeJsonFile: writeJsonFile
};
//# sourceMappingURL=readWriteJson.js.map