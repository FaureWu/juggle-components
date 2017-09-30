import React, { PureComponent } from 'react';
import { storiesOf } from '@kadira/storybook';
import Radio from './index';

class RadioStory extends PureComponent {
  state = {
    value: 'b',
  };

  change = e => this.setState({
    value: e.target.value,
  });

  render() {
    return (
      <Radio.Group value={this.state.value} onChange={this.change}>
        <Radio value="a">A</Radio>
        <Radio value="b" disabled>B</Radio>
        <Radio value="c">C</Radio>
      </Radio.Group>
    );
  }
}

storiesOf('Juggle Components', module)
  .add('Radio', () => <RadioStory />);
