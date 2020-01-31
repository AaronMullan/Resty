import React from 'react';
import PropTypes from 'prop-types';

const ResponseItem = ({ response }) => (
  <pre>{response}</pre>
);
ResponseItem.propTypes = {
  response: PropTypes.string.isRequired
};

export default ResponseItem;
