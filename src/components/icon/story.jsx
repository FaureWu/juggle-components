import React, { PureComponent } from 'react';
import { storiesOf } from '@kadira/storybook';
import Icon from './index';
import icons from './icons.json';

const iconTypes = Object.keys(icons);

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
          <Icon type={type} />
        </div>
      </div>
    );
  }
}

storiesOf('Juggle Components', module)
  .add('Icon', () => <IconStory />);
