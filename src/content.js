import DOM from './dom.js';

export default function ContentManager(projectManager) {
    this.state = null; // empty, projectForm, projectDisplay, taskForm, taskDisplay
    this.node = document.getElementById('content'); // move to input?
    this.sidebarNode = document.querySelector('.list');
    this.projectManager = projectManager;
}
ContentManager.prototype.changeState = function(newState, item) {
    console.log('changing state to ', newState);
    if (this.state !== newState || item !== null) {
        this.state = newState;
        this.update(item);
    }
}
ContentManager.prototype.update = function(item) {
    console.log('updating after changing state to ', this.state);
    DOM.clearNode(this.node);

    switch (this.state) {
        case 'projectForm':
            this.createProjectForm();
            break;
        case 'projectDisplay':
            this.createProjectDisplay(item);
            break;
        case 'taskForm':
            this.createTaskForm();
            break;
        case 'taskDisplay':
            this.createTaskDisplay(item);
            break;
        case 'empty':
            break;
    }
}

ContentManager.prototype.createProjectForm = function() {
    console.log('creating new project form...');

    const [_, inputNode] = DOM.createLabeledInput(this.node, 'text', 'project-title', 'Project Title');

    const buttonNode = DOM.createButton(this.node, 'create-new-project', null, 'Create New Project');

    buttonNode.addEventListener('click', () => {
        console.log('creating a new project with name: ', inputNode.value);

        this.projectManager.createProject(inputNode.value || 'Default Project Title');

        this.updateSidebar();

        this.changeState('empty');
    });
}

ContentManager.prototype.createProjectDisplay = function(project) {
    console.log('creating new project display page...');

    // TODO: Display current tasks

    const buttonNode = DOM.createButton(this.node, 'create-new-task', null, 'Create New Task');

    buttonNode.addEventListener('click', () => {
        this.changeState('taskForm');
    });
}

ContentManager.prototype.createTaskForm = function() {
    console.log('creating new task form...');

    let [_, titleNode] = DOM.createLabeledInput(this.node, 'text', 'task-title', 'Task Title');

    let [__, descNode] = DOM.createLabeledInput(this.node, 'text', 'task-desc', 'Task Description');

    const buttonNode = DOM.createButton(this.node, 'create-new-task', null, 'Create New Task');

    buttonNode.addEventListener('click', () => {
        console.log('creating a new task with name: ', titleNode.value);

        const currProject = this.projectManager.projectList[this.projectManager.selectedProject];
        currProject.createTask(titleNode.value);
        console.log(currProject);

        this.updateSidebar();

        // TODO: change state: task display
    });
}

ContentManager.prototype.createTaskDisplay = function(task) {
    console.log('creating new task display page...');

    DOM.createDiv(this.node, null, 'Title: ' + task.title);
    DOM.createDiv(this.node, null, 'Description: ' + task.desc);
    DOM.createDiv(this.node, null, 'Due Date: ' + task.dueDate);
    DOM.createDiv(this.node, null, 'Priority: ' + task.priority);
    // TODO: Add remaining info, css
}

ContentManager.prototype.updateSidebar = function() {
    console.log('updating sidebar...');
    DOM.clearNode(this.sidebarNode);

    for (let project of this.projectManager.projectList) {
        let groupNode = DOM.createDiv(this.sidebarNode, ['project-group']);
        let projectNode = DOM.createDiv(groupNode, ['project'], project.name);
        projectNode.addEventListener('click', () => {
            this.projectManager.selectProject(project);
            this.changeState('projectDisplay');
        });

        for (let task of project.taskList) {
            let taskNode = DOM.createDiv(groupNode, ['task'], task.title);
            taskNode.addEventListener('click', () => {
                // TODO: add selected task functionality
                this.changeState('taskDisplay', task);
            });
        }
    }

}