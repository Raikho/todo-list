import Dom from './dom.js';
import { CreateProjectManager } from './project.js';

const Task = {};
Task.array = [];
Task.create = function() {
    const proto = {};
    const props = {};
    props.taskNum = 'placeholder num';
    props.title = Dom.newTask.getTitle();
    props.desc = Dom.newTask.getDesc();
    props.dueDate = Dom.newTask.getDueDate();
    props.prio = Dom.newTask.getPrio();
    this.array.push(Object.assign(Object.create(proto), props));
}

let CreateTask = (taskNum, title, desc, dueDate, prio) => {
    const proto = {

    }
    const props = {taskNum, title, desc, dueDate, prio}
    return Object.assign(Object.create(proto), props);
}

function CreateNewTask(title) {
    const proto = {
        title: title || 'Empty Title',
    };
    return Object.create(proto);
}

export default Task;
export {CreateNewTask};