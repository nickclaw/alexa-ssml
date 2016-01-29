import tv4 from 'tv4';
import flatten from 'lodash/flatten';
import get from 'lodash/get';
import * as schemas from './schema';

export function ssml(tag, props, ...args) {
    const children = flatten(args);

    if (typeof tag === "function")
        return tag({ ...props, children });

    if (typeof tag !== "string")
        throw new Error();

    const schema = schemas[tag.toLowerCase()];
    if (!schema)
        throw new Error();

    const validationResults = tv4.validateMultiple(props || {}, schema);
    if (!validationResults.valid)
        throw new Error();

    return {
        tag: schema.tag,
        props,
        children
    };
}
