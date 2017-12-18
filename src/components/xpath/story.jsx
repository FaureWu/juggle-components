import React, { PureComponent } from 'react';
import { storiesOf } from '@kadira/storybook';
import XPath from './index';
import doc from './doc.json';

import styles from './story.scss';

class XPathStory extends PureComponent {
  showXPath = (xpath) => {
    const xpather = this.element.getXPather();
    console.log(xpath, xpather.getElementByXPath(xpath));
  };
  change = xpath => this.showXPath(xpath);
  hover = xpath => this.showXPath(xpath);
  click = xpath => this.showXPath(xpath);

  render() {
    return (
      <div className={styles.story}>
        <XPath
          ref={(node) => { this.element = node; }}
          srcDoc={doc.html}
          onChange={this.change}
          onHover={this.hover}
          onClick={this.click}
        />
      </div>
    );
  }
}

storiesOf('Juggle Components', module)
  .add('XPath', () => <XPathStory />);
