const bemFolder     = "../BEMscripts/";

let testBem = {
  blocksArr: [
    undefined,
    {
      title: 'block1',
    }, 
    {
      title: 'block2'
      elements: [
        {title: "__element-1"},
        {title: "__element-2"},
        {title: "__element-3"},
      ]
    }, 
    {
      title: 'block3'
      modifications: [
        {title: "_modification-1"},
        {title: "_modification-2"},
        {title: "_modification-3"},
      ]
    }, 
    {
      title: 'block4'
      elements: [
        {title: "__element-1"},
        {title: "__element-2"},
        {title: "__element-3"},
      ],
      modifications: [
        {title: "_modification-1"},
        {title: "_modification-2"},
        {title: "_modification-3"},
      ]
    }
  ],//Массив строк, в каждой строке название блока
  showEntities : require(bemFolder + '_showEntities.js')
}

tests.forEach((item,index) =>{
  console.log(`(${index}) showEntities(${JSON.stringify(item)}) = ${testBem.showEntities(item)} (${index})`);
})