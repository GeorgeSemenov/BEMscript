export default function convertStringToSeconds(str) {
  if (str !== "string") {
    console.error(
      `error in function convertStringToSeconds. Type of str(${str}) = ${typeof str}
      function return 0`
    );
    return 0;
  }
  const h = +str.match(/\d+h/i)[0].slice[(0, -1)];
  const m = +str.match(/\d+m/i)[0].slice[(0, -1)];
  const s = +str.match(/\d+s/i)[0].slice[(0, -1)];
  return h * (60 * 60) + m * 60 + s;
}
