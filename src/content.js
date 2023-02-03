import Dom from './dom.js';
import Task from './task.js';


const Content = {};

Content.state = 'null'; // 'empty' 'newTask' 'taskDisplay'
Content.node = document.getElementById('content');

Content.changeState = function(newState) {
    console.log('changing state to: ', newState);
    if (this.state !== newState) {
        this.state = newState;
        this.update();
    }
}

Content.update = function() {
    console.log('updating... ', this.node);
    Dom.clearNode(this.node);
    if (this.state === 'newTask') {
        this.createNewTaskForm();
    }
}

Content.createNewTaskForm = function() {
    console.log('creating new task form...');

    Dom.createLabeledInput(this.node, 'text', 'task-title', 'Task Title');

    Dom.createLabeledInput(this.node, 'text', 'task-desc', 'Task Description');

    Dom.createLabeledInput(this.node, 'date', 'task-due-date', 'Task Due Date');

    Dom.createLabeledInput(this.node, 'text', 'task-prio', 'Task Priority');

    let buttonNode = Dom.createButton(this.node, 'create-new-task', 'Create New task');
    buttonNode.addEventListener('click', () => {
        console.log('creating a new task...');
        Task.create();
        Dom.tasks.update(Task.array);
        // TODO: reset input
    });

    // node = Dom.createButton('createNewTask', 'Create New Task');
    // node.addEventListener('click', () => {
    //     console.log('creating new task...');
    //     Task.create();
    //     Dom.tasks.update(Task.array);
    //     // TODO: reset input
    // });
    // this.node.appendChild(node);
}

export default Content;