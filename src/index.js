import './style.css'

import Dom from './dom.js';
import Content from './content.js';
import CreateTask from './task.js';
const taskArray = [];

Content.update();
// function updateState() {
//     if (Content.state === 'empty') {
//         const mainNode = document.getElementById('content');
//         console.log('state: ', Content.state, mainNode);
//         Dom.clearNode(mainNode);
//         // document.getElementById
//     }
// };
// updateState();

document.getElementById('add-task').addEventListener('click', () => {
    let title = Dom.newTask.getTitle();
    taskArray.push(CreateTask('num',
                              Dom.newTask.getTitle(),
                              Dom.newTask.getDesc(),
                              Dom.newTask.getDueDate(),
                              Dom.newTask.getPrio(),
                              ));
    // TODO: reset input
    Dom.tasks.update(taskArray);
});
