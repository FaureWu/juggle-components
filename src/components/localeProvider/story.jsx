import React, { Component } from 'react';
import { storiesOf } from '@kadira/storybook';
import uuid from 'uuid/v4';
import { pkgNames } from '../../languages';
import LocaleProvider from './index';
import Hello from '../hello';

class LocaleProviderStory extends Component {
  state = {
    locale: 'enUS',
  };

  localeChange = ({ target: { value } }) => this.setState({ locale: value });

  render() {
    const { locale } = this.state;

    return (
      <div>
        <LocaleProvider locale={locale}>
          <Hello />
        </LocaleProvider>
        <label>Select the language:</label>
        <select value={locale} onChange={this.localeChange}>
          {pkgNames.map(name => (<option key={uuid()} value={name}>{name}</option>))}
        </select>
      </div>
    );
  }
}

storiesOf('Juggle Components', module)
  .add('LocaleProvider', () => (<LocaleProviderStory />));
