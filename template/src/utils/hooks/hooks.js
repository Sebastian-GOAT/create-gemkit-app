import appState from './state.js';
import { reRender, mountQueue } from '../main.js';

export function ReactiveState(stateName, init) {

    let value = appState[stateName] ?? init;
    console.log(value)

    const setValue = (newValue) => {
        if (newValue !== value) {
            value = newValue;
            appState[stateName] = newValue;
            reRender();
        }
    }

    return [value, setValue];
}

export function onMount(callback) {
    mountQueue.push(callback);
}