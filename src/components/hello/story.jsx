import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Hello from './index';

storiesOf('Juggle Components', module)
  .add('Hello', () => (<Hello />));
