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
import fs from "fs";

const ofd = "./orig_book"; //original files destination
const pfd = "./processed_book"; //processed files destination

const filesInFolderOFD = fs.readdirSync(ofd);
const files = filesInFolderOFD.map((f) => `${ofd}/${f}`);
//ты должен передавать имена файлов вместе с папкой перед их именами
//переделай массив
// concat(files, `${pfd}/kekPuk.mp3`);
