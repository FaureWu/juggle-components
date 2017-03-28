import React, { PropTypes, Component } from 'react';
import stylesLoader from 'react-css-modules';
import { getComponentLocale } from '../../libs/utils/getLocale';
import styles from './hello.scss';

class Hello extends Component {
  static contextTypes = {
    language: PropTypes.object,
    exist: PropTypes.bool,
  };

  componentName = 'hello';

  render() {
    const {
      context: {
        language,
        exist,
      },
      componentName,
    } = this;

    const componentLanguage = getComponentLocale(componentName, language, exist);

    return (
      <span>
        <h1 styleName="hello">{componentLanguage.text}</h1>
      </span>
    );
  }
}

export default stylesLoader(Hello, styles);
