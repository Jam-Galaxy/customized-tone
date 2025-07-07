import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const distPackagePath = path.resolve(__dirname, "../package.dist.json");
const distDirectoryPath = path.resolve(__dirname, "../dist/package.json");
fs.cpSync(path.resolve(__dirname, "../build"), path.resolve(__dirname, "../dist/build"), {recursive: true});
fs.copyFileSync(distPackagePath, distDirectoryPath);
fs.copyFileSync(path.resolve(__dirname, "../.npmrc"), path.resolve(__dirname, "../dist/.npmrc"));
