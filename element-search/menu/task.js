'use strict';

console.log();
//      debugger;

// Используя цикл зарегистрируйте обработчики события click на элементах с классом menu__link

const elementsMenuLink = Array.from(document.querySelectorAll('.menu__link'));
for (let i = 0, element; i < elementsMenuLink.length; i++) {
   element = elementsMenuLink[i];
   element.onclick = function () {
      //this.closest('.menu').className = 'menu__sub menu_active';
      console.log(this); // именно там, где оно нужно, this не работает
      let descendMenu = Array.from(this.querySelectorAll('.menu'));
      console.log(descendMenu);
   };
}

// Найдите меню рядом со ссылкой. Если оно есть, переключите у него класс menu_active

// Запрещайте переход по ссылке для тех, что имеют вложенное меню. 
// Остальные пункты меню должны без помех переводить пользователя на соответствующие страницы.