import './style.css'

import Dom from './dom.js';
import CreateTask from './task.js';
const taskArray = [];

document.getElementById('add-task').addEventListener('click', () => {
    let title = Dom.newTask.getTitle();
    taskArray.push(CreateTask('num',
                              Dom.newTask.getTitle(),
                              Dom.newTask.getDesc(),
                              Dom.newTask.getDueDate(),
                              Dom.newTask.getPrio(),
                              ));
    Dom.tasks.update(taskArray);
});
