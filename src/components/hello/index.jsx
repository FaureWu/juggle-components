import React, { PureComponent } from 'react';
import stylesLoader from 'react-css-modules';
import styles from './hello.scss';

class Hello extends PureComponent {
  render() {
    return (<span><h1 className="hello2" styleName="hello">Hello world</h1></span>);
  }
}

export default stylesLoader(Hello, styles);
