import Task from './task.js';

export default function ProjectManager() {
    this.projectList = [];
    this.selectedProject = null;
}
ProjectManager.prototype.createProject = function(name, type) {
    console.log('creating new project with name: ', name);
    // Set index to current projectList length
    this.projectList.push(new Project(this, name, this.projectList.length, type));
}
ProjectManager.prototype.selectProject = function(project) {
    console.log('selected project #', project.index);
    this.selectedProject = project.index;
}
ProjectManager.prototype.clearSelection = function() {
    for (let project of this.projectList) {
        project.selected = false;
        for (let task of project.taskList) {
            task.selected = false;
        }
    }
}
ProjectManager.prototype.getAllTasks = function() {
    let out = [];
    for (let project of this.projectList)
        if (project.type === 'custom')
            out = out.concat(project.taskList);
    return out;
}
ProjectManager.prototype.update = function() {
    console.log('updating derived projects');
    for (let project of this.projectList) {
        if (project.type === 'prio') {
            project.taskList = this.getAllTasks().filter((task) => {
                return (task.prio >= project.filter);
            });
        }
    }
}


function Project(manager, name, index, type = 'custom') {
    this.name = name;
    this.taskList = [];
    this.selectedTask = null;
    this.collapsed = false;

    this.manager = manager;
    this.selected = false;
    this.index = index;

    this.type = type; // 'custom', 'prio', 'dueSoon'
    this.filter = null;
    if (this.type === 'prio')
        this.filter = 7;
    if (this.type === 'dueSoon')
        this.filter = 7;
    if (type === 'prio' || type === 'dueSoon')
        this.manager.update();
}
Project.prototype.createTask = function(title, desc, dueDate, prio) {
    this.taskList.push(new Task(this, title, desc, dueDate, prio));
    this.manager.update();
}
Project.prototype.selectTask = function(task) {
    console.log('selected task #', this.selectedTask);
    this.selectedTask = task.index;
}
Project.prototype.addStartingTask = function() {
    console.log('adding default starting tasks...');
    this.tasklist.push(new Task());
}
Project.prototype.select = function() {
    this.manager.clearSelection();
    this.selected = true;
}
Project.prototype.deleteTask = function(index) {
    this.taskList.splice(index, 1);
    for (let i = 0; i < this.taskList.length; i++) {
        this.taskList[i].index = i;
    }
}
Project.prototype.toggleCollapsed = function() {
    this.collapsed = !this.collapsed;
}