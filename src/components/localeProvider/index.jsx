import React, { PropTypes, PureComponent } from 'react';
import defaultLocale, { getLanguage, pkgNames } from '../../languages';

class LocaleProvider extends PureComponent {
  static propTypes = {
    locale: PropTypes.oneOf(pkgNames),
    children: PropTypes.element,
  };

  static defaultProps = {
    locale: defaultLocale,
    children: undefined,
  };

  static childContextTypes = {
    language: PropTypes.object,
    exist: PropTypes.bool,
  };

  getChildContext() {
    const { locale } = this.props;

    return {
      language: getLanguage(locale),
      exist: true,
    };
  }

  render() {
    const { children } = this.props;

    return React.Children.only(children);
  }
}

export default LocaleProvider;
