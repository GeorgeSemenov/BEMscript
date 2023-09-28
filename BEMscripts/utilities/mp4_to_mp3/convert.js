//https://www.youtube.com/watch?v=z_CANxYAsfk
import ffmpeg from "fluent-ffmpeg";

const fileName = "./video.mp4";
const saveToFileName = "audio.mp3";

export default function convert(filteName, saveToFileName) {
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
}

convert(fileName, saveToFileName);
