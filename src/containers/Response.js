import React, { Component } from 'react';
import ResponseItem from '../components/responseItem/ResponseItem';

export default class Response extends Component {
  state = {
    response: ''
  }
  render() {
    return (
      <ResponseItem />
    );
  }
}
