const taskList =  document.querySelector('.list');

const Dom = {}

Dom.tasks = {
    clear() {
        while(taskList.hasChildNodes()) {
            taskList.removeChild(taskList.firstChild);
        }
    },
    create(taskArray) {
        for (let task of taskArray) {
            let node = document.createElement('div');
            node.classList.add('task');
            node.textContent = task.title;
            taskList.appendChild(node);
        }
    },
    update(taskArray) {
        this.clear();
        this.create(taskArray);
    }
};

export default Dom;