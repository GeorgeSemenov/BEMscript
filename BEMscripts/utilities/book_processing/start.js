/*1)Проверить - какой формат(если файл один).
  2)Если не mp3 - Конвертировать в mp3
  3)соединить в один файл (нужно ли проверять - если файл один , то объединение не нужно)
    [обязательно нужна проверка на количество файлов для объединения - если их меньше 2 то выйдет обшибка]
  4)Разбить этот большой  файл на отрезки указанной длины
  5)Вставить перед каждым файлом файл односекундной тишины
    столько раз, сколько нужно секунд тешины.
*/

//Не создавай дополнительные утилиты - просто экспортируй

import convertToMp3 from "../mp4_to_mp3/convert.js";
import concat from "../concatenate_files/concatenate.js";

//Необходимо для concat
import audioconcat from "audioconcat";
import ffmpWithoutPath from "@ffmpeg-installer/ffmpeg";
import ffmpeg from "fluent-ffmpeg";
const ffmpegPath = ffmpWithoutPath.path;
ffmpeg.setFfmpegPath(ffmpegPath);

const ofd = "./"; //original files destination
const pfd = "./"; //processed files destination
const files = [`${ofd}/1.mp3`, `${ofd}/2.mp3`];
concat(files, `${pfd}/kekPuk.mp3`);

// function concat(files, resultedFileName) {
//   audioconcat(files)
//     .concat(resultedFileName)
//     .on("start", function (command) {
//       console.log("concatination process started:", command);
//     })
//     .on("error", function (err, stdout, stderr) {
//       console.error("Error:", err);
//       console.error("ffmpeg stderr:", stderr);
//     })
//     .on("end", function (output) {
//       console.error("Audio created in:", output);
//     });
// }
