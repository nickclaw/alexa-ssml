import reduce from 'lodash/reduce';
import kebabCase from 'lodash/kebabCase';
import { Tag } from './Tag';

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

export function tagToString(tag, indent) {
    const { schema, props, children } = tag;
    const ws = new Array(indent + 1).join("    ");

    let el = ws;
    el += `<${schema.tag}${propsToString(props)}>`;

    if (tag.children.length) {
        el += '\n';
        tag.children.forEach(child => {
            if (child instanceof Tag) {
                el += tagToString(child, indent + 1);
            } else {
                el += ws + ws + child.toString().trim() + '\n';
            }
        });
        el += ws;
    }

    el += `</${schema.tag}>\n`;
    return el;
}

export function renderToString(tag) {
    return tagToString(tag, 0);
}
