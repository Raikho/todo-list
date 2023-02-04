import './style.css'

import Content from './content.js';
import {CreateProjectManager, CreateProject} from './project.js';
import Task from './task.js';

Content.changeState('empty');
Content.changeState('taskForm');

document.getElementById('createTaskForm').addEventListener('click', () => {
   Content.changeState('taskForm');
});

const projectManager = CreateProjectManager();
CreateProject(projectManager, 'First Project');

console.log('project manager: ', projectManager); // DEBUG


// TODO: reorganize task code location
// TODO: add icons
// TODO: add submit form button
// TODO: form validation
// TODO: style form
// TODO: add ability to click tasks
// TODO: pass node to DOM
