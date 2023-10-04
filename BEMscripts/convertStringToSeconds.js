export default function convertStringToSeconds(str) {
  if (isFinite(str)) return +str; //Если это число, то его и возвращаем
  if (typeof str !== "string") {
    console.error(
      `error in function convertStringToSeconds. Type of str(${str}) = ${typeof str}
      function return 0`
    );
    return 0;
  }
  let h = t(str, "h");
  const m = t(str, "m");
  const s = t(str, "s");
  return h * (60 * 60) + m * 60 + s;
}

function t(str, l) {
  const s = `\\d+${l}`;
  const reg = new RegExp(s, "i");
  const result = str.match(reg);
  return result ? +result[0].slice(0, -1) : 0;
}
