/*1)Проверить - какой формат(если файл один).
  2)Если не mp3 - Конвертировать в mp3
  3)соединить в один файл (нужно ли проверять - если файл один , то объединение не нужно)
  4)Разбить этот большой  файл на отрезки указанной длины
  5)Вставить перед каждым файлом файл односекундной тишины
    столько раз, сколько нужно секунд тешины.
*/

//Не создавай дополнительные утилиты - просто экспортируй

import convertToMp3 from "../mp4_to_mp3";
