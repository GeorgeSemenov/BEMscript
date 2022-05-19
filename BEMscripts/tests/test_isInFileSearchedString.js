const isInFileSearchedString = require(`${__dirname}/../isInFileSearchedString.js`);

// console.log(`Нестрогий поиск`);
// console.log(isInFileSearchedString(`${__dirname}/testFOrMyOnlyWIshes/kekPuk.txt`,`прочтёт, тот`));//этот файл есть и в нём этот текст есть(true)
// console.log(isInFileSearchedString(`${__dirname}/testFOrMyOnlyWIshes/kekPuk23.txt`,`прочтёт, тот`));//этого файла нет (false)
// console.log(isInFileSearchedString(`${__dirname}/testFOrMyOnlyWIshes/kekPuk23.txt`,`прочтёт, тот ты`));//этого файла нет и этого текста в нём тоже нет (false)
// console.log(isInFileSearchedString(`${__dirname}/testFOrMyOnlyWIshes/kekPuk.txt`,`прочтёт, тот ты`));//этот файл есть, но в нём нет этого текста (false)
// console.log(isInFileSearchedString(`${__dirname}/testFOrMyOnlyWIshes/kekPuk.txt`,`Кто прочтёт`));//этот файл есть, и в нём есть этот текста (true)

console.log(`\n\n\nСтрогий поиск`);
console.log(isInFileSearchedString(`${__dirname}/testFOrMyOnlyWIshes/tag-block.pug`,`tag`,true));//этот файл есть и в нём этот текст есть, но он является частью другого слова(false)
console.log(isInFileSearchedString(`${__dirname}/testFOrMyOnlyWIshes/tag-block.pug`,`tag-block__tag-name`,true));//этот файл есть и в нём этот текст есть, и он не является частью другого слова(true)
console.log(isInFileSearchedString(`${__dirname}/testFOrMyOnlyWIshes/tag-block.pug`,`барабуль__tag-description`,true));//этот файл есть но в нём нет этого текста(false)
console.log(isInFileSearchedString(`${__dirname}/testFOrMyOnlyWIshes/tag-block.pugввв`,`барабуль__tag-description`,true));//этого файла нет(false)