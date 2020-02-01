import React, { Component } from 'react';
import { apiCall } from '../services/apiCall';
import APIForm from '../components/form/APIform';
import ResponseItem from '../components/responseItem/ResponseItem';
import History from '../components/history/History';

export default class Resty extends Component {
  state = {
    url: '',
    jsoninput: '',
    method: '',
    response: '',
    history: []
  }
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }
  onSubmit = event => {
    event.preventDefault();

    this.setState(state => ({
      history: [...state.history, {
        method: state.method,
        url: state.url 
      }] 
    }),
    this.fetch());
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
        <History history={this.state.history}/>
          
      </>
    );
  }
}

