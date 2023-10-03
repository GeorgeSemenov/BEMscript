import convert, { recursiveConvert } from "./convert.js";
import getFiles from "../../getFiles.js";

// const mp4Files = getFiles("./", "mp4");
const files = getFiles("./", "mp4");

function kek() {
  recursiveConvert(files);
}

kek();
