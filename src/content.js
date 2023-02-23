import DOM from './dom.js';

export default function ContentManager(projectManager) {
    this.state = null; // empty, projectForm, projectDisplay, taskForm, taskDisplay
    this.node = document.getElementById('content'); // move to input?
    this.sidebarNode = document.querySelector('.list');
    this.projectManager = projectManager;
}
ContentManager.prototype.changeState = function(newState, item) {
    if (this.state !== newState || item !== null) {
        this.state = newState;
        this.update(item);
    }
}
ContentManager.prototype.update = function(item) {
    console.log('updating after changing state to ', this.state);
    DOM.clearNode(this.node);
    switch (this.state) {
        case 'projectForm': this.createProjectForm(); break;
        case 'projectDisplay': this.createProjectDisplay(item); break;
        case 'taskForm': this.createTaskForm(item); break;
        case 'taskDisplay': this.createTaskDisplay(item); break;
        case 'empty': break;
    }
}

ContentManager.prototype.createProjectForm = function() {
    const [_, inputNode] = DOM.createLabeledInput(this.node, 'text', 'project-title', 'Project Title');
    const buttonNode = DOM.createButton(this.node, 'create-new-project', null, 'Create New Project');

    buttonNode.addEventListener('click', () => {
        this.projectManager.createProject(inputNode.value || 'Default Project Title');
        this.updateSidebar();
        this.changeState('empty');
    });
}

ContentManager.prototype.createProjectDisplay = function(project) {
    DOM.createDiv(this.node, null, 'Project Title: ' + project.name);

    DOM.createDiv(this.node, null, 'Tasks: ');
    for (let task of project.taskList) {
        DOM.createDiv(this.node, null, task.title);
    }

    const buttonNode = DOM.createButton(this.node, 'create-new-task', null, 'Create New Task');
    buttonNode.addEventListener('click', () => {
        this.changeState('taskForm', project);
    });
}

ContentManager.prototype.createTaskForm = function(project) {
    let [_, titleNode] = DOM.createLabeledInput(this.node, 'text', 'task-title', 'Task Title');
    let [__, descNode] = DOM.createLabeledInput(this.node, 'text', 'task-desc', 'Task Description');
    let [___, dueDateNode] = DOM.createLabeledInput(this.node, 'date', 'task-due-date', 'Task Due Date');
    let [____, prioNode] = DOM.createLabeledInput(this.node, 'number', 'task-prio', 'Task Priority');

    const buttonNode = DOM.createButton(this.node, 'create-new-task', null, 'Create New Task');

    buttonNode.addEventListener('click', () => {
        project.createTask(titleNode.value, descNode.value, dueDateNode.value, prioNode.value);
        this.updateSidebar();
    });
}

ContentManager.prototype.createTaskDisplay = function(task) {
    DOM.createDiv(this.node, null, 'Title: ' + task.title);
    DOM.createDiv(this.node, null, 'Description: ' + task.desc);
    DOM.createDiv(this.node, null, 'Due Date: ' + task.dueDate);
    DOM.createDiv(this.node, null, 'Priority: ' + task.prio);
    // TODO: css classes

    // Delete Button
    const deleteButton = DOM.createButton(this.node, 'delete-task', null, 'Delete Task');
    deleteButton.addEventListener('click', () => {
        task.delete();
        this.updateSidebar();
        this.changeState('empty');
    });
}

ContentManager.prototype.updateSidebar = function() {
    DOM.clearNode(this.sidebarNode);

    for (let project of this.projectManager.projectList) {
        let groupNode = DOM.createDiv(this.sidebarNode, ['project-group']);
        let projectNode = DOM.createDiv(groupNode, ['project'], project.name + ' : ' + project.index);

        projectNode.dataset.selected = project.selected;

        projectNode.addEventListener('click', () => {
            project.select();
            this.updateSidebar();
            this.changeState('projectDisplay', project);
        });

        for (let task of project.taskList) {
            let taskNode = DOM.createDiv(groupNode, ['task'], task.title + " : " + task.index);

            taskNode.dataset.selected = task.selected;

            taskNode.addEventListener('click', () => {
                task.select();
                this.updateSidebar();
                this.changeState('taskDisplay', task);
            });
        }
    }
}