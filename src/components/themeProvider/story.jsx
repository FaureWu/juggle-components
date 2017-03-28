import React, { Component } from 'react';
import { storiesOf } from '@kadira/storybook';
import uuid from 'uuid/v4';
import { themeNames } from '../../themes';
import ThemeProvider from './index';
import Hello from '../hello';

class ThemeProviderStory extends Component {
  state = {
    theme: 'default',
  };

  themeChange = ({ target: { value } }) => this.setState({ theme: value });

  render() {
    const { theme } = this.state;

    return (
      <div>
        <ThemeProvider theme={theme}>
          <Hello />
        </ThemeProvider>
        <label>Select the theme:</label>
        <select value={theme} onChange={this.themeChange}>
          {themeNames.map(name => (<option key={uuid()} value={name}>{name}</option>))}
        </select>
      </div>
    );
  }
}

storiesOf('Juggle Components', module)
  .add('ThemeProvider', () => (<ThemeProviderStory />));
