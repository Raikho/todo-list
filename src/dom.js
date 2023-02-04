const createNode = function(parentNode, type, classList, textContent) {
    let node = document.createElement(type);
    if (classList)
        for (let cls of classList)
            node.classList.add(cls);
    node.textContent = textContent;
    parentNode.appendChild(node);
    return node;
}

const createDiv = function(parentNode, classList, textContent) {
    return createNode(parentNode, 'div', classList, textContent);
}

const createLabeledInput = function(parentNode, type, id, textContent) {
    let labelNode = createNode(parentNode, 'label', null, textContent);
    labelNode.setAttribute('for', id);
    let inputNode = createNode(parentNode, 'input');
    inputNode.type = type;
    inputNode.id = id;
    return [labelNode, inputNode];
}

const createButton = function(parentNode, id, classList, textContent) {
    let mergedClassList = (classList) ? ['button', ...classList] : ['button'];
    let node = createDiv(parentNode, mergedClassList, textContent);
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
Dom.createLabeledInput = createLabeledInput;
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
            // TODO: change location of parent node
            createDiv(this.taskList, ['task'], task.title);
        }
    },
    update(taskArray) {
        clearNode(this.taskList);
        this.create(taskArray);
    }
};
Dom.updateSidebar = function(projectManager) {
    let projectListNode = document.querySelector('.list');
    clearNode(projectListNode);

    for (let project of projectManager.projectList) {
        let groupNode = createDiv(projectListNode, ['project-group']);
        createDiv(groupNode, ['project'], project.name);
        for (let task of project.taskList) {
            createDiv(groupNode, ['task'], task.title);
        }
    }
}

export default Dom;