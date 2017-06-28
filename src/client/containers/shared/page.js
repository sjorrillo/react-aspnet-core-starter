import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout } from '../../components';

const { Header, Footer, Content } = Layout;

export default class Page extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired,
    header: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
    ]),
    footer: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
    ]),
  };

  renderHeader = () => {
    const { header } = this.props;
    if (!header) return <noscript />;

    return typeof header === 'string' ? <Header>{ header }</Header> : header;
  }

  renderFooter = () => {
    const { footer } = this.props;
    if (!footer) return <noscript />;

    return typeof footer === 'string' ? <Footer>{ footer }</Footer> : footer;
  }

  render() {
    return (
      <Layout>
        { this.renderHeader() }
        <Content>
          { this.props.children }
        </Content>
        { this.renderFooter() }
      </Layout>
    );
  }
}