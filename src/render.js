/* eslint max-len: 0 */
const entries = (object) => Object.keys(object).map(key => [key, object[key]]);

export default function render(node, options = {}) {
    if (typeof node === 'string') {
        return node;
    }

    const { children = [], ...rest } = node.props || {};
    const props = entries(rest).reduce((state, [key, value]) => `${state} ${key}="${value}"`, '');

    return children.length ? `<${node.tag}${props}>${children.map(child => render(child, options)).join('')}</${node.tag}>` : `<${node.tag}${props}/>`;
}
