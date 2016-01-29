import reduce from 'lodash/reduce';
import kebabCase from 'lodash/kebabCase';

/**
 * Object to props string
 * @param {Object.<String,String>} props
 * @return {String}
 */
export function propsToString(props) {
    return reduce(props, (memo, val, key) => {
        return memo + ` ${kebabCase(key)}="${val}"`;
    }, "");
}

/**
 * Nested json to string with indentation
 * @param {Object} props
 * @param {Integer} indent
 * @return {String}
 */
export function elementToString(el, indent) {
    const { tag, props, children } = el;
    const ws = new Array(indent + 1).join("    ");

    let raw = ws;
    raw += `<${tag}${propsToString(props)}>`;

    if (children.length) {
        raw += '\n';
        children.forEach(child => {
            if (child && child.tag) {
                raw += elementToString(child, indent + 1);
            } else {
                raw += ws + ws + child.trim() + '\n';
            }
        });
        raw += ws;
    }

    raw += `</${tag}>\n`;
    return raw;
}

/**
 * Nested JSON to pretty string
 * @param {Object} props
 * @return {String}
 */
export function renderToString(el) {
    return elementToString(el, 0);
}
