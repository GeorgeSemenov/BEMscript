import fs from "fs";
//Ищет файлы с расширениями filesExtensionss
//если filesExtensionss - пуст, значит найдёт все папки
const defaultFilesArr = [];
export default function (currentFolder = __dirname, filesExtensions) {
  let files;
  try {
    files = fs.readdirSync(currentFolder).filter((file, index) => {
      if (!fs.lstatSync(`${currentFolder}/${file}`).isDirectory()) return file;
    });
  } catch (err) {
    console.error(`>>>>>\n  Error in function getFiles\n\n${err}`);
  }
  if (!files) {
    return defaultFilesArr;
  }
  if (filesExtensions) {
    if (typeof filesExtensions === "string") {
      filesExtensions = [filesExtensions];
    } else if (!Array.isArray(filesExtensions)) {
      console.error(
        `error in getFiles.\nincorrect value of filesExtensions = ${filesExtensions}`
      );
      return defaultFilesArr;
    }
    const str = `(${filesExtensions.map((e) => "\\." + e).join("|")})`;
    const reg = new RegExp(str, "i");
    files = files.filter((f) => reg.test(f));
  }

  return files;
}
