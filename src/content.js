import Dom from './dom.js';
import Task from './task.js';


const Content = {};
Content.state = null; // 'empty' 'taskForm' 'projectForm' 'taskDisplay'
Content.node = document.getElementById('content');

Content.changeState = function(newState, projectManager) {
    console.log('changing state to: ', newState); // DEBUG
    if (this.state !== newState) {
        this.state = newState;
        this.update(projectManager);
    }
}

Content.update = function(projectManager) {
    console.log('updating... ', this.node); // DEBUG
    Dom.clearNode(this.node);
    switch (this.state) {
        case 'projectForm':
            this.createProjectForm(projectManager);
            break;
        case 'taskForm':
            this.createTaskForm(projectManager);
            break;
    }
}

Content.createProjectForm = function(projectManager) {
    console.log('creating new project form...');
    const [_, inputNode] = Dom.createLabeledInput(this.node, 'text', 'project-title', 'Project Title');

    let buttonNode = Dom.createButton(this.node, 'create-new-project', null, 'Create New Project');
    buttonNode.addEventListener('click', () => {
        console.log('creating a new project..., name value: ', inputNode.value);
        projectManager.createProject(inputNode.value || 'Default Project Title');
        Dom.updateSidebar(projectManager)
        // TODO: reset input
    });
}

Content.createTaskForm = function() {
    console.log('creating new task form...'); // DEBUG
    Dom.createLabeledInput(this.node, 'text', 'task-title', 'Task Title');
    Dom.createLabeledInput(this.node, 'text', 'task-desc', 'Task Description');
    Dom.createLabeledInput(this.node, 'date', 'task-due-date', 'Task Due Date');
    Dom.createLabeledInput(this.node, 'text', 'task-prio', 'Task Priority');

    let buttonNode = Dom.createButton(this.node, 'create-new-task', null, 'Create New task');
    buttonNode.addEventListener('click', () => {
        console.log('creating a new task...'); // DEBUG
        Task.create();
        Dom.tasks.update(Task.array);
        // TODO: reset input
    });
    let backNode = Dom.createButton(this.node, 'clear-task-form', ['back'], 'Back');
    backNode.addEventListener('click', () => {
        console.log('clearing task form by back button') // DEBUG
        Content.changeState('empty');
    });
}

export default Content;