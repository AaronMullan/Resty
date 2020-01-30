import React, { Component } from 'react';
import { apiCall } from '../services/apiCall';

export default class Resty extends Component {
  state = {
    url: '',
    json: ''
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

}

