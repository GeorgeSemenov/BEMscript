//https://www.npmjs.com/package/mp3-cutter
//npm i get-audio-duration
//Для работы этого скрипта нужно установить mp3-cutter и get-audio-duration

const MP3Cutter = require("mp3-cutter");
const { getAudioDurationInSeconds } = require("get-audio-duration");

const originalFileName = "orig.mp3";
let audioPartPrefixName = "segment";
let audioPartPrefixNameExtension = "mp3";
let start = 120; //В секундах
const segmentDuration = 10; //в секундах

let curTime;
//duration в секундах
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

function ft(secs) {
  return `${parseInt(secs / 3600)}-${parseInt((secs % 3600) / 60)}-${parseInt(
    secs % 60
  )}`;
}
