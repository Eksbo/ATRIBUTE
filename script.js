'use script' ;
//  Метод getAttribute считывает значение заданного атрибута у тега.
// Синтаксис
// элемент.getAttribute(имя атрибута);



// Метод setAttribute позволяет изменить значение заданного атрибута какого-либо тега.
// Синтаксис
// элемент.setAttribute(имя атрибута, новое значение)

//  Метод removeAttribute удаляет заданный атрибут у какого-либо тега.
// Синтаксис
// элемент.removeAttribute(имя атрибута)

//  Метод hasAttribute проверяет наличие заданного атрибута у элемента. Если атрибут есть - выведет true, если нет - выведет false.
// Синтаксис
// элемент.hasAttribute(имя атрибута)

//  Дан элемент:
// <input id="elem" value="text">
// Получите значение его атрибута value. 

// let inp = document.querySelector('#elem') ;
// console.log(inp.getAttribute('value'));

//  Дан элемент:
// <input id="elem" class="www zzz">

// Получите значение его атрибута class. 
// let inp = document.querySelector('#elem') ;
// console.log(inp.getAttribute('class'));

// Дан элемент:
// <input id="elem">

// Установите его атрибут value в значение 'text'. 
// let inp = document.querySelector('#elem') ;
// inp.setAttribute('value' , 'text');
// console.log(inp.getAttribute('value'));

// Дан элемент:
// <input id="elem">

// Установите ему атрибут class в значение 'valid'. 
// let inp = document.querySelector('#elem') ;
// inp.setAttribute('class' , 'valid');
// console.log(inp.getAttribute('class'));

// Дан элемент:
// <input id="elem" value="text">

// Удалите у него атрибут value. 
// let inp = document.querySelector('#elem') ;
// inp.removeAttribute('value');
// console.log(inp.getAttribute('value'));

// Дан элемент:
// <input id="elem" value="text">

// Проверьте наличие у него атрибута value. 
// let inp = document.querySelector('#elem') ;

// console.log(inp.hasAttribute('value'));

//  Свойство classList содержит псевдомассив CSS классов элемента, 
// а также позволяет добавлять и удалять классы элемента, проверять наличие 
// определенного класса среди классов элемента.

// Речь идет об атрибуте class, внутри которого можно 
// писать несколько классов через пробел, например www ggg zzz.
//  С помощью classList можно удалить, к примеру, класс ggg, не затронув остальные классы.
// Синтаксис
// элемент.classList

// 

// Метод add объекта classList позволяет добавлять CSS классы элементу.
// Синтаксис
// элемент.classList.add(класс);


// 

// Метод remove объекта classList удаляет заданный CSS класс элемента.
// Синтаксис
// элемент.classList.remove(класс);


// Метод contains объекта classList проверяет наличие CSS класса элемента.
// Синтаксис
// элемент.classList.contains(класс);

//  Метод toggle объекта classList чередует заданный CSS класс элемента: 
// добавляет класс, если его нет и удаляет, если есть.
// Синтаксис
// элемент.classList.toggle(класс);

// Дан элемент:
// <p id="elem" class="www ggg zzz"></p>

// Узнайте количество его классов. 

// let p = document.querySelector('#elem') ;
// let arrClass = p.classList ;
// console.log(arrClass.length);


// Дан элемент:
// <p id="elem" class="www ggg zzz"></p>

// Переберите в цикле его классы. 
// let p = document.querySelector('#elem') ;
// let arrClass = p.classList ;
// for ( let k of arrClass)
// {
//     console.log(k);
// }


// Дан элемент:
// <p id="elem" class="www ggg zzz"></p>

// Добавьте ему класс xxx. 
// let p = document.querySelector('#elem') ;
// p.classList.add("xxx")
// let arrClass = p.classList ;
// for ( let k of arrClass)
// {
//     console.log(k);
// }


// Дан элемент:
// <p id="elem" class="www ggg zzz"></p>

// Удалите у него класс www и класс zzz. 
// let p = document.querySelector('#elem') ;
// p.classList.remove("www",'zzz')
// let arrClass = p.classList ;
// for ( let k of arrClass)
// {
//     console.log(k);
// };


// Дан элемент: 
// <p id="elem" class="www ggg zzz"></p>

// Проверьте наличие у него класса ggg. 
// let p = document.querySelector('#elem') ;
// if(p.classList.contains("ggg"))
// {
//     console.log("+++");
// }

// Дан элемент. Добавьте ему класс www, если его нет и удалите - если есть. 
// let p = document.querySelector('#elem') ;
// p.classList.toggle('www') ;
// console.log(p.classList) ;
// p.classList.toggle('www') ;
// console.log(p.classList) ;