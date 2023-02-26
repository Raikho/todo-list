import './style.css'

console.log('Hello, World!');

import ProjectManager from './project.js';
import ContentManager from './content.js';

const projectManager = new ProjectManager();
const contentManager = new ContentManager(projectManager);


document.getElementById('new-project-form').addEventListener('click', () => {
    contentManager.changeState('projectForm');
});



// INITIAL VALUES
projectManager.createProject('Daily Errands');
projectManager.projectList[0].createTask('Buy Groceries', 'Pick up groceries from the store.', null, 6);
projectManager.projectList[0].createTask('Wash Dishes', 'Wash today\'s dishes.', null, 4);
projectManager.projectList[0].createTask('Walk Dog', 'Walk the dog for 15 minutes.', null, 7);
projectManager.createProject('Monthly Tasks');
projectManager.projectList[1].createTask('Pay Bills', 'Pay credit card and electric bills.', null, 10);
projectManager.projectList[1].createTask('Change Bulbs', 'Change light bulbs that are fused.',null, 5);

contentManager.changeState('empty');
contentManager.updateSidebar();

// START AT FIRST PROJECT DISPLAY
// let project = projectManager.projectList[0];
// project.select();
// let task = projectManager.projectList[0].taskList[0];
// task.select();
contentManager.updateSidebar();
contentManager.changeState('taskForm', projectManager.projectList[0]);
// contentManager.changeState('taskDisplay', task);
// contentManager.changeState('projectDisplay', project);


// DEBUG
console.log(projectManager, contentManager)

// TODO: reorganize task code location
// TODO: add icons
// TODO: add submit form button
// TODO: form validation
// TODO: style form
// TODO: add ability to click tasks
// TODO: pass node to DOM
