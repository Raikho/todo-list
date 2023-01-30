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
}

export default Content;