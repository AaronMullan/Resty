import React from 'react';
import PropTypes from 'prop-types';
import styles from '../App.css';

const ResponseItem = ({ response }) => (
  <>
    <div className={styles.ResponseItem}>
      <h2>Response</h2>
      <pre>{response}</pre>
    </div>
  </>
);
ResponseItem.propTypes = {
  response: PropTypes.string.isRequired
};

export default ResponseItem;
