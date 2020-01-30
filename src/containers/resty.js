import React, { Component } from 'react';
import { apiCall } from '../services/apiCall';
import APIForm from '../components/form/APIform';

export default class Resty extends Component {
  state = {
    url: '',
    jsoninput: '',
    method: ''
  }
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }
  handleSubmit = event => {
    event.preventDefault();
    this.fetch();
    
  };

  fetch = () => {
    return apiCall()
      .then(json => this.setState({ json }));
  }
  render() {

    return (
      <>
        <APIForm 
          handleChange={this.handleChange}
        />
         
      </>
    );
  }
}

