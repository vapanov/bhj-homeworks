"use strict";

let winCount, looseCount = 0;

//let holeActiveClasses = document.getElementById("hole1").class;

   for (let i = 1, activeHole, element; i < 10; i++) {
      activeHole = "hole" + i;

      element = document.getElementById(activeHole);

      element.onclick = function() {
         if (this.class == "hole hole_has-mole") {
            winCount++;
         } else {
            looseCount++;
         }
      }
   }

   if (winCount == 10) {alert("WIN!"); reset();}
   if (looseCount == 10) {alert("LOOSE!"); reset();}

   document.getElementById("dead").textContent = winCount;
   document.getElementById("lost").textContent = looseCount;

function reset() {
   winCount = looseCount = 0;
}