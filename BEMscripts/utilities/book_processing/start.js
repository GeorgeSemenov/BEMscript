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
let cfd = ofd; // current files destination ??
const src = "./src";
const defaultSegmentDuratin = 10; //В секундах

function processBook() {
  let fullBook = ""; //Тут будет храниться путь к объединённому файлу всей книги
  const filesInFolderOFD = fs.readdirSync(ofd);
  const files = filesInFolderOFD.map((f) => `${ofd}/${f}`); //Файлы с указанием папки хранения
  const regExt = /\.[^.\s]+$/i;
  let filesExtenstion;
  if (files.length === 0) {
    console.error(`looks like you forgot fill ${ofd} folder. Try again.`);
    return;
  }

  filesExtenstion = files[0].match(regExt);
  if (filesExtenstion) {
    filesExtenstion = filesExtenstion[0];
  } else {
    console.error(`files must have extension`);
    return;
  }

  if (filesExtenstion === ".mp4") {
    cfol(tfd);
    console.log(`начинаем конвертацию файлов`);
    const tcfn = `${tfd}/${getFileNameWithoutExtension(files[0])}.mp3`; //temp converted file name
    convert(files[0], tcfn);
    fullBook = tcfn;
    cfd = tfd;
  } else if (filesExtenstion === ".mp3" && files.length === 1) {
    fullBook = files[0];
  } else if (filesExtenstion !== ".mp3") {
    console.warn("неизвестный формат файла" + files[0]);
    return;
  }

  if (files.length > 1) {
    console.log(`Start concatination files.`);
    cfol(tfd);
    concat(files, `${tfd}/${tempFullBookName}`);
    fullBook = `${tfd}/${tempFullBookName}`;
  }

  //Разбиваем fullBook на отрезки заданной длины
  const segmentDuration = ask(
    `Iput segment duration in seconds (${defaultSegmentDuratin}): `,
    defaultSegmentDuratin
  );
  const startSegmentationFrom = ask(
    `Input start segmentation in seconds (1): `,
    1
  );
  const defaultAudioPartPrefixName =
    getFileNameWithoutExtension(fullBook).match(/\/[^\/]*$/)[0];
  const audioPartPrefixName = ask(
    `How to name segments after splitting? (${defaultAudioPartPrefixName}): `,
    defaultAudioPartPrefixName
  );
  split({
    end: false, // до конца файла
    start: startSegmentationFrom,
    originalFileName: fullBook,
    segmentDuration,
    audioPartPrefixNameExtension: "mp3",
    audioPartPrefixName: `${tfd}/${audioPartPrefixName}`,
  });

  df(fullBook); //Удаляем полную книгу.

  const splitedFiles = getFiles(tfd).map((f) => `${tfd}/${f}`);

  const silanceDuration = ask(
    `Enter silance duration (${defaultSegmentDuratin}): `,
    defaultSegmentDuratin
  );
  const silanceTrack = `${tfd}/silance${silanceDuration}sec.mp3`;
  concat(
    [...Array(10)].map((m) => `${src}/silance1sec.mp3`),
    silanceTrack
  );
  splitedFiles.forEach((sf) => {
    concat([sf, silanceTrack], `${pfd}/`);
  });
  dfol(tfd);
}
processBook();
