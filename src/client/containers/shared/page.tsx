import React, { Component } from 'react';
import { Layout } from '../../components';
import { BasicProps } from '../../helpers/basic-props';

const { Header, Footer, Content } = Layout;

interface PageProps extends BasicProps {
  header?: object | string;
  footer?: object | string;
}

export class Page extends Component<PageProps, {}> {

  renderHeader = () => {
    const { header } = this.props;
    if (!header) return null;

    return typeof header === 'string' ? <Header>{ header }</Header> : header;
  }

  renderFooter = () => {
    const { footer } = this.props;
    if (!footer) return null;

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
