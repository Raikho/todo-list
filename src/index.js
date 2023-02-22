import './style.css'

console.log('Hello, World!');

import ProjectManager from './project.js';
import ContentManager from './content.js';

const projectManager = new ProjectManager();
const contentManager = new ContentManager(projectManager);

contentManager.changeState('empty');

document.getElementById('createProjectForm').addEventListener('click', () => {
    contentManager.changeState('projectForm');
});

console.log(projectManager, contentManager)




// TODO: reorganize task code location
// TODO: add icons
// TODO: add submit form button
// TODO: form validation
// TODO: style form
// TODO: add ability to click tasks
// TODO: pass node to DOM
