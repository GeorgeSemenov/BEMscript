//https://github.com/h2non/audioconcat#readme
const audioconcat = require("audioconcat");
const ffmpeg = require("fluent-ffmpeg");

const arrLength = 3; //по умолчанию 5
initialValue = 1; // по умолчанию 1
let files = Array.from({ length: arrLength }, (_, i) => i + initialValue); //Если выставить значения по умолчанию, то получишь массив [1,2,3,4,5] т.е. набор цифр от initialValue до arrLength + initialValue
files = files.map((item) => item + ".mp3");

// const command = ffmpeg();
// command.input("./1.mp3").input("./2.mp3").mergeToFile("./audio.mp3");
// const concat = require("ffmpeg-concat");

// concat 3 mp4s together using 2 500ms directionalWipe transitions
// concat({
//   output: "audio.mp3",
//   videos: files,
// }).then(() => {
//   console.log(`concatination complete`);
// });

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
