import React, { PureComponent } from 'react';
import { storiesOf } from '@kadira/storybook';

import Button from './index';
import {
  Svg,
} from '../icon';
import styles from './story.scss';

class ButtonStory extends PureComponent {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <Button className={styles.button} size="large">
            <Svg type="eye" />Default
          </Button>
          <Button className={styles.button} size="large" mode="primary">Primary</Button>
          <Button className={styles.button} size="large" mode="dashed">Dashed</Button>
          <Button className={styles.button} size="large" mode="danger">Danger</Button>
        </div>
        <div className={styles.container}>
          <Button className={styles.button}>Default</Button>
          <Button className={styles.button} mode="primary">Primary</Button>
          <Button className={styles.button} mode="dashed">Dashed</Button>
          <Button className={styles.button} mode="danger">Danger</Button>
        </div>
        <div className={styles.container}>
          <Button className={styles.button} size="small">Default</Button>
          <Button className={styles.button} size="small" mode="primary">Primary</Button>
          <Button className={styles.button} size="small" mode="dashed">Dashed</Button>
          <Button className={styles.button} size="small" mode="danger">Danger</Button>
        </div>
      </div>
    );
  }
}

storiesOf('Juggle Components', module)
  .add('Button', () => <ButtonStory />);
