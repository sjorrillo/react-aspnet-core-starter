import React, { Component } from 'react';
import { BasicProps } from '../../helpers/basic-props';

interface AppProps extends BasicProps {};

export class App extends Component<AppProps, {}> {

  render() {
    return (
      <div>
        <h2>common content</h2>
        { this.props.children }
      </div>
    );
  }
}
