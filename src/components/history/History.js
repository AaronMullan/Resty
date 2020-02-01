import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';

const History = ({ history }) => {
  const historyElements = history.map((item, i) => (
    <li key={i}>
      <HistoryItem historyItem={item} />
    </li>
  ));
  return (
    <ul>
      {historyElements}
    </ul>
  );
};

History.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    method: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    jsoninput: PropTypes.string.isRequired
  })).isRequired
};

export default History;
