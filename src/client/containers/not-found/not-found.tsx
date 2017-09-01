import React, { Component } from 'react';

export class NotFound extends Component<{}, {}> {
  render() {
    return (
      <div className="container">
        <h1>Doh! 404!</h1>
        <p>These are <em>not</em> the droids you are looking for!</p>
      </div>
    );
  }
}
