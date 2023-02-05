import {CreateNewTask} from './task.js'

function CreateProjectManager() {
    const proto  = {
        projectList: [],
        selectedProject: null,
        selectProject: function(project) {this.selecteProject = project.index;},
        createProject: function(name) {
            const proto = {
                name: name,
                index: this.projectList.length, // change on delete
                taskList: [],
                addStartingTask: function() {
                    console.log('adding default starting tasks...');
                    this.taskList.push(CreateNewTask());
                }
            };
            this.projectList.push(Object.create(proto));
            console.log('this from inside createProject in ProjectManager factory: ', this);
        },
    };
    return Object.create(proto);
}

function reateProject(projectManager, name) {
    const proto = {
        name: name,
        index: projectManager.projectList.length,
        taskList: [],
        addStartingTask: function() {
            console.log('adding default starting tasks...');
            this.taskList.push(CreateNewTask());
        },
    };
    projectManager.projectList.push(Object.create(proto));
}

export {CreateProjectManager};