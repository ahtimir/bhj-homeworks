'use strict';

const taskInput = document.getElementById('task__input'),
    button = document.getElementById('tasks__add'),
    tasksList = document.getElementById('tasks__list');

function addTask() {
    let htmlContainer = 
    `<div class="task">
        <div class="task__title">
            ${taskInput.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
    </div>`;

    tasksList.insertAdjacentHTML('beforeEnd', htmlContainer);
    removeTask();
    taskInput.value = '';
};

function removeTask() {
    if (tasksList.lastElementChild === null) {
        return;
    };
    tasksList.lastElementChild.querySelector('.task__remove').addEventListener('click', (event) => {
        event.target.closest('.task').remove();
    });
};

taskInput.addEventListener('keydown', (event) => {
    if (event.key == 'Enter' && taskInput.value != '') {
        addTask();
    };
});

button.addEventListener('click', (event) => {
    event.preventDefault();
    if (taskInput.value != '') {
        addTask();
    };
});

