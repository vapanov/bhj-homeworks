'use strict';

function isInViewport (element) {
   const viewportHeight = window.innerHeight;
   const elementTop = element.getBoundingClientRect().top;
   const elementBottom = element.getBoundingClientRect().bottom;
   if (elementBottom > 0 && elementTop < viewportHeight) {
      return true;
   }
   return false;
}

const elementsReveal = Array.from(document.querySelectorAll('.reveal'));

window.addEventListener('scroll', function() {
   for (let i = 0; i < elementsReveal.length; i++) {
      if (!isInViewport(elementsReveal[i])) {
         elementsReveal[i].classList.remove('reveal_active');
      } else {
         if (!elementsReveal[i].classList.contains('reveal_active')) {
         elementsReveal[i].classList.add('reveal_active');
         }
      }
   }
});