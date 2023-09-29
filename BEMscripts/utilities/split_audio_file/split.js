//https://www.npmjs.com/package/mp3-cutter
//npm i get-audio-duration
//Для работы этого скрипта нужно установить mp3-cutter и get-audio-duration

import MP3Cutter from "mp3-cutter";
import { getAudioDurationInSeconds } from "get-audio-duration";

//duration в секундах
export default function audioSplit({
  start,
  originalFileName,
  segmentDuration,
  audioPartPrefixNameExtension,
  audioPartPrefixName,
}) {
  let curTime;
  getAudioDurationInSeconds(originalFileName).then((duration) => {
    for (curTime = start; curTime < duration; curTime += segmentDuration) {
      const est = curTime + segmentDuration; //end segment time
      MP3Cutter.cut({
        src: originalFileName,
        target: `${audioPartPrefixName}(${ft(curTime)}__${ft(
          est < duration ? est : duration
        )}).${audioPartPrefixNameExtension}`,
        start: curTime,
        end: est < duration ? est : duration,
      });
    }
  });
}

function ft(secs) {
  return `${parseInt(secs / 3600)}-${parseInt((secs % 3600) / 60)}-${parseInt(
    secs % 60
  )}`;
}
