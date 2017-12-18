class XPath {
  constructor(doc) {
    this.document = doc;
  }

  hasElementId(element) {
    return element && element.id;
  }

  hasFollowingSiblings(element) {
    let hasFollowingSiblings = false;

    for (let nextSibling = element.nextSibling;
      nextSibling && !hasFollowingSiblings;
      nextSibling = nextSibling.nextSibling
    ) {
      if (nextSibling.nodeName === element.nodeName) {
        hasFollowingSiblings = true;
      }
    }

    return hasFollowingSiblings;
  }

  getElementId(element) {
    return element ? element.id : undefined;
  }

  getElementClass(element) {
    return element ? element.className : undefined;
  }

  getElementXPathId(id) {
    return `//*[@id="${id}"]`;
  }

  getElementXPathIndex(element) {
    let index = 0;

    for (let prevSibling = element.previousSibling;
      prevSibling; prevSibling = prevSibling.previousSibling
    ) {
      if (prevSibling.nodeType === Node.DOCUMENT_TYPE_NODE) continue;
      if (prevSibling.nodeName === element.nodeName) index += 1;
    }

    return index;
  }

  getElementXPath(element) {
    if (this.hasElementId(element)) {
      return this.getElementXPathId(
        this.getElementId(element),
      );
    }

    return this.getElementTreeXPath(element);
  }

  getElementTreeXPath(element) {
    const paths = [];

    let hasElementId = false;
    for (let currElement = element;
      !hasElementId && currElement && currElement.nodeType === Node.ELEMENT_NODE;
      currElement = currElement.parentNode
    ) {
      let path;
      if (this.hasElementId(currElement)) {
        path = this.getElementXPathId(
          this.getElementId(currElement),
        );

        hasElementId = true;
      } else {
        const currElementIndex = this.getElementXPathIndex(currElement);
        const hasSiblings = this.hasFollowingSiblings(currElement) || currElementIndex;
        const className = this.getElementClass(currElement);

        path = hasSiblings ?
          `${currElement.localName}${className ? `[@class="${className}"]` : ''}[${currElementIndex + 1}]` :
          currElement.localName;
      }

      paths.splice(0, 0, path);
    }

    if (hasElementId) {
      return paths.join('/');
    } else if (paths.length) {
      return `/${paths.join('/')}`;
    }

    return null;
  }

  getElementByXPath(xpath) {
    try {
      return this.evaluateXPath(xpath);
    } catch (e) {
      console.error(e);
      return [];
    }
  }

  evaluateXPath(
    xpath,
    contextNode,
    resultType,
  ) {
    let currContextNode;
    let currResultType;

    if (contextNode === undefined) {
      currContextNode = this.document;
    } else {
      currContextNode = contextNode;
    }

    if (resultType === undefined) {
      currResultType = XPathResult.ANY_TYPE;
    } else {
      currResultType = resultType;
    }

    const result = this.document
      .evaluate(xpath, currContextNode, null, currResultType, null);

    switch (result.resultType) {
      case XPathResult.NUMBER_TYPE:
        return result.numberValue;
      case XPathResult.STRING_TYPE:
        return result.stringValue;
      case XPathResult.UNORDERED_NODE_ITERATOR_TYPE:
      case XPathResult.ORDERED_NODE_ITERATOR_TYPE: {
        const nodes = [];
        for (let item = result.iterateNext(); item; item = result.iterateNext()) {
          nodes.push(item);
        }

        return nodes;
      }
      case XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE:
      case XPathResult.ORDERED_NODE_SNAPSHOT_TYPE: {
        const nodes = [];
        for (let i = 0; i < result.snapshotLength; i += 1) {
          nodes.push(result.snapshotItem(i));
        }

        return nodes;
      }
      case XPathResult.ANY_UNORDERED_NODE_TYPE:
      case XPathResult.FIRST_ORDERED_NODE_TYPE:
        return result.singleNodeValue;
      default:
        return [];
    }
  }
}

export default XPath;
