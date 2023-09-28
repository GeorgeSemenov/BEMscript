import audioconcat from "audioconcat";
import ffmpWithoutPath from "@ffmpeg-installer/ffmpeg";
import ffmpeg from "fluent-ffmpeg";
const ffmpegPath = ffmpWithoutPath.path;
ffmpeg.setFfmpegPath(ffmpegPath);

//Собираем список файлов.
const ofd = "./orig_book"; //original files destination
const pfd = "./processed_book"; //processed files destination
const files = [`${ofd}/1.mp3`, `${ofd}/2.mp3`];
concat(files, `${pfd}/kekPuk.mp3`);

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
