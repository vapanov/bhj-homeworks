"use strict";

// не понимаю, мы вызываем этот скрипт при каждом клике?
// или один раз вызываем, создаём обработчики и они уже включаются при кликах?

let winCount = 0, looseCount = 0; // инициируем переменные удач и промахов

for (let i = 1, element; i < 10; i++) {
   element = document.getElementById(`hole${i}`); // ловим элемент с индексом

   element.onclick = function() { // обработчик нажатия для элемента
      if (this.className == "hole hole_has-mole") {
         winCount++; // плюсуем
         document.getElementById("dead").textContent = winCount; // записываем на страницу результат
         if (winCount == 10) {alert("WIN!"); reset();} // победа или нет?
      } else {
         looseCount++;
         document.getElementById("lost").textContent = looseCount;
         if (looseCount == 10) {alert("LOOSE!"); reset();}
      }
   }
}

function reset() { // обнуляем счётчики и перерисовываем их
   winCount = looseCount = 0;
   document.getElementById("dead").textContent = winCount;
   document.getElementById("lost").textContent = looseCount;
}