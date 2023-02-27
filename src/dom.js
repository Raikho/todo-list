const DOM = {};

DOM.clearNode = function(node) {
    while(node.hasChildNodes()) {
        node.removeChild(node.firstChild);
    }
}

DOM.createNode = function(parentNode, tag, classList, textContent) {
    let node = document.createElement(tag);
    if (classList)
        for (let cls of classList)
            node.classList.add(cls);
    node.textContent = textContent;
    parentNode.appendChild(node);
    return node;
}

DOM.createDiv = function(parentNode, classList, textContent) {
   return this.createNode(parentNode, 'div', classList, textContent)
}

DOM.createLabeledInput = function(parentNode, inputType, id, textContent) {
    let inputNode = this.createNode(parentNode, 'input');
    inputNode.type = inputType;
    inputNode.id = id;
    inputNode.setAttribute('placeholder', textContent);
    return inputNode;
}

DOM.createButton = function(parentNode, id, classList, textContent) {
    let mergedClassList = (classList) ? ['button', ...classList] : ['button'];
    let node = this.createDiv(parentNode, mergedClassList, textContent);
    node.id = id;
    return node;
}
DOM.createButtonContainer = function(parentNode, id, textContent) {
    let containerNode = this.createDiv(parentNode, ['button-container'], null);
    containerNode.id = id;
    let iconNode = this.createDiv(containerNode, ['icon'], null);
    let textNode = this.createDiv(containerNode, ['text'], textContent);
    return containerNode;
}
DOM.createRangeContainer = function(parentNode, min, max, default_value, textContent, sliderUnits = '') {
    let textNode = this.createDiv(parentNode, ['text'], textContent);
    let sliderNode = this.createNode(parentNode, 'input');
    sliderNode.setAttribute('type', 'range');
    sliderNode.setAttribute('min', min);
    sliderNode.setAttribute('max', max);
    sliderNode.setAttribute('value', default_value);
    let valueNode = this.createDiv(parentNode, ['input-value'], sliderNode.value + sliderUnits);
    sliderNode.addEventListener('change', () => {valueNode.textContent = sliderNode.value + sliderUnits;});
    return sliderNode;
}

export default DOM;