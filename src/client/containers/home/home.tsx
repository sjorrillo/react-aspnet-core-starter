import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Page } from '../shared/page';
import { login } from '../../redux/modules/auth';

interface StateProps {
  test: string,
}

interface DispatchProps {
  login(user: string, password: string),
}

type HomeProps = StateProps & DispatchProps;

@(connect<StateProps, DispatchProps, any>(
  state => ({
    test: '1',
  }),
  dispatch => bindActionCreators({
    login,
  }, dispatch)
) as any)
export class Home extends Component<HomeProps, any> {

  handleOnClick = () => this.props.login('javier', 'my password');

  render() {
    return (
      <Page header="Header">
        <p>Home content</p>
        <input type="button" value="Test Request" onClick={ this.handleOnClick } />
      </Page>
    );
  }
}
