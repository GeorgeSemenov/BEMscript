import convert, { recursiveConvert } from "./convert.js";
import getFiles from "../../getFiles.js";

// const mp4Files = getFiles("./", "mp4");
const off = "./original_files"; //original files folder
const cff = "./result"; //converted files folder
const files = getFiles(`${off}/`, "mp4").map((f) => `${off}/${f}`);
console.log(files);

function kek() {
  recursiveConvert(files, cff);
}

kek();
