export function buildCreateUri(argv) {
    if (Object.keys(argv).length === 2 || argv.vault === undefined) {
        console.error("ERROR: Must specify vault and note");
        process.exit();
    }
    else {
        console.log("Good");
    }
}
//# sourceMappingURL=createUri.js.map