import schema from './schema';
import PropTypes from './prop-types';

export default function ssml(tagName, props, ...children) {
  const { tag, propTypes, defaultProps } = schema[tagName] || {};

  if (!tag) {
    throw new Error(`Unsupported tag "${tagName}"`);
  }

  const hasChildren = children && children.length;
  const hasProps = props || hasChildren;

  const merged = {
    ...(hasProps && { props: { ...props, ...(hasChildren && { children }) } })
  };

  PropTypes.validateWithErrors(propTypes, merged.props, tag);

  return { tag, ...merged };
}
