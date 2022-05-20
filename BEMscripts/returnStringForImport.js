//(typeFile, typeOfImport, importEntity,parents=[])
// Данная функция принимает три аргумента
// typeFile = ["pug","scss","js"] - тип файла, куда будут импортировать.
// typeOfImport = ["blockToPage" , "blockToAllblocks", "blockToBlock","elementToBlock", "modificatorToBlock", "modificatorToElement"] - что и куда будет импортироваться
// importEntity - имя сущность, которая будет импортированна (это объект типа Page,Block,Element,Modificator)
// И возвращает строку которую нужно вставить в файл(чтобы импортировать корректно)
// parents - список родителей (для случая блоков и элементалей)
module.exports = function(typeFile, typeOfImport, importEntity, parents=[]){
  switch(typeFile){
    case 'pug':
      if(typeOfImport == 'blockToPage') {return `include ../../blocks/${importEntity}/${importEntity}.pug`;}
      else if(typeOfImport == 'blockToAllBlocks') {return `include ../blocks/${importEntity}/${importEntity}.pug`;}
      else if(typeOfImport == 'blockToBlock') {return `include ../${importEntity}/${importEntity}.pug`;}
      else if(typeOfImport == 'elementToBlock') {return `${importEntity}/${parents[0] + importEntity}.pug`;}
      else {
        console.log(`-----Ошибка в returnStringForImport.js, 
        typeOfImport имеет некоректное значение дли импорта pug файлов. typeOfImport = ${typeOfImport}`);
        return false;
      }
      break;//для 'pug'
    case 'scss':
      if(typeOfImport == 'blockToPage') {return `@import '../../blocks/${importEntity}/${importEntity}';`;}
      else if(typeOfImport == 'blockToAllBlocks') {return `@import '../blocks/${importEntity}/${importEntity}';`;}
      else if(typeOfImport == 'blockToBlock') {return `@import '../${importEntity}/${importEntity}';`;}
      else if(typeOfImport == 'elementToBlock') {return `@import '${importEntity}/${parents[0] + importEntity}';`;}
      else if(typeOfImport == 'modificatorToBlock') {return `@import '${importEntity}/${parents[0] + importEntity}';`;}
      else if(typeOfImport == 'modificatorToElement') {return `@import '${parents[1]}/${importEntity}/${parents[0] + parents[1] + importEntity}';`;}
      else {
        console.log(`-----Ошибка в returnStringForImport.js, 
        typeOfImport имеет некоректное значение для импорта scss файлов. typeOfImport = ${typeOfImport}`);
        return false;
      }
      break;//для 'scss'  
    case 'js':
      if(typeOfImport == 'blockToPage') {return `import '../../blocks/${importEntity}/${importEntity}.js';`;}
      else if(typeOfImport == 'blockToAllBlocks') {return `import '../blocks/${importEntity}/${importEntity}.js';`;}
      else if(typeOfImport == 'blockToBlock') {return `import '../${importEntity}/${importEntity}.js';`;}
      else{
        console.log(`-----Ошибка в returnStringForImport.js, 
        typeOfImport имеет некоректное значение для импорта JS файлов. typeOfImport = ${typeOfImport}`);
        return false;
      }
      break;//для 'js'
    default:
      console.log(`-------Ошибка в returnStringForImport.js
        Значение typeFile = ${typeFile} некорректно`);
      return false
  }
}