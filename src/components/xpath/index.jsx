import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {
  blank,
} from '../../libs/utils';
import XPath from '../../libs/xpath';
import Overlay from './overlay';
import styles from './xpath.scss';

class XPathViewer extends PureComponent {
  static propTypes = {
    srcDoc: PropTypes.string,
    overlayClassName: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    onHover: PropTypes.func,
  };

  static defaultProps = {
    srcDoc: undefined,
    overlayClassName: undefined,
    className: undefined,
    onClick: blank,
    onChange: blank,
    onHover: blank,
  };

  state = {
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  };

  componentWillUnmount() {
    this.document.removeEventListener('contextmenu', this.contextmenuHandler);
    this.document.removeEventListener('mousemove', this.mouseMoveHandler);
    this.document.removeEventListener('click', this.clickHandler);
  }

  onIframeLoad = (e) => {
    this.iframe = e.target || e.srcElement;
    this.document = this.iframe.contentWindow.document;

    this.document.addEventListener('contextmenu', this.contextmenuHandler);
    this.document.addEventListener('mousemove', this.mouseMoveHandler);
    this.document.addEventListener('click', this.clickHandler);

    this.xpath = new XPath(this.document);
  };

  getXPather = () => this.xpath;

  getStyle = (element, attr) => {
    if (element.currentStyle) {
      return element.currentStyle[attr];
    }

    return window.document.defaultView
      .getComputedStyle(element, null)[attr];
  };

  getLeft = element => parseInt(this.getStyle(element, 'marginLeft'), 10)
    + parseInt(this.getStyle(element, 'paddingLeft'), 10)
    + parseInt(this.getStyle(element, 'borderWidth'), 10);

  getTop = element => parseInt(this.getStyle(element, 'marginTop'), 10)
    + parseInt(this.getStyle(element, 'paddingTop'), 10)
    + parseInt(this.getStyle(element, 'borderWidth'), 10);

  getElementXPath = element =>
    this.xpath.getElementXPath(element);

  setXPathElement = (node) => {
    this.xpathElement = node;
  };

  position = (element) => {
    let offsetLeft = element.offsetLeft;
    let offsetTop = element.offsetTop;
    let offsetParent = element.offsetParent;

    while (offsetParent) {
      offsetLeft += offsetParent.offsetLeft;
      offsetTop += offsetParent.offsetTop;
      offsetParent = offsetParent.offsetParent;
    }

    return {
      left: offsetLeft,
      top: offsetTop,
    };
  };

  contextmenuHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  mouseMoveHandler = (e) => {
    const currElement = e.target || e.srcElement;

    const parentPos = this.position(this.xpathElement);
    const currElementPos = this.position(currElement);

    const { width, height } = currElement.getBoundingClientRect();

    this.setState({
      left: (currElementPos.left - parentPos.left) + this.getLeft(window.document.body),
      top: (currElementPos.top - parentPos.top) + this.getLeft(window.document.body),
      width,
      height,
    });

    const xpath = this.getElementXPath(currElement);
    this.props.onHover(xpath);
    this.props.onChange(xpath);
  };

  clickHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const currElement = e.target || e.srcElement;

    const xpath = this.getElementXPath(currElement);
    this.props.onClick(xpath);
    this.props.onChange(xpath);
  };

  render() {
    const {
      srcDoc,
      className,
      overlayClassName,
      ...rest
    } = this.props;
    const {
      left, top,
      width, height,
    } = this.state;

    return (
      <div
        ref={this.setXPathElement}
        className={classNames(styles.xpath, className)}
      >
        <Overlay
          visible
          rect={{
            left,
            top,
            width,
            height,
          }}
          className={overlayClassName}
        />
        <iframe
          {...rest}
          src="about:blank"
          srcDoc={srcDoc}
          onLoad={this.onIframeLoad}
        />
      </div>
    );
  }
}

export default XPathViewer;
