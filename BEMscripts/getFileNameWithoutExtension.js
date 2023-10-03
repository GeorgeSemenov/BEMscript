//просто убирает расширение, которе идёт
//после точки, перед концом строки
export default function (fullFileName) {
  const folderPathIndex = fullFileName.lastIndexOf("/");
  fullFileName = ~folderPathIndex
    ? fullFileName.slice(folderPathIndex + 1)
    : fullFileName;
  return fullFileName.slice(0, fullFileName.lastIndexOf("."));
}
