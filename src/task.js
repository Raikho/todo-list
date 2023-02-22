export default function Task(title, project) {
    this.taskNum = 'placeholder num';
    this.title = title || 'placeholder title';
    this.desc = 'placeholder description';
    this.dueDate = 'placeholder due date';
    this.prio = 'placeholder priority';

    this.project = project;
    // Set index to current taskList length
    this.index = project.taskList.length;
}