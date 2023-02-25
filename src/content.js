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
    let containerNode = DOM.createDiv(this.node, ['project-form-container']);
    const [_, inputNode] = DOM.createLabeledInput(containerNode, 'text', 'project-title', 'Project Title');
    const buttonNode = DOM.createButton(containerNode, 'create-new-project', null, 'Create New Project');

    buttonNode.addEventListener('click', () => {
        this.projectManager.createProject(inputNode.value || 'Default Project Title');
        this.updateSidebar();
        this.changeState('empty');
    });
}

ContentManager.prototype.createProjectDisplay = function(project) {
    let containerNode = DOM.createDiv(this.node, ['project-display-container']);
    DOM.createDiv(containerNode, null, 'Project Title: ' + project.name);

    DOM.createDiv(containerNode, null, 'Tasks: ');
    for (let task of project.taskList) {
        DOM.createDiv(containerNode, null, task.title);
    }

    const buttonNode = DOM.createButton(this.node, 'create-new-task', null, 'Create New Task');
    buttonNode.addEventListener('click', () => {
        this.changeState('taskForm', project);
    });
}

ContentManager.prototype.createTaskForm = function(project) {
    let containerNode = DOM.createDiv(this.node, ['task-form-container']);
    let [_, titleNode] = DOM.createLabeledInput(containerNode, 'text', 'task-title', 'Task Title');
    let [__, descNode] = DOM.createLabeledInput(containerNode, 'text', 'task-desc', 'Task Description');
    let [___, dueDateNode] = DOM.createLabeledInput(containerNode, 'date', 'task-due-date', 'Task Due Date');
    let [____, prioNode] = DOM.createLabeledInput(containerNode, 'number', 'task-prio', 'Task Priority');

    const buttonNode = DOM.createButton(containerNode, 'create-new-task', null, 'Create New Task');

    buttonNode.addEventListener('click', () => {
        project.createTask(titleNode.value, descNode.value, dueDateNode.value, prioNode.value);
        this.updateSidebar();
    });
}

ContentManager.prototype.createTaskDisplay = function(task) {
    let containerNode = DOM.createDiv(this.node, ['task-display-container']);
    DOM.createDiv(containerNode, ['task-title', 'card'], 'Title: ' + task.title);
    DOM.createDiv(containerNode, ['task-desc', 'card'], 'Description: ' + task.desc);
    DOM.createDiv(containerNode, ['task-due-date', 'card'], 'Due Date: ' + task.dueDate);
    DOM.createDiv(containerNode, ['task-prio', 'card'], 'Priority: ' + task.prio);
    // TODO: css classes

    // Delete Button
    const deleteButton = DOM.createButton(containerNode, 'delete-task', null, 'Delete Task');
    deleteButton.addEventListener('click', () => {
        task.delete();
        this.updateSidebar();
        this.changeState('empty');
    });
}

ContentManager.prototype.updateSidebar = function() {
    DOM.clearNode(this.sidebarNode);

    for (let project of this.projectManager.projectList) {
        let projectGroupNode = DOM.createDiv(this.sidebarNode, ['project-group']);

        let projectContainerNode = DOM.createDiv(projectGroupNode, ['project-container']);
        let projectIconNode = DOM.createDiv(projectContainerNode, ['icon']);
        let projectTitleNode = DOM.createDiv(projectContainerNode, ['title'], project.name + ' #' + project.index);

        projectContainerNode.dataset.selected = project.selected;

        projectTitleNode.addEventListener('click', () => {
            project.select();
            this.updateSidebar();
            this.changeState('projectDisplay', project);
        });

        for (let task of project.taskList) {
            let taskContainerNode = DOM.createDiv(projectGroupNode, ['task-container']);
            let taskNode = DOM.createDiv(taskContainerNode, ['title'], task.title + " #" + task.index);
            let taskCheckboxNode = DOM.createDiv(taskContainerNode, ['checkbox']);

            taskCheckboxNode.dataset.checked = task.checked;
            taskContainerNode.dataset.selected = task.selected;

            taskCheckboxNode.addEventListener('click', () => {
                task.checked = !task.checked;
                this.updateSidebar();
            });
            taskNode.addEventListener('click', () => {
                task.select();
                this.updateSidebar();
                this.changeState('taskDisplay', task);
            });
        }
    }
}