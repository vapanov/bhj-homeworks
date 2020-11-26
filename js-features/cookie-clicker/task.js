"use strict";

let clickCounter = document.getElementById("clicker__counter").textContent;
let clickSpeed = document.getElementById("clicker__speed").textContent;

const element = document.getElementById("cookie"); // наша печенька
let prevDate = new Date();  // переменная для скорости клика

element.onclick = function() {
   clickCounter++;
   if (this.width == "200") {this.width = "210";} 
   else {this.width = "200";}

   clickSpeed = (1000 / (Date.now() - prevDate)).toFixed(2); // посчитаем скорость клика и сократим до 2х после запятой
   prevDate = Date.now();
   
   document.getElementById("clicker__counter").textContent = clickCounter;
   document.getElementById("clicker__speed").textContent = clickSpeed;

};