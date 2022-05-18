const isInFileSearchedString = require(`${__dirname}/../isInFileSearchedString.js`);

console.log(isInFileSearchedString(`${__dirname}/testFOrMyOnlyWIshes/kekPuk.txt`,`прочтёт, тот`));//этот файл есть и в нём этот текст есть
console.log(isInFileSearchedString(`${__dirname}/testFOrMyOnlyWIshes/kekPuk23.txt`,`прочтёт, тот`));//этого файла нет
console.log(isInFileSearchedString(`${__dirname}/testFOrMyOnlyWIshes/kekPuk23.txt`,`прочтёт, тот ты`));//этого файла нет и этого текста в нём тоже нет
console.log(isInFileSearchedString(`${__dirname}/testFOrMyOnlyWIshes/kekPuk.txt`,`прочтёт, тот ты`));//этот файл есть, но в нём нет этого текста
console.log(isInFileSearchedString(`${__dirname}/testFOrMyOnlyWIshes/kekPuk.txt`,`Кто прочтёт`));//этот файл есть, но в нём нет этого текста