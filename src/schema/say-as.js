import PropTypes from '../prop-types';

const interpretations = [
    'characters',
    'spell-out',
    'cardinal',
    'number',
    'ordinal',
    'digits',
    'fraction',
    'unit',
    'date',
    'time',
    'telephone',
    'address'
];

export default {
    tag: 'say-as',
    propTypes: {
        'interpret-as': PropTypes.oneOf(interpretations).isRequired,
        format: PropTypes.oneOf(['mdy', 'dmy', 'ymd', 'md', 'dm', 'ym', 'my', 'd', 'm', 'y']),
        children: PropTypes.array.isRequired
    }
};
