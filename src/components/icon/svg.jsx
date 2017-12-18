import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import path from './path.json';
import styles from './svg.scss';

class Svg extends PureComponent {
  static propTypes = {
    type: PropTypes.oneOf(Object.keys(path)).isRequired,
    color: PropTypes.string,
    className: PropTypes.string,
  };

  static defaultProps = {
    color: undefined,
    className: undefined,
  };

  getDs = () => {
    const {
      type,
    } = this.props;

    const d = path[type];

    return (d instanceof Array) ? d : [d];
  };

  render() {
    const {
      className,
      color,
      ...rest
    } = this.props;

    return (
      <svg
        {...rest}
        className={classNames(styles.svg, className)}
        viewBox="0 0 1024 1024"
      >
        {this.getDs().map(d => (
          <path style={{ fill: color }} key={d} d={d} />
        ))}
      </svg>
    );
  }
}

export default Svg;
