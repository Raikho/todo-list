import './style.css'

import Content from './content.js';
import {CreateProjectManager, CreateProject} from './project.js';
import Task from './task.js';
import Dom from './dom';


// document.getElementById('createTaskForm').addEventListener('click', () => {
//    Content.changeState('taskForm');
// });
document.getElementById('createProjectForm').addEventListener('click', () => {
   Content.changeState('projectForm');
});

const projectManager = CreateProjectManager();
// CreateProject(projectManager, 'First Project');
// CreateProject(projectManager, 'Second Project');

// INIT
Content.changeState('empty');
// Content.changeState('taskForm');
Content.changeState('projectForm', projectManager);



// DEBUG
// let firstProject = projectManager.projectList[0];
// firstProject.addStartingTask();
// console.log('first project: ', firstProject);

console.log('project manager: ', projectManager); // DEBUG
Dom.updateSidebar(projectManager);



// TODO: reorganize task code location
// TODO: add icons
// TODO: add submit form button
// TODO: form validation
// TODO: style form
// TODO: add ability to click tasks
// TODO: pass node to DOM
