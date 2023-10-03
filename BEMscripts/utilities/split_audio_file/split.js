//https://www.npmjs.com/package/mp3-cutter
//npm i get-audio-duration
//Для работы этого скрипта нужно установить mp3-cutter и get-audio-duration

import MP3Cutter from "mp3-cutter";
import { getAudioDurationInSeconds } from "get-audio-duration";

//duration в секундах
export default async function audioSplit({
  start,
  end,
  originalFileName,
  segmentDuration,
  audioPartPrefixNameExtension,
  audioPartPrefixName,
}) {
  let curTime;
  const duration = await getAudioDurationInSeconds(originalFileName);

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
  for (curTime = start; curTime < end; curTime += segmentDuration) {
    const est =
      curTime + segmentDuration < end ? curTime + segmentDuration : end; //end segment time
    const target = `${audioPartPrefixName}(${ft(curTime)}__${ft(
      est
    )}).${audioPartPrefixNameExtension}`;

    await MP3Cutter.cut({
      src: originalFileName,
      target: target,
      start: curTime,
      end: est,
    });
    console.log(
      `start = ${start}, end= ${end}, file = ${originalFileName}, created file = ${target}`
    );
  }
}

function ft(secs) {
  return `${parseInt(secs / 3600)}-${parseInt((secs % 3600) / 60)}-${parseInt(
    secs % 60
  )}`;
}
