import Task from './task.js';

export default function ProjectManager() {
    this.projectList = [];
    this.selectedProject = null;
}
ProjectManager.prototype.createProject = function(name) {
    // Set index to current projectList length
    this.projectList.push(new Project(name, this.projectList.length));
}
ProjectManager.prototype.selectProject = function(project) {
    console.log('selected project #', project.index);
    this.selectedProject = project.index;
}

function Project(name, index) {
    this.name = name;
    this.taskList = [];
    this.selectedTask = null;

    this.index = index;
}
Project.prototype.createTask = function(title) {
    // Set index to current taskList length
    this.taskList.push(new Task(title, this.taskList.length));
}
Project.prototype.selectTask = function(task) {
    console.log('selected task #', this.selectedTask);
    this.selectedTask = task.index;
}
Project.prototype.addStartingTask = function() {
    console.log('adding default starting tasks...');
    this.tasklist.push(new Task());
}