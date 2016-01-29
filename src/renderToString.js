import builder from 'xmlbuilder';
import XMLStringifier from 'xmlbuilder/lib/XMLStringifier';
import each from 'lodash/each';
import get from 'lodash/get';
import kebabCase from 'lodash/kebabCase';

// custom stringify options for xml builder
// just kebab-cases all attributes and tag names
const stringify = {

    eleName(val = "") {
        val = kebabCase(val || "");
        return this.assertLegalChar(val);
    },

    attName(val) {
        val = kebabCase(val || "");
        return this.assertLegalChar(val);
    }
}

/**
 * Recursively turns jsx children into xml nodes
 * @param {Array} children
 * @param {XMLNode} node
 */
export function renderNode(children, node) {
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
export function renderToString(data) {
    if (get(data, 'tag') !== 'speak')
        throw new Error(`SSML must start with a "speak" tag, currently "${rootTag}"`);

    const xml = builder.create(data.tag, {}, {}, { stringify });
    renderNode(data.children, xml);
    return xml.end({ pretty: true });
}
