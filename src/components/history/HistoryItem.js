import React from 'react';
import PropTypes from 'prop-types';

const HistoryItem = ({ historyItem }) => (
  <section>
    <h2>{historyItem.method}</h2>
    <p>{historyItem.url}</p>
    <p>{historyItem.jsoninput}</p>
  </section>
);

HistoryItem.propTypes = {
  historyItem: PropTypes.shape({
    method: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    jsoninput: PropTypes.string.isRequired
  }).isRequired
};

export default HistoryItem;
