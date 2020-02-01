import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';
import styles from '../App.css';

const History = ({ history }) => {
  const historyElements = history.map((item, i) => (
    <li key={i}>
      <HistoryItem historyItem={item} />
    </li>
  ));
  return (
    <>
      <div className={styles.History}>
        <h2>History</h2>
        <ul>
          {historyElements}
        </ul>
      </div>
    </>
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
