import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

fs.cpSync(path.resolve(__dirname, "../build"), path.resolve(__dirname, "../dist/build"), {recursive: true});

const distPackagePath = path.resolve(__dirname, "../package.dist.json");
const distDirectoryPath = path.resolve(__dirname, "../dist/package.json");
// fs.copyFileSync(distPackagePath, distDirectoryPath);
const sourceJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../package.json")));
const distJson = JSON.parse(fs.readFileSync(distDirectoryPath));
distJson.version = sourceJson.version;
/* eslint-disable no-console */
console.log(distJson);
/* eslint-enable no-console */
fs.writeFileSync(distDirectoryPath, JSON.stringify(distJson, null, 2));
fs.copyFileSync(path.resolve(__dirname, "../.npmrc"), path.resolve(__dirname, "../dist/.npmrc"));
