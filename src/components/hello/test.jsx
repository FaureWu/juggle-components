import React from 'react';
import { shallow } from 'enzyme'; // eslint-disable-line
import Hello from './index';
import defaultLocale, { getLanguage } from '../../languages';

const defaultLanguage = getLanguage(defaultLocale).hello;

describe('Hello Component Test', () => {
  it('should render hello world', () => {
    const hello = shallow(<Hello />);

    expect({
      text: hello.find('.hello').text(),
    }).toEqual({
      text: defaultLanguage.text,
    });
  });
});
