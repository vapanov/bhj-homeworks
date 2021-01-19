'use strict';
//console.log();

// почему display: none?
// сделать пропадание подсказки по второму клику

// переменные
   const hasTooltips = Array.from(document.querySelectorAll('a.has-tooltip'));

   let activeHasTooltip;

   const tooltipDiv = document.createElement('div');
   tooltipDiv.className = "tooltip";
   tooltipDiv.innerHTML = "Текст подсказки";

// события
hasTooltips.forEach((element) => 
   element.addEventListener('click', (evt) => {
      evt.preventDefault();

      let currentElement = evt.target;

      if (currentElement === activeHasTooltip) {
         tooltipDiv.remove();
         activeHasTooltip = '';
         return;
      }

      tooltipDiv.innerHTML = currentElement.title;
      currentElement.after(tooltipDiv);
      console.log(tooltipDiv);


   }, false));

