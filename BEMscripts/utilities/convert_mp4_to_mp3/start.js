import convert from "./convert.js";
import fs from "fs";

const regExt = /\.mp4$/i;
const files = fs.readdirSync("./");
const mp4Files = files.filter((f) => regExt.test(f));

await convert(mp4Files[0], files[0].replace(mp4Files, ".mp3"));
await convert(mp4Files[1], files[1].replace(mp4Files, ".mp3"));
