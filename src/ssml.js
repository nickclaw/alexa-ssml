import tv4 from 'tv4';
import flatten from 'lodash/flatten';
import { Tag } from './Tag';
import { schema } from './schema';

export function ssml(tag, props, ...children) {
    tag = tag.toLowerCase();
    props = props || {};

    // get schema
    const tagSchema = schema[tag];
    if (!tagSchema) {
        throw new Error("Unknown tag.");
    }

    const result = tv4.validateMultiple(props, tagSchema);
    if (!result.valid) {
        console.log(result);
        throw new Error("Invalid properties.");
    }

    // build tag and append children
    const el = new Tag({tag}, props);
    flatten(children).map(child => el.addChild(child));

    return el;
}
