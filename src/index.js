import flatten from 'lodash/flatten';
import { Tag } from './Tag';

export function ssml(tag, props = {}, ...children) {

    const el = new Tag(tag, props);
    flatten(children).map(child => el.addChild(child));
    return el;
}
