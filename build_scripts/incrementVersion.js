import fs from "fs/promises";
import { configDotenv } from "dotenv";

configDotenv();
// Use import.meta.url to resolve paths in ESM
const packagePath = "./package.json";
const manifestPath = "./public/manifest.json";

// Read both files asynchronously using Promise.all
const [pkgData, manifestData] = await Promise.all([fs.readFile(packagePath, "utf-8"), fs.readFile(manifestPath, "utf-8")]);

if (!pkgData) throw new Error("Could not read package.json");
if (!manifestData) throw new Error("Could not read manifest.json");

// Parse JSON data
const pkg = JSON.parse(pkgData);
const manifest = JSON.parse(manifestData);

// Update the version field
const newVersion = process.env.APP_VERSION; // Define the new version or get it from somewhere else
pkg.version = newVersion;
manifest.meta.version = newVersion;

// Stringify the updated objects with proper formatting
const pkgJSON = JSON.stringify(pkg, null, "  ");
const manifestJSON = JSON.stringify(manifest, null, "  ");

// Write the updated JSON data back to the files
await Promise.all([fs.writeFile(packagePath, pkgJSON, "utf-8"), fs.writeFile(manifestPath, manifestJSON, "utf-8")]);

console.log("Version updated successfully.");
