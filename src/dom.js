const taskList =  document.querySelector('.list');

const createDiv = function(classList, textContent) {
    let node = document.createElement('div');
    for (let c of classList)
        node.classList.add(c);
    node.textContent = textContent;
    return node;
}

const Dom = {}
Dom.tasks = {
    clear() {
        while(taskList.hasChildNodes()) {
            taskList.removeChild(taskList.firstChild);
        }
    },
    create(taskArray) {
        for (let task of taskArray) {
            let node = createDiv(['task'], task.title);
            taskList.appendChild(node);
        }
    },
    update(taskArray) {
        this.clear();
        this.create(taskArray);
    }
};

export default Dom;