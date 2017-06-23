import React, { Component, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import Layout from './layout';

export default class App extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  render() {
    const childrenArray = Children.toArray(this.props.children);
    const layout = childrenArray.find(child => child.type === Layout);
    console.log(childrenArray);
    return (
      <div>
        <h2>common content</h2>
        { this.props.children }
      </div>
    );
  }
}
