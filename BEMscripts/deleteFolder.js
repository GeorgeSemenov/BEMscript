import fs from "fs";

export default function deleteFolder(folder) {
  fs.rmdir(folderPath, { recursive: true }, (err) => {
    if (err) {
      console.error(err);
      throw err;
      return;
    }
  });
}
