import convert from "./convert.js";
import getFiles from "../../getFiles.js";
import fs from "fs";

const mp4Files = getFiles("./", "mp4");

async function kek() {
  return new Promise(() =>
    convert(mp4Files[0], mp4Files[0].replace(regExt, ".mp3"))
  );
}

kek().then(() => {
  convert(mp4Files[1], mp4Files[1].replace(regExt, ".mp3"));
});
