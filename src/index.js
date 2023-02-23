import './style.css'

console.log('Hello, World!');

import ProjectManager from './project.js';
import ContentManager from './content.js';

const projectManager = new ProjectManager();
const contentManager = new ContentManager(projectManager);


document.getElementById('createProjectForm').addEventListener('click', () => {
    contentManager.changeState('projectForm');
});



// INITIAL VALUES
projectManager.createProject('Main Project');
projectManager.projectList[0].createTask('First Task');
projectManager.projectList[0].createTask('Second Task');
projectManager.projectList[0].createTask('Third Task');
projectManager.createProject('Secondary Project');
projectManager.projectList[1].createTask('First Task');
projectManager.projectList[1].createTask('Second Task');

contentManager.changeState('empty');
contentManager.updateSidebar();

// DEBUG
console.log(projectManager, contentManager)

// TODO: reorganize task code location
// TODO: add icons
// TODO: add submit form button
// TODO: form validation
// TODO: style form
// TODO: add ability to click tasks
// TODO: pass node to DOM
