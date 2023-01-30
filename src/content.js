import Dom from './dom.js';

const Content = {};

Content.state = 'empty'; // 'empty' 'newTask' 'taskDisplay'
Content.node = document.getElementById('content');

Content.update = function() {
    console.log('state: ', this.state, this.node);
    Dom.clearNode(this.node);
}

export default Content;