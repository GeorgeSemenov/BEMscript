//просто убирает расширение, которе идёт
//после точки, перед концом строки
export default function (fullFileName) {
  return fullFileName.slice(0, fullFileName.lastIndexOf("."));
}
