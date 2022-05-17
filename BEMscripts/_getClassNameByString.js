/*_getClassNameByString(str[, arrName = undefined]) Данный метод базы данных 
принимает строку str и пробегается по всем сущностям БД и сравнивает str и title если совпадает, то возвращает имя класса 
в противном случае возвращает false
Дополнительный необязательный аргумент arrName – название массива в котором нужно проводить поиск
*/
module.exports = function _getClassNameByString(str, arrName = undefined){
  let result = this.pages.find((page)=>{return (page.title == str)});
  if (result){  //Если строка совпадает с тайтлом одной страницы возвращаем название класса "page"
    return 'page'
  }else{
    if(arrName){//Если указанно имя массива в котором нужно искать
      if(arrName.toLowerCase() == 'pages'){return false}//Если предполагается, что переданное имя является page и при этом в pages данная строка не найденна, то возвращаем false
    }
    let className = false;
    this.blocks.find((block)=>{//проверяем все блоки, если есть совпадение хотябы с одним title - возращаем "block"
      if (block.title == str){className = "block" ; return true}
      else{//Если title блока не совпадает с str значит надо проверить тайтлы модификаторов и элементов этого блока
        block.elements.find((element)=>{//пробегаемся по элементам блока
          if (element.title == str) {className = "element"; return true}
          else{//Если в элементе нет совпадений, значит проверяем его модификаторы
            element.modificators.find((elemMod)=>{
              if (elemMod.title == str){className = "modificator"; return true}
            })
          }
        })
        block.modificators.find((modificator)=>{//пробегаемся по модификаторам блока
          if(modificator.title == str){className = "modificator"; return true}
        })
      }
    })
    return className;
  }
}