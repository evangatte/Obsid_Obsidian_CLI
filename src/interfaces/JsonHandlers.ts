import { JsonData } from "./JsonData.js";

export interface JsonHandlers {
    readJsonFile: () => JsonData;
    writeJsonFile: (data: JsonData) => void;
}
