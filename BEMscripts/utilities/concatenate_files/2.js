const fs = require("fs");
let arr = [];
const files = [];

const folderPath = "./";
const regExFilesExtension = /\.mp3$/gi;

// Собираем список файлов
// arr = fs.readdirSync(folderPath);
arr = [
  "2.js",
  "concatenateMP3files.js",
  "segment(0-2-0__0-2-10).mp3",
  "segment(0-2-10__0-2-18).mp3",
];
// arr = arr.filter((file) => regExFilesExtension.test(file));
arr.forEach((f) => {
  const bol = regExFilesExtension.test(f);
  console.log(f, bol);
  if (bol) {
    console.log(`add ${f}`);
    files.push(f);
  }
});
console.log(files);
