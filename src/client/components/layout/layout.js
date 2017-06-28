import React, { Component, Children } from 'react';

const createElement = nameOfElement => {
  const layout = ({ className, children, ...restProperties }) => {
    const childrenArray = Children.toArray(children);
    return (
      <div className={ className } { ...restProperties }>{ children }</div>
    );
  };
  layout.displayName = nameOfElement;
  return layout;
};

const Layout = createElement('layout');
Layout.Header = createElement('header');
Layout.Footer = createElement('footer');
Layout.Content = createElement('content');

export default Layout;
