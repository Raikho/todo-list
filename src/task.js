import {compareAsc, format} from 'date-fns';

export default function Task(project, title, desc, dueDate, prio) {
    this.title = title || 'placeholder title';
    this.desc = desc || 'placeholder description';
    this.dueDate = new Date(dueDate) || new Date('01/01/2023');
    this.prio = prio || 1;
    this.checked = false;

    this.selected = false;
    this.project = project;
    // Set index to current taskList length
    this.index = project.taskList.length;
}
Task.prototype.select = function() {
    this.project.manager.clearSelection();
    this.selected = true;
}
Task.prototype.delete = function() {
    this.project.deleteTask(this.index);
}
Task.prototype.printDate = function() {
    return format(this.dueDate, 'eeee, MMMM do, yyyy');
}