import React, { PropTypes, PureComponent } from 'react';
import classNames from 'classnames';
import { Horizontal as Wapper } from './layout.styled';

class Horizontal extends PureComponent {
  static _JUGGLE_COMPONENT_ROLE_ = 'Horizontal';

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
  };

  static defaultProps = {
    className: undefined,
    children: undefined,
  };

  render() {
    const { className, children } = this.props;

    return (
      <Wapper className={classNames(className)}>{children}</Wapper>
    );
  }
}

export default Horizontal;
