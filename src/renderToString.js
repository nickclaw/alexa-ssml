import builder from 'xmlbuilder';
import kebabCase from 'lodash/kebabCase';

// custom stringify options for xml builder
// just kebab-cases all attributes and tag names
const customStringifyOptions = {
    eleName(val = '') {
        return this.assertLegalChar(kebabCase(val));
    },

    attName(val = '') {
        return kebabCase(val);
    },
};

/**
 * Recursively turns jsx children into xml nodes
 * @param {Array} children
 * @param {XMLNode} node
 */
function renderNode(node, children = []) {
    Array.from(children).forEach(child => {
        if (child && child.tag) {
            node.ele(child.tag, child.props);
            renderNode(child.children, node);
            node.end();
        } else {
            node.text(child);
        }
    });
}

/**
 * Nested JSON to pretty string
 * @param {Object} data
 * @return {String}
 */
export default function renderToString(data, options = {}) {
    const { tag } = data;

    if (tag !== 'speak') {
        throw new Error(`SSML must start with a 'speak' tag, currently '${tag}'`);
    }

    const xml = builder.create(tag, {
        stringify: customStringifyOptions,
        headless: true,
    });

    renderNode(xml, data.children);

    return xml.end(options);
}
