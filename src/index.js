import './style.css'

import Dom from './dom.js';
import Content from './content.js';
import Task from './task.js';

Content.changeState('empty');

document.getElementById('taskForm').addEventListener('click', () => {
   Content.changeState('newTask');
});

// TODO: reorganize task code location
// TODO: add icons
// TODO: add submit form button
// TODO: form validation
// TODO: style form
// TODO: add ability to click tasks
// TODO: pass node to DOM
