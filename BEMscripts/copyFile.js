import fs from "fs";

export default function copyFile(file, destination) {
  try {
    fs.copyFileSync(file, destination);
  } catch (err) {
    console.warn(
      `error in copyFile function. Trying to copy ${file} to ${destination}, but an error occured`,
      err
    );
  }
}

// copyFile("./copyFile.js", "./utilities/copyFile.txt");
