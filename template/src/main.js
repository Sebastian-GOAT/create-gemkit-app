import App from './App.js';

export const mountQueue = [];

export function reRender() {
    
    const appWrapper = document.getElementById('root');
    
    appWrapper.innerHTML = '';
    appWrapper.appendChild(App());
    
    while (mountQueue.length) {
        const callback = mountQueue.shift();
        callback();
    }
}

reRender();
window.addEventListener('hashchange', reRender);