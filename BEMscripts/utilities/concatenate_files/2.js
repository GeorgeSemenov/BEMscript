const fs = require("fs");
let arr = [];
const files = [];

const folderPath = "./";

// Собираем список файлов
// arr = fs.readdirSync(folderPath);
// console.log(regExFilesExtension.test(str));
// arr = arr.filter((file) => regExFilesExtension.test(file));
let count = 0;
const regExFilesExtension = /\.mp3/gi;
const str = "segment(0-2-10__0-2-18).mp3";
arr = [str, str];

arr.forEach((f) => {
  const bol = regExFilesExtension.test(f);
  console.log(f, f.match(regExFilesExtension).length);
  if (bol) {
    count += f.match(regExFilesExtension).length;
  }
});
console.log(`count = ${count}`);
