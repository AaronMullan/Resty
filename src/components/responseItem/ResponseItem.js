import React from 'react';
import PropTypes from 'prop-types';

const ResponseItem = ({ response }) => (
  <p>{response}</p>
);
ResponseItem.propTypes = {
  response: PropTypes.string.isRequired
};

export default ResponseItem;
