import PropTypes from '../prop-types';

export default {
    tag: 'w',
    propTypes: {
        role: PropTypes.oneOf(['ivona:VB', 'ivona:VBD', 'ivona:NN', 'ivona:SENSE_1']).isRequired,
        children: PropTypes.array.isRequired
    }
};
