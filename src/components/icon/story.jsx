import React, { PureComponent } from 'react';
import { storiesOf } from '@kadira/storybook';

import Svg from './svg';
import path from './path.json';

const iconTypes = Object.keys(path);

class IconStory extends PureComponent {
  state = {
    type: iconTypes[0],
  };

  select = ({ target: { value } }) => this.setState({ type: value });

  render() {
    const { type } = this.state;

    return (
      <div>
        <select
          value={type}
          onChange={this.select}
        >
          {iconTypes.map(iconType => (
            <option key={iconType} value={iconType}>{iconType}</option>
          ))}
        </select>
        <p>You select: {type}</p>
        <div style={{ width: '200px', height: '200px' }}>
          <Svg type={type} />
        </div>
      </div>
    );
  }
}

storiesOf('Juggle Components', module)
  .add('Svg', () => <IconStory />);
