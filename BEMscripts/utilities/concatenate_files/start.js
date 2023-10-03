import concat from "./concatenate.js";
import getFiles from "../../getFiles.js";

const folderPath = "./originalFiles";
const resultedFolder = "result";
const resultedFileName = `./${resultedFolder}/resultedAudioKek.mp3`;

let files = getFiles(folderPath, "mp3");
files = files.map((f) => `${folderPath}/${f}`);

concat(files, resultedFileName);

// concat(
//   [...Array(10)].map((m) => "./2.mp3"),
//   resultedFileName
// );
