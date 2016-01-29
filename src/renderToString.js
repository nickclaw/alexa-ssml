import map from 'lodash/map';
import kebabCase from 'lodash/kebabCase';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';

/**
 * Object to props string
 * @param {Object.<String,String>} props
 * @return {String}
 */
export function propsToString(props) {
    return map(props, (val, key) => {
        return `${kebabCase(key)}="${val}"`;
    }).join(" ");
}

/**
 * Nested json to string with indentation
 * @param {Object} props
 * @param {Integer} indent
 * @return {String}
 */
export function elementToString(el, indent = 0) {
    const { tag, props, children } = el;
    const ws = new Array(indent + 1).join("    ");
    const propString = isEmpty(props) ? "" : " " + propsToString(props);

    let raw = ws;
    raw += `<${tag}${propString}>`;

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
 * @param {Object} data
 * @return {String}
 */
export function renderToString(data) {
    const rootTag = get(data, 'tag');
    if (rootTag !== 'speak')
        throw new Error(`SSML must start with a "speak" tag, currently "${rootTag}"`);

    return elementToString(data, 0);
}
