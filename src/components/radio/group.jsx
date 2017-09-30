import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';

import {
  blank,
} from '../../libs/utils';

class Group extends PureComponent {
  static propTypes = {
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(
        PropTypes.element,
      ),
    ]),
    onChange: PropTypes.func,
  };

  static defaultProps = {
    defaultValue: undefined,
    value: undefined,
    children: undefined,
    onChange: blank,
  };

  state = {
    value: this.props.defaultValue || this.props.value,
  };

  componentWillReceiveProps(next) {
    if (next.value !== this.props.value) {
      this.setState({
        value: next.value,
      });
    }
  }

  change = (e) => {
    const {
      value,
    } = this.props;

    if (!value) {
      this.setState({
        value: e.target.value,
      });
    } else {
      this.props.onChange(e);
    }
  };

  render() {
    const {
      children,
    } = this.props;
    const {
      value,
    } = this.state;

    const cloneChildren = React.Children.map(children, element =>
      React.cloneElement(element, {
        onChange: this.change,
        checked: element.props.value === value,
      }),
    );

    return (
      <div>{cloneChildren}</div>
    );
  }
}

export default Group;
