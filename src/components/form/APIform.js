import React from 'react';
import PropTypes from 'prop-types';

const APIForm = ({ url, jsonInput, onSubmit, handleChange }) => (
  <form onChange={handleChange} onSubmit={onSubmit}>
    <input type="text" name="url" placeholder="URL" value={url} /> 
    <textarea name="jsoninput" value={jsonInput} ></textarea>
    <input type="radio" name="method" value="GET" ></input>
    <label htmlFor="GET">GET</label>
    <input type="radio" name="method" value="POST"></input>
    <label htmlFor="POST">POST</label>
    <input type="radio" name="method" value="PUT"></input>
    <label htmlFor="PUT">PUT</label>
    <input type="radio" name="method" value="POST"></input>
    <label htmlFor="PATCH">PATCH</label>
    <input type="radio" name="method" value="DELETE"></input>
    <label htmlFor="DELETE">DELETE</label>
    
    <button>Submit</button>
  </form>
);

APIForm.propTypes = {
  url: PropTypes.string.isRequired,
  jsonInput: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired

};

export default APIForm;
