//https://www.youtube.com/watch?v=z_CANxYAsfk
const ffmpeg = require("fluent-ffmpeg");

const fileName = "./video.mp4";
const saveToFileName = "audio.mp3";

ffmpeg(fileName)
  .toFormat("mp3")
  .saveToFile(saveToFileName, (stdout, stderr) => {})
  .on("error", (err) => {
    console.warn(err);
  })
  .on("progress", (pr) => {
    console.log(`total file time = ${pr.timemark}`);
  })
  .on("end", () => {
    console.log(`converting complete`);
  });
