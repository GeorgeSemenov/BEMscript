/*1)Проверить - какой формат(если файл один).
  2)Если не mp3 - Конвертировать в mp3
  3)соединить в один файл (нужно ли проверять - если файл один , то объединение не нужно)
    [обязательно нужна проверка на количество файлов для объединения - если их меньше 2 то выйдет обшибка]
  4)Разбить этот большой  файл на отрезки указанной длины
  5)Вставить перед каждым файлом файл односекундной тишины
    столько раз, сколько нужно секунд тешины.
*/

// import audioconcat from "audioconcat";
import convert from "../convert_mp4_to_mp3/convert.js";
import concat from "../concatenate_files/concatenate.js";
import split from "../split_audio_file/split.js";
import fs from "fs";
import cfol from "../../createFolder.js";
import dfol from "../../deleteFolder.js";
import df from "../../deleteFile.js";
import ask from "../../ask.js";
import getFileNameWithoutExtension from "../../getFileNameWithoutExtension.js";
import getFiles from "../../getFiles.js";

const tempFullBookName = "tempFullBook.mp3";
const tempConvertedToMp3FileName = "orig.mp3";
const ofd = "./orig_book"; //original files destination
const tfd = `./temp`; // temp folderds destination ??
const pfd = "./processed_book"; //processed files destination
const src = "./src";
const defaultSegmentDuratin = 10; //В секундах

async function processBook() {
  let fullBook = ""; //Тут будет храниться путь к объединённому файлу всей книги
  const filesInFolderOFD = fs.readdirSync(ofd);
  const files = filesInFolderOFD.map((f) => `${ofd}/${f}`); //Файлы с указанием папки хранения
  const regExt = /\.[^.\s]+$/i;
  let filesExtenstion;
  if (files.length === 0) {
    console.error(`looks like you forgot fill ${ofd} folder. Try again.`);
    return;
  }

  const segmentDuration = +ask(
    `Input segment duration in seconds (${defaultSegmentDuratin}): `,
    defaultSegmentDuratin
  );
  const startSegmentationFrom = +ask(
    `Input start segmentation in seconds (1): `,
    1
  );
  const endSegmentationFrom = +ask(
    `Input end of segmentation in seconds (to the end): `,
    false
  );
  const defaultAudioPartPrefixName = getFileNameWithoutExtension(fullBook);
  const audioPartPrefixName = ask(
    `How to name segments after splitting? (${defaultAudioPartPrefixName}): `,
    defaultAudioPartPrefixName
  );
  const silanceDuration = +ask(
    `Enter silance duration (${defaultSegmentDuratin}): `,
    defaultSegmentDuratin
  );

  filesExtenstion = files[0].match(regExt);
  if (filesExtenstion) {
    filesExtenstion = filesExtenstion[0];
  } else {
    console.error(`files must have extension`);
    return;
  }

  cfol(tfd);
  if (filesExtenstion === ".mp4") {
    console.log(`начинаем конвертацию файлов`);
    fullBook = `${tfd}/${getFileNameWithoutExtension(files[0])}.mp3`; //temp converted file name
    await convert(files[0], fullBook);
  } else if (filesExtenstion === ".mp3" && files.length === 1) {
    fullBook = files[0];
  } else if (filesExtenstion !== ".mp3") {
    console.warn("неизвестный формат файла" + files[0]);
    return;
  }

  if (files.length > 1) {
    fullBook = `${tfd}/${tempFullBookName}`;
    await concat(files, fullBook);
  }

  // //Разбиваем fullBook на отрезки заданной длины

  await split({
    end: endSegmentationFrom,
    start: startSegmentationFrom,
    originalFileName: fullBook,
    segmentDuration,
    audioPartPrefixNameExtension: "mp3",
    audioPartPrefixName: `${tfd}/${audioPartPrefixName}`,
  });
  df(fullBook); //Удаляем полную книгу.

  const splitedFiles = getFiles(tfd).map((f) => `${tfd}/${f}`);
  const silanceTrack = `${tfd}/silance${silanceDuration}sec.mp3`;
  await concat(
    [...Array(10)].map((m) => `${src}/silance1sec.mp3`),
    silanceTrack
  );
  for (const sf of splitedFiles) {
    await concat(
      [sf, silanceTrack],
      `${pfd}/${getFileNameWithoutExtension(sf)}.mp3`
    );
  }
  dfol(tfd);
}
processBook();
