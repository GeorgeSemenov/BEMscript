import fs from "fs";
import concat from "./concatenate.js";

const files = [];
const folderPath = "./";
const regExFilesExtension = /\.mp3$/i; //Очень важно не ставить тут флаг g объяснение смотри тут https://qna.habr.com/q/1308956
// - с опциями g и y объект RegExp сохраняет позицию, с которой продолжает поиск при следующем вызове
const resultedFileName = "resultedAudioKek.mp3";

//Собираем список файлов в директории folderPath.
fs.readdir(folderPath, function (err, files) {
  if (err) {
    console.error(err);
    return;
  }
  const concFls = files.filter((file) => {
    //concFls stands for concatenatedFiles
    return regExFilesExtension.test(file);
  });

  concat(concFls, resultedFileName);
});
