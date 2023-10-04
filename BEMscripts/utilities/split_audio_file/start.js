import splitAudio from "./split.js";
import getFiles from "../../getFiles.js";
import gfn from "../../getFileNameWithoutExtension.js";
import ask from "../../ask.js";
import convertStringToSeconds from "../../convertStringToSeconds.js";

async function calme() {
  const off = "./original_files"; //off stands for original files folder
  const sff = "./splited_files"; //sff stands for splited files folder
  const files = getFiles(`${off}/`, "mp3");
  let file = files[0];
  file = ask(
    `found files: [${files.join("  ")}]
what file you choose to split (${file}): `,
    file
  );
  console.log(`You choose ${file}`);

  if (!files.includes(file)) {
    console.error(`file ${file} didn't found`);
    return;
  }
  const originalFileName = `${off}/${file}`;
  const audioPartPrefixNameExtension = "mp3";
  const audioPartPrefixName = `${sff}/${gfn(file)}`;

  console.log(`You can set time by string: 1h 2m 3s`);
  const start = convertStringToSeconds(ask(`start splitting from (1): `, 1)); //В секундах, по умолчанию нужно чтобы start был больше 0, иначе разделение будет работать некорректно.
  const end = convertStringToSeconds(
    ask(`end splitting to (to the end of track): `, false)
  ); //В секундах
  const segmentDuration = convertStringToSeconds(
    ask(`segment duration(${10}): `, 10)
  ); //в секундах
  if (typeof start !== "number" || isNaN(start)) {
    console.error(
      `start(${start}) is unacceptable, it's type = ${typeof start}`
    );
  } else if (typeof segmentDuration !== "number" || isNaN(segmentDuration)) {
    console.error(
      `segment duration(${segmentDuration}) is unacceptable, it's type = ${typeof segmentDuration}`
    );
  } else {
    await splitAudio({
      start,
      end,
      originalFileName,
      segmentDuration,
      audioPartPrefixNameExtension,
      audioPartPrefixName,
    });
  }
}

calme();
