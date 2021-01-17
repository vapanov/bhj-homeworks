'use strict';

const allRotators = Array.from(document.querySelectorAll('.rotator'));
const elementsRotator = [];
const timerId = [];


for (let r = 0; r < allRotators.length; r++) {
   elementsRotator[r] = Array.from(allRotators[r].querySelectorAll('.rotator__case'));

   for (let i = 0; i < elementsRotator[r].length; i++) {
//start data-
      elementsRotator[r][i].style.color = elementsRotator[r][i].dataset.color;

// не смог решить задачу с произвольной задержкой, иду дальше, догонять курс

//end data-
   }
   timerId[r] = setInterval(rotate, 1000, elementsRotator[r]);
}

function rotate (rotatorArray) {
   for (let i = 0; i < rotatorArray.length; i++) {
      if (rotatorArray[i].classList.contains('rotator__case_active')) {
         rotatorArray[i].classList.remove('rotator__case_active');
         if (i < rotatorArray.length - 1) {
            rotatorArray[i + 1].classList.add('rotator__case_active');
         } else {
            rotatorArray[0].classList.add('rotator__case_active');
         }
         return;
      }
   }
}


