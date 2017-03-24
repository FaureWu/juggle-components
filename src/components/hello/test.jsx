import React from 'react';
import { shallow } from 'enzyme'; // eslint-disable-line
import Hello from './index';

describe('Hello Component Test', () => {
  it('should render hello world', () => {
    const hello = shallow(<Hello />);

    expect({
      text1: hello.find('.hello').text(),
      text2: hello.find('.hello2').text(),
    }).toEqual({
      text1: 'Hello world',
      text2: 'Hello world',
    });
  });
});
