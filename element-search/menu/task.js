'use strict';

// console.log();
// debugger;

// Используя цикл зарегистрируйте обработчики события click на элементах с классом menu__link
const elementsMenuLink = Array.from(document.querySelectorAll('.menu__link'));

// объявляем переменную последнее активное меню
let lastActiveMenu;

for (let i = 0; i < elementsMenuLink.length; i++) {
// обработчик нажатия на пункт меню
   elementsMenuLink[i].onclick = function () {

// Найдите меню рядом со ссылкой. Если оно есть, переключите у него класс menu_active
// ищем ближайшее вложенное меню
      const elementMenuSub = this.closest('.menu__item').querySelector('.menu_sub');
// если таковое есть, то активируем его
      if (elementMenuSub) {
// если какое-то меню уже активировано, и это не обрабатываемое меню - деактивировать
         if (elementMenuSub != lastActiveMenu && lastActiveMenu) {
            lastActiveMenu.classList.remove('menu_active');
         }
// переключаем активатор
         elementMenuSub.classList.toggle('menu_active');
// присваиваем последнемий активный блок меню 
         lastActiveMenu = elementMenuSub;

// Запрещайте переход по ссылке для тех, что имеют вложенное меню. 
         return false;
      }
// Остальные пункты меню должны без помех переводить на соответствующие страницы.

   };
}