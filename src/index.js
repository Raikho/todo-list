import './style.css'

import Dom from './dom.js';
import CreateTask from './task.js';
const taskArray = [];
let state = 'empty'; // 'empty' 'newTask' 'taskDisplay'

function updateState() {
    if (state === 'empty') {
        const mainNode = document.getElementById('main');
        console.log('state: ', state, mainNode);
        Dom.clearNode(mainNode);
        // document.getElementById
    }
};
updateState();


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
