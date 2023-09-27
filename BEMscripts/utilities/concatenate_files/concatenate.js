//https://github.com/h2non/audioconcat#readme
//https://www.npmjs.com/package/@ffmpeg-installer/ffmpeg
//Для работы этого скрипта в ubuntu нужно также установить ffmpeg и @ffmpeg-installer/ffmpeg
//Для работы в windows нужно также прописать дополнительные 3строки, они будут указаны ниже

const audioconcat = require("audioconcat");
const fs = require("fs");
//Эти три строки нужны для работы в windows
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
const ffmpeg = require("fluent-ffmpeg");
ffmpeg.setFfmpegPath(ffmpegPath);

const files = [];

const folderPath = "./";
const regExFilesExtension = /\.mp3$/i; //Очень важно не ставить тут флаг g объяснение смотри тут https://qna.habr.com/q/1308956
// - с опциями g и y объект RegExp сохраняет позицию, с которой продолжает поиск при следующем вызове

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

  audioconcat(concFls)
    .concat("resultedAudioKek.mp3")
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
});

// const arrLength = 24; //по умолчанию 5
// initialValue = 1; // по умолчанию 1
// let files = Array.from({ length: arrLength }, (_, i) => i + initialValue); //Если выставить значения по умолчанию, то получишь массив [1,2,3,4,5] т.е. набор цифр от initialValue до (arrLength + initialValue - 1) т.е. [1,2,3,4,5]
// files = files.map((item) => (item < 10 ? "0" : "") + item + ".mp3");

// audioconcat(files)
//   .concat("resultedAudioKek.mp3")
//   .on("start", function (command) {
//     console.log("concatination process started:", command);
//   })
//   .on("error", function (err, stdout, stderr) {
//     console.error("Error:", err);
//     console.error("ffmpeg stderr:", stderr);
//   })
//   .on("end", function (output) {
//     console.error("Audio created in:", output);
//   });
