import PropTypes from '../prop-types';

export default {
  tag: 'audio',
  propTypes: {
    src: PropTypes.match(/^https:\/\//),
    children: PropTypes.none
  }
}
