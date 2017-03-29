import React, { PropTypes, PureComponent } from 'react';
import classNames from 'classnames';
import Horizontal from './horizontal';
import Vertical from './vertical';
import { Layout as Wapper } from './layout.styled';

class Layout extends PureComponent {
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

    let direction = 'vertical';
    React.Children.forEach(children, ({ type: { _JUGGLE_COMPONENT_ROLE_ } }) => {
      if (_JUGGLE_COMPONENT_ROLE_ === 'Horizontal') direction = 'horizontal';
    });

    return (
      <Wapper direction={direction} className={classNames(className)}>
        {children}
      </Wapper>
    );
  }
}

export const Header = Vertical;
export const Content = Vertical;
export const Slider = Horizontal;
export const Footer = Vertical;

export default Layout;
