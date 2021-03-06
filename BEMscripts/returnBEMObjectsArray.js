/*
returnBEMObjectsArray(str) - принимает строку (str) с синтаксисом(указан в начале файла «краткое описание функций» и  возвращает массив бэм объектов.
БЭМобъект- это объект который вычленяется из синтаксиса переданной строки (str). В данном объекте есть два свойства :
      title — тэг блока и имя блока (или его порядковый номер в массиве всех блоков)
      inner — всё, что находится внутри фигурных скобочек
*/
const returnBEMObjectsArray = function (str){
  let spacePos      = str.indexOf(' ');
  let openCurlyBracketPos = str.indexOf('{');
  if (!(~openCurlyBracketPos) && !(~spacePos)) {return [{title: str}]}//Если нет ни пробелов ни фигурных скобок
  else if(!(~openCurlyBracketPos) && ~spacePos){return str.split(' ').map(obj=> {return {title: obj} })}//Если нет фигурных скобочек но есть пробелы
  else if(~openCurlyBracketPos && !(~spacePos)){return [{title: str.slice(0,str.slice(str.indexOf('{'))), inner: str.slice(str.indexOf('{')+1)} ]}//Если есть фигурные скобочки но нет пробелов
  else if(~openCurlyBracketPos && ~spacePos){//Если есть фигурные скобочки и пробелы
    let bemObjects = [];
    for(let index=0; index < str.length; index ++){
      let char = str[index];
      if (char =='{') {//Если цикл наткнулся на открывающуюся скобочку, значит определяем title и находим закрывающую скобочку это и будет inner
        if (str.includes('}') ) {//раз есть открывающая скобочка (см условие выше) то должна быть и закрывающая иначе обшибка
          openCurlyBracketPos = index;//Каждую итерацию цикла мы будем определять мы будем заного определять openCurlyBrackets, на случай, если там несколько открывающихся скобочек.
          let closedCurlyBracketPos = str.indexOf('}');
          let title = str.slice(0,openCurlyBracketPos);
          let inner = str.slice(openCurlyBracketPos+1, closedCurlyBracketPos);
          bemObjects.push({title: title, inner: inner});

          str=( (closedCurlyBracketPos + 2) < str.length)? str.slice(closedCurlyBracketPos + 2): str.slice(closedCurlyBracketPos)//+2 - так мы съедаем } и пробел, который идёт после неё
          index = 0;
        }else{console.log(`>>> Ошибка в функции returnBEMStringsArray, строка :\n${str}\nне соотвевтсвует синтаксису`);}
      }else{
        if(char ==' '){//Если наткнулись на пробел Значит позади находится title это не может быть пробел после { т.к. после закрывающей скобочки мы проскакиваем два символа, чтобы проглатить пробел после {
          let title = str.slice(0,index);
          bemObjects.push({title: title});

          str=( (index + 1) < str.length)? str.slice(index + 1): str.slice(index);
          index = 0;
        }
      }
    }
    if(str.length >= 2){//Если после цикла в строке осталось больше двух символов, значит там тайтл для ещё одной строк
      bemObjects.push({title: str});
    }
    return bemObjects;
  }
};

module.exports = returnBEMObjectsArray;