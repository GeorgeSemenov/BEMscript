//https://www.youtube.com/watch?v=z_CANxYAsfk
import ffmpeg from "fluent-ffmpeg";

export default function convert(convertedFileName, saveToFileName, cal) {
  ffmpeg(convertedFileName)
    .toFormat("mp3")
    .saveToFile(saveToFileName, (stdout, stderr) => {})
    .on("error", (err) => {
      console.warn(err);
    })
    .on("progress", (pr) => {
      console.log(`converted ${convertedFileName} time = ${pr.timemark}`);
    })
    .on("end", () => {
      console.log(`=== converting ${convertedFileName} complete ===`);
    });
}
