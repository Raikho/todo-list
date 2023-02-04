import {CreateNewTask} from './task.js'

function CreateProjectManager() {
    const proto  = {
        projectList: [],
    };
    return Object.create(proto);
}

function CreateProject(projectManager, name) {
    const proto = {
        name: name,
        taskList: [],
        addStartingTask: function() {
            console.log('adding default starting tasks...');
            this.taskList.push(CreateNewTask());
        },
    };
    projectManager.projectList.push(Object.create(proto));
}

export {CreateProjectManager, CreateProject};