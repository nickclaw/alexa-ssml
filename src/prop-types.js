/* eslint max-len: 0 */
import PropTypes from 'prop-types';

export const match = (regex) => (props, propName, descriptiveName, locationName) => {
    if (props[propName] && !regex.test(props[propName])) {
        return new Error(`Invalid ${locationName} "${propName}" supplied to "${descriptiveName}", expected to match ${regex.toString()}`);
    }
};

export const none = (props, propName, descriptiveName, locationName) => {
    if (props[propName] !== undefined) {
        return new Error(`Invalid ${locationName} "${propName}" supplied to "${descriptiveName}", expected none.`);
    }
};

export default {
    ...PropTypes,
    match,
    none
};
