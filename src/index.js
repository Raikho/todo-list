import './style.css'

import Dom from './dom.js';
import Content from './content.js';
import CreateTask from './task.js';
const taskArray = [];

Content.changeState('newTask');

document.getElementById('new-task').addEventListener('click', () => {
    // newTask.state =
    // let title = Dom.newTask.getTitle();
    // taskArray.push(CreateTask('num',
    //                           Dom.newTask.getTitle(),
    //                           Dom.newTask.getDesc(),
    //                           Dom.newTask.getDueDate(),
    //                           Dom.newTask.getPrio(),
    //                           ));
    // TODO: reset input
    // Dom.tasks.update(taskArray);
});
