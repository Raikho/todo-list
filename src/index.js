import './style.css'

import Dom from './dom.js';
import Content from './content.js';
// import CreateTask from './task.js';
import Task from './task.js';

// Content.changeState('newTask');

document.getElementById('taskForm').addEventListener('click', () => {
    // taskArray.push(CreateTask('num',
    //                           Dom.newTask.getTitle(),
    //                           Dom.newTask.getDesc(),
    //                           Dom.newTask.getDueDate(),
    //                           Dom.newTask.getPrio(),
    //                           ));
    // TODO: reset input
    // Dom.tasks.update(taskArray);
    Task.create();
    Dom.tasks.update(Task.array);
});

// TODO: reorganize task code location
// TODO: add icons
// TODO: add submit form button
// TODO: form validation
// TODO: style form
// TODO: add ability to click tasks
