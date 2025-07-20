function createGemkitElement(elName, props) {

    const el = document.createElement(elName);

    if (props.onClick)
        el.onclick = props.onClick;

    if (props.className) {
        const splitted = props.className.split(' ');
        splitted.forEach(className => el.classList.add(className));
    }

    if (props.htmlType)
        el.setAttribute('type', props.htmlType);

    if (props.setReference)
        props.setReference(el);

    Object.entries(props).forEach(([key, value]) => {
        const illegalProps = ['onClick', 'className', 'htmlType', 'setReference'];
        if (!illegalProps.includes(key))
            el.setAttribute(key, value);
    });

    props.children?.forEach(child => {
        const isText = typeof child === 'string' || typeof child === 'number' || typeof child === 'boolean';
        el.appendChild(isText ? document.createTextNode(child) : child);
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

export const Img = props => createGemkitElement('img', props);

export const A = props => createGemkitElement('a', props);
export const Link = props => {
    const { to, ...rest } = props;
    return createGemkitElement('a', { ...rest, href: `${window.location.origin}/#${to}` });
};

export const Ul = props => createGemkitElement('ul', props);
export const Ol = props => createGemkitElement('ol', props);

export const Li = props => createGemkitElement('li', props);

export const List = props => {
    const { list, fn, ...rest } = props;

    const ul = createGemkitElement('ul', { ...rest });

    list.forEach(item => {
        const modified = fn(item);
        ul.appendChild(createGemkitElement('li', {
            children: [modified]
        }));
    });

    return ul;
};