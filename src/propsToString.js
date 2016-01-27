import reduce from 'lodash/reduce';
import kebabCase from 'lodash/kebabCase';

export function propsToString(props) {

    return reduce(props, (memo, val, key) => {
        return memo + ` ${kebabCase(key)}="${val}"`;
    }, "");
}
