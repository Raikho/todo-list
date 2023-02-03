// const taskList =  document.querySelector('.list');

const createNode = function(type, classList, textContent) {
    let node = document.createElement(type);
    if (classList)
        for (let cls of classList)
            node.classList.add(cls);
    node.textContent = textContent;
    return node;
}

const createDiv = function(classList, textContent) {
    let node = createNode('div', classList, textContent);
    return node;
}

const createLabel = function(textContent, forId) {
    let node = createNode('label', null, textContent);
    node.setAttribute('for', forId);
    return node;
}
const createInput = function(type, id) {
    let node = createNode('input');
    node.type = type;
    node.id = id;
    return node;
}
const createButton = function(id, textContent) {
    let node = createNode('div', ['button'], textContent)
    node.id = id;
    return node;
}
const clearNode = function(node) {
    while(node.hasChildNodes()) {
        node.removeChild(node.firstChild);
    }
}

const Dom = {}
Dom.clearNode = clearNode;
Dom.createNode = createNode;
Dom.createDiv = createDiv;
Dom.createLabel = createLabel;
Dom.createInput = createInput;
Dom.createButton = createButton;
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