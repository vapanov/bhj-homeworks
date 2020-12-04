'use strict';

const sliderItems = Array.from(document.querySelectorAll('.slider__item'));
const sliderDots = Array.from(document.querySelectorAll('.slider__dot'));

let sliderItemActive = 0;

// обработчик нажатия на скроллы
document.querySelector('.slider__arrow_prev').onclick = function () {
   slideChange(sliderItemActive - 1);
}
document.querySelector('.slider__arrow_next').onclick = function () {
   slideChange(sliderItemActive + 1);
}

// обработчики нажатия на точки
for (let i = 0; i < sliderDots.length; i++) {
   sliderDots[i].onclick = function () {
      if (sliderDots[i].classList.contains('slider__dot_active')) {
         return false;
      }
      slideChange(sliderItemActive = i);
   }
}


// функция смены слайда
function slideChange (arg) {
   // чистим все слайды и точки
   for (let i = 0; i < sliderItems.length; i++) {
      sliderItems[i].classList.remove('slider__item_active');
      sliderDots[i].classList.remove('slider__dot_active');
   }
   // меняем номер активного слайда
   sliderItemActive = arg;
   // бесконечные прокрутчики
   if (sliderItemActive == sliderItems.length) {
      sliderItemActive = 0;
   }
   if (sliderItemActive == -1) {
      sliderItemActive = sliderItems.length - 1;
   }
   // объявляем новый активный слайд
   sliderItems[sliderItemActive].classList.add('slider__item_active');
   sliderDots[sliderItemActive].classList.add('slider__dot_active');
}