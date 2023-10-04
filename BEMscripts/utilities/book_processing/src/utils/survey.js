import cts from "../../../../convertStringToSeconds.js"; //cts means convert to seconds
import ask from "../../../../ask.js";
import getFileNameWithoutExtension from "../../../../getFileNameWithoutExtension.js";

export default function (fileName) {
  const defaultSegmentDuratin = 10; //В секундах
  console.log(`You can set time by string: 1h 2m 3s`);
  const segmentDuration = cts(
    ask(
      `Input segment duration in seconds (${defaultSegmentDuratin}): `,
      defaultSegmentDuratin
    )
  );
  const defaultSilanceDuration = Math.ceil(segmentDuration * 1.5);
  const silanceDuration = cts(
    ask(
      `Enter silance duration (${defaultSilanceDuration}): `,
      defaultSilanceDuration
    )
  );
  const startSegmentationFrom = cts(
    ask(`Input start segmentation in seconds (1): `, 1)
  );
  console.log(`you can input number of segments like "1seg" `);
  const reg = /\dseg/i;
  let endSegmentationFrom = ask(
    `Input end of segmentation in seconds (to the end): `,
    false
  );
  if (reg.test(endSegmentationFrom)) {
    endSegmentationFrom =
      startSegmentationFrom + segmentDuration * parseInt(endSegmentationFrom);
  } else {
    endSegmentationFrom = cts(endSegmentationFrom);
  }
  const defaultAudioPartPrefixName = fileName;
  const audioPartPrefixName = ask(
    `How to name segments after splitting? (${defaultAudioPartPrefixName}): `,
    defaultAudioPartPrefixName
  );
  return {
    segmentDuration,
    silanceDuration,
    startSegmentationFrom,
    endSegmentationFrom,
    audioPartPrefixName,
  };
}
