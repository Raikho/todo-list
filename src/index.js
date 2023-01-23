import './style.css'

import Dom from './dom.js';

document.getElementById('add-task').addEventListener('click', () => {
    taskArray.push(new Task());
    Dom.tasks.update(taskArray);
});

const taskArray = [];

function Task() {
    this.taskNum = 1;
    this.title = 'title';
    this.desc = 'desc';
    this.dueDate = 'dueDate';
    this.prio = 'priority';
}
