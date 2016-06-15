import PropTypes from '../prop-types';

export default {
    tag: 'break',
    propTypes: {
        strength: PropTypes.oneOf(['none', 'x-weak', 'weak', 'medium', 'strong', 'x-strong']),
        time: PropTypes.match(/^\d+m?s$/),
        children: PropTypes.none
    }
};
