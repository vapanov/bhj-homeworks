'use strict';
//console.log();

// сделать пропадание подсказки по второму клику
// div можно ставить в любое место хтмл, позиция фиксед и координаты поставят его на место на странице

// переменные
   const hasTooltips = Array.from(document.querySelectorAll('a.has-tooltip'));

   let activeHasTooltip;

   const tooltipDiv = document.createElement('div');
   tooltipDiv.className = "tooltip tooltip_active";

// события
hasTooltips.forEach((element) => 
   element.addEventListener('click', (evt) => {
      evt.preventDefault();

      let currentElement = evt.target;

      if (currentElement === activeHasTooltip || ) {
         tooltipDiv.remove();
         activeHasTooltip = '';
         return;
      }
      activeHasTooltip = currentElement;

      currentElement.after(tooltipDiv);

   }, false));

function tooltipTemplate(currentElement) {
   tooltipDiv.innerHTML = currentElement.title;
   return;
}
.getBoundingClientRect()
