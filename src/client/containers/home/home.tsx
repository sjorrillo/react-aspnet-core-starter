import React, { Component } from 'react';
import { BasicProps } from '../../helpers/basic-props';
import { Page } from '../shared/page';

interface HomeProps extends BasicProps {};

export class Home extends Component<HomeProps, {}> {
  render() {
    return (
      <Page header="Header">
        <p>Home content</p>
      </Page>
    );
  }
}
