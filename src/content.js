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
    const inputNode = DOM.createLabeledInput(containerNode, 'text', 'project-title', 'Project Title');
    const buttonNode = DOM.createButtonContainer(containerNode, 'create-new-project', 'Add Project');

    buttonNode.addEventListener('click', () => {
        this.projectManager.createProject(inputNode.value || 'Default Project Title');
        this.updateSidebar();
        this.changeState('empty');
    });
}

ContentManager.prototype.createProjectDisplay = function(project) {
    let containerNode = DOM.createDiv(this.node, ['project-display-container']);
    DOM.createDiv(containerNode, ['card', 'project-title'], project.name);

    // DOM.createDiv(containerNode, null, 'Tasks: ');
    for (let task of project.taskList) {
        let taskContainer = DOM.createDiv(containerNode, ['card', 'task-summary'], );
        let checkboxNode = DOM.createDiv(taskContainer, ['checkbox'], null);
        checkboxNode.dataset.checked = task.checked;
        checkboxNode.addEventListener('click', () => {
            task.checked = !task.checked;
            this.updateSidebar();
            this.update(project);
        });

        DOM.createDiv(taskContainer, ['title'], task.title);
        let linkNode = DOM.createDiv(taskContainer, ['link'], null);
        linkNode.addEventListener('click', () => {
            task.select();
            this.updateSidebar();
            this.changeState('taskDisplay', task);
        });
    }


    const buttonNode = DOM.createButtonContainer(containerNode, 'new-task-form', 'New Task');
    buttonNode.addEventListener('click', () => {
        this.changeState('taskForm', project);
    });
}

ContentManager.prototype.createTaskForm = function(project) {
    let containerNode = DOM.createDiv(this.node, ['task-form-container']);
    let titleNode = DOM.createLabeledInput(containerNode, 'text', 'task-title', 'Task Title');
    let descNode = DOM.createLabeledInput(containerNode, 'text', 'task-desc', 'Task Description');
    let dueDateNode = DOM.createLabeledInput(containerNode, 'date', 'task-due-date', 'Task Due Date');
    let prioNode = DOM.createLabeledInput(containerNode, 'number', 'task-prio', 'Task Priority');
    prioNode.setAttribute('max', '10');
    prioNode.setAttribute('min', '1');


    const buttonNode = DOM.createButtonContainer(containerNode, 'create-new-task', 'Add Task');

    buttonNode.addEventListener('click', () => {
        project.createTask(titleNode.value, descNode.value, dueDateNode.value, prioNode.value);
        this.updateSidebar();
        this.changeState('empty');
    });
}

ContentManager.prototype.createTaskDisplay = function(task) {
    let containerNode = DOM.createDiv(this.node, ['task-display-container']);
    DOM.createDiv(containerNode, ['task-title', 'card'], 'Task: ' + task.title);
    DOM.createDiv(containerNode, ['task-desc', 'card'], task.desc);
    DOM.createDiv(containerNode, ['task-due-date', 'card'], 'Due Date: ' + task.printDate());
    DOM.createDiv(containerNode, ['task-prio', 'card'], 'Priority: ' + task.prio);
    // TODO: css classes

    // Delete Button
    const deleteButton = DOM.createButtonContainer(containerNode, 'delete-task', 'Delete');
    deleteButton.addEventListener('click', () => {
        task.delete();
        this.projectManager.update();
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
        let projectTitleNode = DOM.createDiv(projectContainerNode, ['title'], project.name);
        let projectCollapseNode = DOM.createDiv(projectContainerNode, ['collapse']);

        projectContainerNode.dataset.selected = project.selected;
        projectCollapseNode.dataset.collapsed = project.collapsed;

        projectTitleNode.addEventListener('click', () => {
            project.select();
            this.updateSidebar();
            this.changeState('projectDisplay', project);
        });
        projectCollapseNode.addEventListener('click', () => {
            project.toggleCollapsed();
            this.updateSidebar();
        });

        for (let task of project.taskList) {
            if (project.collapsed) continue;
            let taskContainerNode = DOM.createDiv(projectGroupNode, ['task-container']);
            let taskNode = DOM.createDiv(taskContainerNode, ['title'], task.title);
            let taskCheckboxNode = DOM.createDiv(taskContainerNode, ['checkbox']);

            taskCheckboxNode.dataset.checked = task.checked;
            taskContainerNode.dataset.selected = task.selected;

            taskCheckboxNode.addEventListener('click', () => {
                task.checked = !task.checked;
                this.updateSidebar();
                if (this.state === 'projectDisplay')
                    this.update(project);
            });
            taskNode.addEventListener('click', () => {
                task.select();
                this.updateSidebar();
                this.changeState('taskDisplay', task);
            });
        }
    }
}