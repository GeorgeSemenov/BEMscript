//https://github.com/h2non/audioconcat#readme
//https://www.npmjs.com/package/@ffmpeg-installer/ffmpeg
//Для работы этого скрипта в ubuntu нужно также установить ffmpeg и @ffmpeg-installer/ffmpeg
//Для работы в windows нужно также прописать дополнительные 3строки, они будут указаны ниже

import audioconcat from "audioconcat";
import fs from "fs";
//Эти 4 строки нужны для работы в windows
import ffmpWithoutPath from "@ffmpeg-installer/ffmpeg";
import ffmpeg from "fluent-ffmpeg";
const ffmpegPath = ffmpWithoutPath.path;
ffmpeg.setFfmpegPath(ffmpegPath);

const files = [];

const folderPath = "./";
const regExFilesExtension = /\.mp3$/i; //Очень важно не ставить тут флаг g объяснение смотри тут https://qna.habr.com/q/1308956
// - с опциями g и y объект RegExp сохраняет позицию, с которой продолжает поиск при следующем вызове

const resultedFileName = "resultedAudioKek.mp3";
//Собираем список файлов.
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

export default function concat(files, resultedFileName) {
  audioconcat(files)
    .concat(resultedFileName)
    .on("start", function (command) {
      console.log("concatination process started:", command);
    })
    .on("error", function (err, stdout, stderr) {
      console.error("Error:", err);
      console.error("ffmpeg stderr:", stderr);
    })
    .on("end", function (output) {
      console.error("Audio created in:", output);
    });
}
