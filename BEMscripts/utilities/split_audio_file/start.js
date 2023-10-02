import splitAudio from "./split.js";
import getFiles from "../../getFiles.js";
import gfn from "../../getFileNameWithoutExtension.js";
import ask from "../../ask.js";

const files = getFiles("./", "mp3");
let file = files[0];
file = ask(
  `found files :\n[${files.join("  ")}]
what file you choose to split (${file}): `,
  file
);
console.log(`You choose ${file}`);

if (files.includes(file)) {
  const originalFileName = file;
  const audioPartPrefixNameExtension = "mp3";
  const audioPartPrefixName = gfn(file);
  const start = +ask(`start splitting from (0): `, 0); //В секундах
  const end = +ask(`end splitting to (to the end of track): `, false); //В секундах
  const segmentDuration = +ask(`segment duration(${10}): `, 10); //в секундах
  if (typeof start !== "number" || isNaN(start)) {
    console.error(
      `start(${start}) is unacceptable, it's type = ${typeof start}`
    );
  } else if (typeof segmentDuration !== "number" || isNaN(segmentDuration)) {
    console.error(
      `segment duration(${segmentDuration}) is unacceptable, it's type = ${typeof segmentDuration}`
    );
  } else {
    splitAudio({
      start,
      end,
      originalFileName,
      segmentDuration,
      audioPartPrefixNameExtension,
      audioPartPrefixName,
    });
  }
} else {
  console.error(`file ${file} didn't found`);
}
