function createGemkitElement(elName, props) {

    const el = document.createElement(elName);

    if (props.onClick)
        el.onclick = props.onClick;

    if (props.className) {
        const splitted = props.className.split(' ');
        splitted.forEach(className => el.classList.add(className));
    }

    props.children?.forEach(child => {
        if (typeof child === 'string' || typeof child === 'number')
            el.textContent += child;
        else
            el.appendChild(child);
    });

    return el;
}

export const Div = props => createGemkitElement('div', props);

export const Button = props => createGemkitElement('button', props);

export const Input = props => createGemkitElement('input', props);

export const H1 = props => createGemkitElement('h1', props);
export const H2 = props => createGemkitElement('h2', props);
export const H3 = props => createGemkitElement('h3', props);
export const H4 = props => createGemkitElement('h4', props);
export const H5 = props => createGemkitElement('h5', props);
export const H6 = props => createGemkitElement('h6', props);

export const P = props => createGemkitElement('p', props);

export const Span = props => createGemkitElement('span', props);