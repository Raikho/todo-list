// const taskList =  document.querySelector('.list');

const createDiv = function(classList, textContent) {
    let node = document.createElement('div');
    for (let c of classList)
        node.classList.add(c);
    node.textContent = textContent;
    return node;
}

const clearNode = function(node) {
    while(node.hasChildNodes()) {
        node.removeChild(node.firstChild);
    }
}

const Dom = {}
Dom.newTask = {
    getTitle() {return document.getElementById('task-title').value || 'Empty Title'},
    getDesc() {return document.getElementById('task-desc').value || 'Empty Description'},
    getDueDate() {return document.getElementById('task-due-date').value || 'Empty Due Date'},
    getPrio() {return document.getElementById('task-title').value || 'Empty Prio'},
}
Dom.tasks = {
    taskList: document.querySelector('.list'),
    create(taskArray) {
        for (let task of taskArray) {
            let node = createDiv(['task'], task.title);
            this.taskList.appendChild(node);
        }
    },
    update(taskArray) {
        clearNode(this.taskList);
        this.create(taskArray);
    }
};

export default Dom;