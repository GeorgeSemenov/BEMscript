//https://github.com/h2non/audioconcat#readme
//Для работы этого скрипта в ubuntu нужно также уста ffmpeg
//Для работы в windows нужно также установить ffmpeg с официального сайта(но это не точно, в убунту точно работает)
const audioconcat = require("audioconcat");
const ffmpeg = require("ffmpeg");

const arrLength = 24; //по умолчанию 5
initialValue = 1; // по умолчанию 1
let files = Array.from({ length: arrLength }, (_, i) => i + initialValue); //Если выставить значения по умолчанию, то получишь массив [1,2,3,4,5] т.е. набор цифр от initialValue до (arrLength + initialValue - 1) т.е. [1,2,3,4,5]
files = files.map((item) => (item < 10 ? "0" : "") + item + ".mp3");

audioconcat(files)
  .concat("audio.mp3")
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
