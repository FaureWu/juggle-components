import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './button.scss';

class Button extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    mode: PropTypes.oneOf(['primary', 'dashed', 'danger']),
    size: PropTypes.oneOf(['large', 'small']),
    children: PropTypes.any,
  };

  static defaultProps = {
    className: undefined,
    mode: undefined,
    size: undefined,
    children: undefined,
  };

  isPrimary = () => this.props.mode === 'primary';
  isDashed = () => this.props.mode === 'dashed';
  isDanger = () => this.props.mode === 'danger';
  isLarge = () => this.props.size === 'large';
  isSmall = () => this.props.size === 'small';

  render() {
    const {
      className,
      children,
      ...rest
    } = this.props;

    return (
      <button
        {...rest}
        className={classNames(styles.button, className, {
          [styles.primary]: this.isPrimary(),
          [styles.dashed]: this.isDashed(),
          [styles.danger]: this.isDanger(),
          [styles.large]: this.isLarge(),
          [styles.small]: this.isSmall(),
        })}
      >
        {children}
      </button>
    );
  }
}

export default Button;
