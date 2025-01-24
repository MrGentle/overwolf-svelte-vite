import fs from "fs";
import archiver from "archiver";
import { readFile } from "fs/promises";

// Read version from package.json
const packageJson = JSON.parse(await readFile(new URL("../package.json", import.meta.url)));
const version = packageJson.version;

// Create zip file
try {
    fs.mkdirSync("build");
} catch (err) {}
const output = fs.createWriteStream(`./build/dist-opk-v${version}.opk`);
const archive = archiver("zip", { zlib: { level: 9 } });

output.on("close", () => {
    console.log(`${archive.pointer()} total bytes`);
    console.log("OPK has been finalized and written to disk.");
});

archive.on("error", (err) => {
    throw err;
});

archive.pipe(output);
archive.directory("dist/", false);
await archive.finalize();
