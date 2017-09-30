import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './radio.scss';

class Radio extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.string,
  };

  static defaultProps = {
    className: '',
    name: 'radio',
    value: '',
    checked: false,
    disabled: false,
    children: '',
  };

  render() {
    const {
      className,
      name,
      children,
      value,
      checked,
      disabled,
      ...rest
    } = this.props;

    const wrapperClassName = classNames(
      styles.radio,
      className,
      {
        [styles.disabled]: disabled,
        [styles.checked]: checked,
      },
    );

    return (
      <label className={wrapperClassName}>
        <input
          {...rest}
          className={styles.input}
          type="radio"
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
        />
        <span className={styles.label}>{children}</span>
      </label>
    );
  }
}

export default Radio;
