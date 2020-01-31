import React, { Component } from 'react';
import { apiCall } from '../services/apiCall';
import APIForm from '../components/form/APIform';
import ResponseItem from '../components/responseItem/ResponseItem';
import HistoryItem from '../components/history/HistoryItem';

export default class Resty extends Component {
  state = {
    url: '',
    jsoninput: '',
    method: '',
    response: ''
  }
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }
  onSubmit = event => {
    event.preventDefault();
    this.fetch();
  };
  
  fetch = () => {
    return apiCall(this.state.url, this.state.method, this.state.jsoninput)
      .then(response => this.setState({ response: JSON.stringify(response, null, 2) }));
  }
  render() {

    return (
      <>
        <APIForm 
          handleChange={this.handleChange}
          onSubmit={this.onSubmit}
          url={this.state.url}
          jsonInput={this.state.jsoninput}
        />
        <ResponseItem 
          response={this.state.response}
        />
        <HistoryItem />
         
      </>
    );
  }
}

