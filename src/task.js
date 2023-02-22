export default function Task(title, index) {
    this.taskNum = 'placeholder num';
    this.title = title || 'placeholder title';
    this.desc = 'placeholder description';
    this.dueDate = 'placeholder due date';
    this.prio = 'placeholder priority';

    this.index = index;
}