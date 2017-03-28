import React, { PropTypes, PureComponent } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import defaultTheme, { themeNames, getTheme } from '../../themes';

class ThemeProvider extends PureComponent {
  static propTypes = {
    theme: PropTypes.oneOf(themeNames),
    children: PropTypes.element,
  };

  static defaultProps = {
    theme: defaultTheme,
    children: undefined,
  };

  render() {
    const { theme, children } = this.props;

    return (
      <StyledThemeProvider theme={getTheme(theme)}>
        {children}
      </StyledThemeProvider>
    );
  }
}

export default ThemeProvider;
