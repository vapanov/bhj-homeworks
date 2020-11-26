"use strict";

// запускаем отсчёт
let timerId = setInterval(countdown, 1000);

// let timerData = document.getElementById("timer").textContent;

// function countdown() {
//    timerData--;
//    document.getElementById("timer").textContent = timerData;
   
//    if (timerData == 0) {
//       alert("Вы победили в конкурсе!");
//       clearInterval(timerId);
//    }
// }

 // разбираем строку на часы-минуты-секунды
let timerData = document.getElementById("timer").textContent.split(":", 3);
let hour = parseInt(timerData[0]);
let minute = parseInt(timerData[1]);
let sec = parseInt(timerData[2]);


function countdown() {
   if (hour == 0 && minute == 0 && sec == 0) {
      clearInterval(timerId); //чистим таймер
      setTimeout(() => {}, 100); // нужно чтобы успели отрисоваться нули на странице
      if(!alert("Вы победили в конкурсе!")) {window.location = "https://sample-file.bazadanni.com/download/applications/torrent/sample.torrent";}
      return;
   }

   sec--;
   if (sec == 0 && minute > 0) {
      minute--;
      sec = 59;
    }
   if (sec == 0 && minute == 0 && hour > 0) {
      hour--;
      minute = 59;
      sec = 59;
   }

   document.getElementById("timer").textContent = checkTimeDigits(hour) + ":" + checkTimeDigits(minute) + ":" + checkTimeDigits(sec); // прорисовываем новое время
}


function checkTimeDigits(i) {
// если в часах-минутах-секундах меньше двух чисел, добавляем 0
   if (i < 10) {
      i = "0" + i;
   }
   return i;
}