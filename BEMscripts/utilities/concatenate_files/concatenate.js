//https://github.com/h2non/audioconcat#readme
//https://www.npmjs.com/package/@ffmpeg-installer/ffmpeg
//Для работы этого скрипта в ubuntu нужно также установить ffmpeg и @ffmpeg-installer/ffmpeg
//Для работы в windows нужно также прописать дополнительные 3строки, они будут указаны ниже

import audioconcat from "audioconcat";
//Эти 4 строки нужны для работы в windows
import ffmpWithoutPath from "@ffmpeg-installer/ffmpeg";
import ffmpeg from "fluent-ffmpeg";

export default async function concat(files, resultedFileName, cal) {
  const ffmpegPath = ffmpWithoutPath.path;
  ffmpeg.setFfmpegPath(ffmpegPath);
  return new Promise((resolve, reject) => {
    audioconcat(files)
      .concat(resultedFileName)
      .on("start", function (command) {
        console.log("concatination process started:", command);
      })
      .on("error", function (err, stdout, stderr) {
        console.error("Error:", err);
        console.error("ffmpeg stderr:", stderr);
        reject(err);
      })
      .on("end", function (output) {
        console.error("Audio created in:", resultedFileName);
        if (typeof cal === "function") {
          cal();
        }
        resolve(output);
      });
  });
}
