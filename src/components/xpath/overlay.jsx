import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  isString,
} from '../../libs/utils';

import commonStyles from '../../styles/common.scss';
import styles from './overlay.scss';

class Overlay extends PureComponent {
  static propTypes = {
    visible: PropTypes.bool,
    rect: PropTypes.shape({
      left: PropTypes.number,
      top: PropTypes.number,
      width: PropTypes.number,
      height: PropTypes.number,
    }),
    className: PropTypes.string,
  };

  static defaultProps = {
    visible: false,
    rect: {
      left: 0,
      top: 0,
      width: 0,
      height: 0,
    },
    className: undefined,
  };

  getRect = () => {
    const {
      left, top,
      width, height,
    } = this.props.rect;

    return ({
      left: `${left}px`,
      top: `${top}px`,
      width: `${width}px`,
      height: `${height}px`,
    });
  };

  render() {
    const {
      visible,
      className,
    } = this.props;

    return (
      <div
        className={classNames(styles.overlay, className, {
          [commonStyles.hide]: !visible,
        })}
        style={{
          ...this.getRect(),
        }}
      />
    );
  }
}

export default Overlay;
