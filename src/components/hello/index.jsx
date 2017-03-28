import React, { PropTypes, Component } from 'react';
import { getComponentLocale } from '../../libs/utils/getLocale';
import H1 from './hello.styled';

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

    return (<H1>{componentLanguage.text}</H1>);
  }
}

export default Hello;
