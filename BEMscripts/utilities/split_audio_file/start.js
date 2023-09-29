import splitAudio from "./split.js";

const originalFileName = "orig.mp3";
const segmentDuration = 10; //в секундах
const audioPartPrefixNameExtension = "mp3";
const audioPartPrefixName = "segment";
const start = 120; //В секундах

splitAudio({
  start,
  originalFileName,
  segmentDuration,
  audioPartPrefixNameExtension,
  audioPartPrefixName,
});
