//https://www.youtube.com/watch?v=z_CANxYAsfk
import ffmpeg from "fluent-ffmpeg";
import gfnwe from "../../getFileNameWithoutExtension.js";

export default function convert(convertedFileName, saveToFileName, cal) {
  if (!convertedFileName) {
    console.error(`converted file name didn't dpecified`);
    return new Promise((res, rej) => {});
  }
  if (!saveToFileName) {
    console.error(`saved file name didn't specified`);
    return new Promise((res, rej) => {});
  }
  ffmpeg(convertedFileName)
    .toFormat("mp3")
    .saveToFile(saveToFileName, (stdout, stderr) => {})
    .on("error", (err) => {
      console.warn(err);
    })
    .on("progress", (pr) => {
      console.log(
        `converted ${convertedFileName} to ${saveToFileName} time = ${pr.timemark}`
      );
    })
    .on("end", () => {
      console.log(
        `=== converting ${convertedFileName} to ${saveToFileName} complete ===\n\n\n`
      );
      if (typeof cal === "function") {
        cal();
      }
    });
}

export function recursiveConvert(convertedFiles, isVirtualArrCreated = false) {
  const virtualArray = isVirtualArrCreated
    ? convertedFiles
    : convertedFiles.concat([]).reverse();
  const file = virtualArray.pop();
  const sfn = `${gfnwe(file)}.mp3`; //saved file name
  if (virtualArray.length) {
    convert(file, sfn, recursiveConvert(virtualArray, true));
  } else {
    convert(file, sfn);
  }
}
