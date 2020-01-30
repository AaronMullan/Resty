import React from 'react';
import PropTypes from 'prop-types';

const APIForm = ({ url, jsonInput, onSubmit, onChange }) => (
  <form onSubmit={onSubmit}>
    <input type="text" name="URL" placeholder="URL" value={url} onChange={onChange}></input>
    <textarea name="jsoninput" value={jsonInput} onChange={onChange}></textarea>
    <input type="radio" name="GET" value="GET"></input>
    <label htmlFor="GET">GET</label>
    <input type="radio" name="POST" value="POST"></input>
    <label htmlFor="POST">POST</label>
    <input type="radio" name="PUT" value="PUT"></input>
    <label htmlFor="PUT">PUT</label>
    <input type="radio" name="POST" value="POST"></input>
    <label htmlFor="PATCH">PATCH</label>
    <input type="radio" name="POST" value="POST"></input>
    <label htmlFor="DELETE">DELETE</label>
    
    <button>Submit</button>
  </form>
);

APIForm.propTypes = {
  url: PropTypes.string.isRequired,
  jsonInput: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired

};

export default APIForm;
