/*1)Проверить - какой формат(если файл один).
  2)Если не mp3 - Конвертировать в mp3
  3)соединить в один файл (нужно ли проверять - если файл один , то объединение не нужно)
    [обязательно нужна проверка на количество файлов для объединения - если их меньше 2 то выйдет обшибка]
  4)Разбить этот большой  файл на отрезки указанной длины
  5)Вставить перед каждым файлом файл односекундной тишины
    столько раз, сколько нужно секунд тешины.
*/

// import audioconcat from "audioconcat";
import convertToMp3 from "../convert_mp4_to_mp3/convert.js";
import concat from "../concatenate_files/concatenate.js";
import split from "../split_audio_file/split.js";
import fs from "fs";
import cfol from "../../createFolder.js";
import dfol from "../../deleteFolder.js";

const tempFolderName = "temp";
const tempFullBookName = "tempFullBook.mp3";
const tempConvertedToMp3FileName = "orig.mp3";
const ofd = "./orig_book"; //original files destination
const tfd = `./${tempFolderName}`; // temp folderds destination ??
const pfd = "./processed_book"; //processed files destination
let cfd = ofd; // current files destination ??

function processBook() {
  let fullBook = ""; //Тут будет храниться путь к объединённому файлу всей книги
  const filesInFolderOFD = fs.readdirSync(ofd);
  const files = filesInFolderOFD.map((f) => `${ofd}/${f}`); //Файлы с указанием папки хранения
  if (files.length === 0) {
    console.log(`looks lik you forgot fill ${ofd} folder. Try again.`);
    return;
  } else if (files.length === 1) {
    let res = files[0].match(/\.mp4$/gi);
    if (res) {
      res = res[0];
      if (res === ".mp4") {
        cfol(tfd);
        convertToMp3(`${files[0]}`, `${tfd}/${tempConvertedToMp3FileName}`);
        files[0] = `${tfd}/${tempConvertedToMp3FileName}`;
        cfd = tfd;
      } else if (res !== ".mp3") {
        console.warn("неизвестный формат файла" + files[0]);
        return;
      }
    }
    fullBook = files[0];
  } else {
    console.log(`Start concatination files.`);
    cfol(tfd);
    concat(files, `${tfd}/${tempFullBookName}`);
    fullBook = `${tfd}/${tempFullBookName}`;
  }
}
processBook();
//ты должен передавать имена файлов вместе с папкой перед их именами
//переделай массив
// concat(files, `${pfd}/kekPuk.mp3`);
// split({
//   start: 1,
//   originalFileName: `${ofd}/1.mp3`,
//   segmentDuration: 3,
//   audioPartPrefixNameExtension: "mp3",
//   audioPartPrefixName: `${pfd}/puk`,
// });
