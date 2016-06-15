import PropTypes from '../prop-types';

export default {
  tag: 'phoneme',
  propTypes: {
    alphabet: PropTypes.oneOf(['ipa', 'x-sampa']).isRequired,
    ph: PropTypes.string.isRequired,
    children: PropTypes.array.isRequired
  }
}
