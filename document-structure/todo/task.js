'use strict';

// переменные
const addButton = document.getElementById('tasks__add');
const tasksForm = document.forms['tasks__form'];
const divTaskList = document.getElementById('tasks__list');

// события
addButton.addEventListener('click', (evt) => {
   evt.preventDefault();
   const inputNewTask = document.getElementById('task__input');
   const newTask = inputNewTask.value;
   if (newTask) {
      divTaskList.append(taskTemplate(newTask));
      tasksForm.reset();
   }
}, false);

// шаблон задачи
function taskTemplate(title) {
   let newDivTask = document.createElement('div');
   newDivTask.className = "task";
   
   let newDivTaskTitle = document.createElement('div');
   newDivTaskTitle.className = "task__title";
   newDivTaskTitle.insertAdjacentHTML('afterbegin', `${title}`);

   let newAnchTaskRemove = document.createElement('a');
   newAnchTaskRemove.className = "task__remove";
   newAnchTaskRemove.href = "#";
   newAnchTaskRemove.innerHTML = "&times;";
   newAnchTaskRemove.addEventListener('click', (evt) => {newDivTask.remove()});

   newDivTaskTitle.append(newAnchTaskRemove);
   newDivTask.append(newDivTaskTitle);

   return newDivTask;
}
