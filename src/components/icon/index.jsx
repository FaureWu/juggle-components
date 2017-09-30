import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import icons from './icons.json';
import styles from './icon.scss';

class Icon extends PureComponent {
  static propTypes = {
    type: PropTypes.oneOf(Object.keys(icons)).isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: undefined,
  };

  render() {
    const { type, className, ...rest } = this.props;

    const ds = icons[type] instanceof Array ?
                    icons[type] : [icons[type]];
    return (
      <svg
        {...rest}
        className={classNames(styles.icon, className)}
        viewBox="0 0 1024 1024"
      >
        {ds.map(d => (
          <path key={d} d={d} />
        ))}
      </svg>
    );
  }
}

export default Icon;
