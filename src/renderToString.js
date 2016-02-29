import builder from 'xmlbuilder';
import each from 'lodash/each';
import get from 'lodash/get';
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
function renderNode(children, node) {
    each(children, child => {
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
    const rootTag = get(data, 'tag');
    if (rootTag !== 'speak') {
        throw new Error(`SSML must start with a 'speak' tag, currently '${rootTag}'`);
    }

    const xml = builder.create(data.tag, {
        stringify: customStringifyOptions,
        headless: true,
    });
    renderNode(data.children, xml);

    return xml.end(options);
}
