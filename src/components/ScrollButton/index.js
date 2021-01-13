import React from 'react';
import PropTypes from 'prop-types';

export const ScrollButton = (props) => {
  return <a href={`#${props.id}`} role="button" className="ScrollButton">トップページへスクロール</a>;
};

ScrollButton.propTypes = {
  id: PropTypes.string.isRequired
};
