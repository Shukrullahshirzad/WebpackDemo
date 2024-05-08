import _ from 'lodash';
import printMe from './print.js';

function component(){
    const element = document.createElement('div');
    const btn = document.createElement('button');
    const body = document.getElementsByName('body');
    body.style.background = "gray";

    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');

    btn.innerHTML = 'click me and check the console';
    btn.onclick = printMe;
    element.appendChild(btn)

    return element;
}

document.body.appendChild(component());