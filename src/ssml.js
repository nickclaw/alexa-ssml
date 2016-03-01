import get from 'lodash/get';
import identity from 'lodash/identity';
import flattenDeep from 'lodash/flattenDeep';
import * as schemas from './schema';
import validateProps from './validateProps';

export default function ssml(tagName, props, ...args) {
    const children = flattenDeep(args.length ? args : get(props, 'children', []));

    // handle custom elements (only functions for now)
    if (typeof tagName === 'function') {
        return tagName({ ...props, children });
    }

    // make sure we have a valid tag
    if (typeof tagName !== 'string') {
        throw new Error(`Invalid tag: ${tagName}`);
    }

    // make sure we have a known tag
    const { tag, schema, transform = identity } = schemas[tagName.toLowerCase()] || {};
    if (!tag) {
        throw new Error(`Unknown tag: ${tagName}`);
    }

    return {
        tag,
        props: transform(validateProps(props, schema)),
        children,
    };
}
