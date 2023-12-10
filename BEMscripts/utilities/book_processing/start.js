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
import cfol from "../../createFolder.js";
import dfol from "../../deleteFolder.js";
import df from "../../deleteFile.js";
import cf from "../../copyFile.js";

import getFileNameWithoutExtension from "../../getFileNameWithoutExtension.js";
import getFiles from "../../getFiles.js";

import survey from "./src/utils/survey.js";

const ofd = "./orig_book"; //original files destination
const tfd = `./temp`; // temp folderds destination ??
const pfd = "./processed_book"; //processed files destination
const src = "./src";
let isNeedToSaveMP3Book = false;

async function processBook() {
  let fullBook = ""; //Тут будет храниться путь к объединённому файлу всей книги
  const filesInFolderOFD = getFiles(ofd);
  if (filesInFolderOFD.length === 0) {
    console.error(`looks like you forgot fill ${ofd} folder. Try again.`);
    return;
  }
  const fileName = filesInFolderOFD[0];
  const isNeedToDeleteConvertedFullBook = false;
  const files = filesInFolderOFD.map((f) => `${ofd}/${f}`); //Файлы с указанием папки хранения
  const regExt = /\.[^.\s]+$/i;
  let filesExtenstion;

  const {
    segmentDuration,
    silanceDuration,
    startSegmentationFrom,
    endSegmentationFrom,
    audioPartPrefixName,
  } = survey(getFileNameWithoutExtension(fileName));

  filesExtenstion = fileName.match(regExt);
  if (filesExtenstion) {
    filesExtenstion = filesExtenstion[0];
  } else {
    console.error(`files must have extension`);
    return;
  }

  cfol(tfd);
  if (filesExtenstion === ".mp4") {
    isNeedToDeleteConvertedFullBook = true;
    console.log(`начинаем конвертацию файлов`);
    fullBook = `${tfd}/${getFileNameWithoutExtension(fileName)}.mp3`; //temp converted file name
    await convert(files[0], fullBook);
    isNeedToSaveMP3Book = true;
  } else if (filesExtenstion === ".mp3" && files.length === 1) {
    fullBook = files[0];
  } else if (filesExtenstion !== ".mp3") {
    console.warn("неизвестный формат файла" + files[0]);
    return;
  }

  if (files.length > 1) {
    fullBook = `${tfd}/${fileName}`;
    isNeedToSaveMP3Book = true;
    await concat(files, fullBook);
  }

  await split({
    end: endSegmentationFrom,
    start: startSegmentationFrom,
    originalFileName: fullBook,
    segmentDuration,
    audioPartPrefixNameExtension: "mp3",
    audioPartPrefixName: `${tfd}/${audioPartPrefixName}`,
  });

  if (isNeedToSaveMP3Book) {
    cf(fullBook, `${pfd}/!${getFileNameWithoutExtension(fileName)}.mp3`);
  }

  if (isNeedToDeleteConvertedFullBook) {
    df(fullBook); //Удаляем полную книгу.
  }

  const splitedFiles = getFiles(tfd).map((f) => `${tfd}/${f}`);
  const silanceTrack = `${tfd}/silance${silanceDuration}sec.mp3`;
  await concat(
    [...Array(silanceDuration)].map((m) => `${src}/silance1sec.mp3`),
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
