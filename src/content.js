import Dom from './dom.js';

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

    let node = Dom.createLabel('Task Title', 'task-title');
    this.node.appendChild(node);
    node = Dom.createInput('text', 'task-title');
    this.node.appendChild(node);

    node = Dom.createLabel('Task Description', 'task-desc');
    this.node.appendChild(node);
    node = Dom.createInput('text', 'task-desc');
    this.node.appendChild(node);

    node = Dom.createLabel('Task Due Date', 'task-due-date');
    this.node.appendChild(node);
    node = Dom.createInput('text', 'task-due-date');
    this.node.appendChild(node);

    node = Dom.createLabel('Task Priority', 'task-prio');
    this.node.appendChild(node);
    node = Dom.createInput('text', 'task-prio');
    this.node.appendChild(node);
}

export default Content;