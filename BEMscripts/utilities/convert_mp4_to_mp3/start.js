import convert from "./convert.js";
import fs from "fs";

const regExt = /\.mp4$/i;
const files = fs.readdirSync("./");
const mp4Files = files.filter((f) => regExt.test(f));

async function kek() {
  return new Promise(() =>
    convert(mp4Files[0], mp4Files[0].replace(regExt, ".mp3"))
  );
}

kek().then(() => {
  convert(mp4Files[1], mp4Files[1].replace(regExt, ".mp3"));
});
