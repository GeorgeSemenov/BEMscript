import fs from "fs";

export default function deleteFolder(folder) {
  try {
    fs.rmSync(folder, { recursive: true });
  } catch (err) {
    console.log(err);
    throw err;
  }
}
