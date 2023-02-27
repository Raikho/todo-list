import './style.css'

console.log('Hello, World!');

import ProjectManager from './project.js';
import ContentManager from './content.js';

const projectManager = new ProjectManager();
const contentManager = new ContentManager(projectManager);
projectManager.createProject('High Priority', 'prio');
projectManager.createProject('Due Soon', 'dueSoon');

document.getElementById('new-project-form').addEventListener('click', () => {
    contentManager.changeState('projectForm');
});


// INITIAL VALUES
let projIndex = null;
projectManager.createProject('Daily Errands');
projIndex = projectManager.projectList.length - 1;
projectManager.projectList[projIndex].createTask('Buy Groceries', 'Pick up groceries from the store.', '02/20/23', 6);
projectManager.projectList[projIndex].createTask('Wash Dishes', 'Wash today\'s dishes.', '02/30/23', 4);
projectManager.projectList[projIndex].createTask('Walk Dog', 'Walk the dog for 15 minutes.', '03/03/23', 7);
projectManager.createProject('Monthly Tasks');
projIndex = projectManager.projectList.length - 1;
projectManager.projectList[projIndex].createTask('Pay Bills', 'Pay credit card and electric bills.', '02/28/23', 10);
projectManager.projectList[projIndex].createTask('Change Bulbs', 'Change light bulbs that are fused.','03/15/23', 5);
for (let i=0; i<40; i++) {
}

contentManager.changeState('empty');
contentManager.updateSidebar();

// START AT FIRST PROJECT DISPLAY
let project = projectManager.projectList[0];
project.select();
let task = projectManager.projectList[0].taskList[0];
// task.select();
contentManager.updateSidebar();
// contentManager.changeState('taskForm', projectManager.projectList[0]);
// contentManager.changeState('taskDisplay', task);
contentManager.changeState('projectDisplay', project);


// DEBUG
console.log(projectManager, contentManager);

// TODO: add options to chagne high priority  filter prio, due date filter
// TODO: add options to change


// TODO: search bar
// TODO: search results content page w/ links
// TODO: form validation
