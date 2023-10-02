//https://www.npmjs.com/package/mp3-cutter
//npm i get-audio-duration
//Для работы этого скрипта нужно установить mp3-cutter и get-audio-duration

import MP3Cutter from "mp3-cutter";
import { getAudioDurationInSeconds } from "get-audio-duration";

//duration в секундах
export default function audioSplit({
  start,
  end,
  originalFileName,
  segmentDuration,
  audioPartPrefixNameExtension,
  audioPartPrefixName,
}) {
  let curTime;
  getAudioDurationInSeconds(originalFileName).then((duration) => {
    if (end) {
      if (end > duration) {
        console.warn(
          `end(${end}) is bigger than full duration(${duration}) ${originalFileName}. mp3 will be splitetd to its duration`
        );
        end = duration;
      } else if (start > end) {
        console.warn(
          `looks like you mixed up start(${start} and the end(${end}), i'll fix it.`
        );
        const temp = start;
        start = end;
        end = temp;
      }
    } else {
      //Если значение для конца - не указанно то оно приравнивается длине трека
      end = duration;
    }

    for (curTime = start; curTime < duration; curTime += segmentDuration) {
      const est = curTime + segmentDuration; //end segment time

      MP3Cutter.cut({
        src: originalFileName,
        target: `${audioPartPrefixName}(${ft(curTime)}__${ft(
          est < end ? est : end
        )}).${audioPartPrefixNameExtension}`,
        start: curTime,
        end: est < end ? est : end,
      });
    }
  });
}

function ft(secs) {
  return `${parseInt(secs / 3600)}-${parseInt((secs % 3600) / 60)}-${parseInt(
    secs % 60
  )}`;
}
