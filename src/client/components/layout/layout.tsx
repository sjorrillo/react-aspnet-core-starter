import React, { Component, Children } from 'react';
import { BasicProps } from '../../helpers/basic-props';

const createElement = nameOfElement => {
  const layout = class Adapter extends Component<BasicProps, any> {
    static displayName: string;
    static Header: any;
    static Footer: any;
    static Content: any;
    render() {
      const { children, className, ...restProperties } = this.props;
      const childrenArray = Children.toArray(children);
      return <div className={ className } { ...restProperties }>{ children }</div>
    }
  }
  layout.displayName = nameOfElement;
  return layout;
};

const Layout = createElement('layout');
Layout.Header = createElement('header');
Layout.Footer = createElement('footer');
Layout.Content = createElement('content');

export default Layout;
