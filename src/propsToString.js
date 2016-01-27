import reduce from 'lodash/reduce';

export function propsToString(props) {

    return reduce(props, (memo, val, key) => {
        return memo + ` ${key}="${val}"`;
    }, "");
}
