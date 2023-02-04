

function CreateProjectManager() {
    const proto  = {
        projectList: [],
    };
    return Object.create(proto);
}

function CreateProject(projectManager, name) {
    const proto = {
        name: name,
        taskList: [],
    };
    projectManager.projectList.push(Object.create(proto));
}

export {CreateProjectManager, CreateProject};