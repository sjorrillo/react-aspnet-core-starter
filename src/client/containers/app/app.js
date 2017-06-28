import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class App extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div>
        <h2>common content</h2>
        { this.props.children }
      </div>
    );
  }
}
