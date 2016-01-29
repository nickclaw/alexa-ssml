import tv4 from 'tv4';
import flatten from 'lodash/flatten';
import get from 'lodash/get';
import * as schemas from './schema';

export function ssml(tag, props, ...args) {
    const children = flatten(args);

    if (typeof tag === "function")
        return tag({ ...props, children });

    if (typeof tag !== "string")
        throw new Error(`Invalid tag: ${tag}`);

    const schema = schemas[tag.toLowerCase()];
    if (!schema)
        throw new Error(`Unknown tag: ${tag}`);

    const { error, dataPath } = tv4.validateResult(props || {}, schema, false, true);
    if (error)
        throw new Error(`Invalid value for property ${dataPath.slice(1)}: ${error.message}`);

    return {
        tag: schema.tag,
        props,
        children
    };
}
