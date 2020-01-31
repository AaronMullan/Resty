import React from 'react';
import PropTypes from 'prop-types';

const APIForm = ({ url, jsonInput, onSubmit, handleChange }) => (
  <form  onSubmit={onSubmit}>
    <input onChange={handleChange} type="text" name="url" placeholder="URL" value={url} /> 
    <textarea onChange={handleChange} name="jsoninput" value={jsonInput} ></textarea>
    <input onChange={handleChange} type="radio" name="method" value="GET" ></input>
    <label htmlFor="GET">GET</label>
    <input onChange={handleChange} type="radio" name="method" value="POST"></input>
    <label htmlFor="POST">POST</label>
    <input onChange={handleChange} type="radio" name="method" value="PUT"></input>
    <label htmlFor="PUT">PUT</label>
    <input onChange={handleChange} type="radio" name="method" value="POST"></input>
    <label htmlFor="PATCH">PATCH</label>
    <input onChange={handleChange} type="radio" name="method" value="DELETE"></input>
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
