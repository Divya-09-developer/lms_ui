import React, { useEffect, useRef } from 'react';

// AnchorJS Library Code
function AnchorJS(options) {
  this.options = options || {};
  this.elements = [];

  function _applyRemainingDefaultOptions(opts) {
    opts.icon = opts.hasOwnProperty('icon') ? opts.icon : '\ue9cb';
    opts.visible = opts.hasOwnProperty('visible') ? opts.visible : 'hover';
    opts.placement = opts.hasOwnProperty('placement') ? opts.placement : 'right';
    opts.ariaLabel = opts.hasOwnProperty('ariaLabel') ? opts.ariaLabel : 'Anchor';
    opts.class = opts.hasOwnProperty('class') ? opts.class : '';
    opts.base = opts.hasOwnProperty('base') ? opts.base : '';
    opts.truncate = opts.hasOwnProperty('truncate') ? Math.floor(opts.truncate) : 64;
    opts.titleText = opts.hasOwnProperty('titleText') ? opts.titleText : '';
  }

  _applyRemainingDefaultOptions(this.options);

  this.isTouchDevice = function() {
    return !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);
  };

  this.add = function(selector) {
    var elements,
        elsWithIds,
        idList,
        elementID,
        i,
        index,
        count,
        tidyText,
        newTidyText,
        anchor,
        visibleOptionToUse,
        hrefBase,
        indexesToDrop = [];

    _applyRemainingDefaultOptions(this.options);

    visibleOptionToUse = this.options.visible;
    if (visibleOptionToUse === 'touch') {
      visibleOptionToUse = this.isTouchDevice() ? 'always' : 'hover';
    }

    if (!selector) {
      selector = 'h2, h3, h4, h5, h6';
    }

    elements = _getElements(selector);

    if (elements.length === 0) {
      return this;
    }

    _addBaselineStyles();

    elsWithIds = document.querySelectorAll('[id]');
    idList = [].map.call(elsWithIds, function assign(el) {
      return el.id;
    });

    for (i = 0; i < elements.length; i++) {
      if (this.hasAnchorJSLink(elements[i])) {
        indexesToDrop.push(i);
        continue;
      }

      if (elements[i].hasAttribute('id')) {
        elementID = elements[i].getAttribute('id');
      } else if (elements[i].hasAttribute('data-anchor-id')) {
        elementID = elements[i].getAttribute('data-anchor-id');
      } else {
        tidyText = this.urlify(elements[i].textContent);
        newTidyText = tidyText;
        count = 0;
        do {
          if (index !== undefined) {
            newTidyText = tidyText + '-' + count;
          }
          index = idList.indexOf(newTidyText);
          count += 1;
        } while (index !== -1);
        index = undefined;
        idList.push(newTidyText);
        elements[i].setAttribute('id', newTidyText);
        elementID = newTidyText;
      }

      anchor = document.createElement('a');
      anchor.className = 'anchorjs-link ' + this.options.class;
      anchor.setAttribute('aria-label', this.options.ariaLabel);
      anchor.setAttribute('data-anchorjs-icon', this.options.icon);
      if (this.options.titleText) {
        anchor.title = this.options.titleText;
      }
      hrefBase = document.querySelector('base') ? window.location.pathname + window.location.search : '';
      hrefBase = this.options.base || hrefBase;
      anchor.href = hrefBase + '#' + elementID;

      if (visibleOptionToUse === 'always') {
        anchor.style.opacity = '1';
      }

      if (this.options.icon === '\ue9cb') {
        anchor.style.font = '1em/1 anchorjs-icons';
        if (this.options.placement === 'left') {
          anchor.style.lineHeight = 'inherit';
        }
      }

      if (this.options.placement === 'left') {
        anchor.style.position = 'absolute';
        anchor.style.marginLeft = '-1em';
        anchor.style.paddingRight = '0.5em';
        elements[i].insertBefore(anchor, elements[i].firstChild);
      } else {
        anchor.style.paddingLeft = '0.375em';
        elements[i].appendChild(anchor);
      }
    }

    for (i = 0; i < indexesToDrop.length; i++) {
      elements.splice(indexesToDrop[i] - i, 1);
    }
    this.elements = this.elements.concat(elements);

    return this;
  };

  this.remove = function(selector) {
    var index,
        domAnchor,
        elements = _getElements(selector);

    for (var i = 0; i < elements.length; i++) {
      domAnchor = elements[i].querySelector('.anchorjs-link');
      if (domAnchor) {
        index = this.elements.indexOf(elements[i]);
        if (index !== -1) {
          this.elements.splice(index, 1);
        }
        elements[i].removeChild(domAnchor);
      }
    }
    return this;
  };

  this.removeAll = function() {
    this.remove(this.elements);
  };

  this.urlify = function(text) {
    var nonsafeChars = /[& +$,:;=?@"#{}|^~[`%!'<>\]\.\/\(\)\*\\\n\t\b\v]/g,
        urlText;

    if (!this.options.truncate) {
      _applyRemainingDefaultOptions(this.options);
    }

    urlText = text.trim()
      .replace(/\'/gi, '')
      .replace(nonsafeChars, '-')
      .replace(/-{2,}/g, '-')
      .substring(0, this.options.truncate)
      .replace(/^-+|-+$/gm, '')
      .toLowerCase();

    return urlText;
  };

  this.hasAnchorJSLink = function(el) {
    var hasLeftAnchor = el.firstChild && ((' ' + el.firstChild.className + ' ').indexOf(' anchorjs-link ') > -1),
        hasRightAnchor = el.lastChild && ((' ' + el.lastChild.className + ' ').indexOf(' anchorjs-link ') > -1);

    return hasLeftAnchor || hasRightAnchor || false;
  };

  function _getElements(input) {
    var elements;
    if (typeof input === 'string' || input instanceof String) {
      elements = [].slice.call(document.querySelectorAll(input));
    } else if (Array.isArray(input) || input instanceof NodeList) {
      elements = [].slice.call(input);
    } else {
      throw new Error('The selector provided to AnchorJS was invalid.');
    }
    return elements;
  }

  function _addBaselineStyles() {
    if (document.head.querySelector('style.anchorjs') !== null) {
      return;
    }

    var style = document.createElement('style'),
        linkRule =
        ' .anchorjs-link {' +
        '   opacity: 0;' +
        '   text-decoration: none;' +
        '   -webkit-font-smoothing: antialiased;' +
        '   -moz-osx-font-smoothing: grayscale;' +
        ' }',
        hoverRule =
        ' *:hover > .anchorjs-link,' +
        ' .anchorjs-link:focus  {' +
        '   opacity: 1;' +
        ' }',
        anchorjsLinkFontFace =
        ' @font-face {' +
        '   font-family: "anchorjs-icons";' +
        '   src: url(data:n/a;base64,AAEAAAALAIAAAwAwT1MvMg8yG2cAAAE4AAAAYGNtYXDp3gC3AAABpAAAAExnYXNwAAAAEAAAA9wAAAAIZ2x5ZlQCcfwAAAH4AAABCGhlYWQHFvHyAAAAvAAAADZoaGVhBnACFwAAAPQAAAAkaG10eASAADEAAAGYAAAADGxvY2EACACEAAAB8AAAAAhtYXhwAAYAVwAAARgAAAAgbmFtZQGOH9cAAAMAAAAAunBvc3QAAwAAAAADvAAAACAAAQAAAAEAAHzE2p9fDzz1AAkEAAAAAADRecUWAAAAANQA6R8AAAAAAoACwAAAAAgAAgAAAAAAAAABAAADwP/AAAACgAAA/9MCrQABAAAAAAAAAAAAAAAAAAAAAwABAAAAAwBVAAIAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAMCQAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAg//0DwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAAIAAAACgAAxAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADAAAAAIAAgAAgAAACDpy//9//8AAAAg6cv//f///+EWNwADAAEAAAAAAAAAAAAAAAAACACEAAEAAAAAAAAAAAAAAAAxAAACAAQARAKAAsAAKwBUAAABIiYnJjQ3NzY2MzIWFxYUBwcGIicmNDc3NjQnJiYjIgYHBwYUFxYUBwYGIwciJicmNDc3NjIXFhQHBwYUFxYWMzI2Nzc2NCcmNDc2MhcWFAcHBgYjARQGDAUtLXoWOR8fORYtLTgKGwoKCjgaGg0gEhIgDXoaGgkJBQwHdR85Fi0tOAobCgoKOBoaDSASEiANehoaCQkKGwotLXoWOR8BMwUFLYEuehYXFxYugC44CQkKGwo4GkoaDQ0NDXoaShoKGwoFBe8XFi6ALjgJCQobCjgaShoNDQ0NehpKGgobCgoKLYEuehYXAAAADACWAAEAAAAAAAEACAAAAAEAAAAAAAIAAwAIAAEAAAAAAAMACAAAAAEAAAAAAAQACAAAAAEAAAAAAAUAAQALAAEAAAAAAAYACAAAAAMAAQQJAAEAEAAMAAMAAQQJAAIABgAcAAMAAQQJAAMAEAAMAAMAAQQJAAQAEAAMAAMAAQQJAAUAAgAiAAMAAQQJAAYAEAAMYW5jaG9yanM0MDBAAGEAbgBjAGgAbwByAGoAcwA0ADAAMABAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAH//wAP) format("truetype");' +
        ' }',
        pseudoElContent =
        ' [data-anchorjs-icon]::after {' +
        '   content: attr(data-anchorjs-icon);' +
        ' }',
        firstStyleEl;

    style.className = 'anchorjs';
    style.appendChild(document.createTextNode('')); // Necessary for Webkit.

    firstStyleEl = document.head.querySelector('[rel="stylesheet"], style');
    if (firstStyleEl === undefined) {
      document.head.appendChild(style);
    } else {
      document.head.insertBefore(style, firstStyleEl);
    }

    style.sheet.insertRule(linkRule, style.sheet.cssRules.length);
    style.sheet.insertRule(hoverRule, style.sheet.cssRules.length);
    style.sheet.insertRule(pseudoElContent, style.sheet.cssRules.length);
    style.sheet.insertRule(anchorjsLinkFontFace, style.sheet.cssRules.length);
  }
}

// React Component
const AnchorLinks = ({ selector = 'h2, h3, h4, h5, h6', options }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const anchor = new AnchorJS(options);
    anchor.add(selector, containerRef.current);

    return () => {
      anchor.remove(selector);
    };
  }, [selector, options]);

  return (
    <div ref={containerRef}>
      {/* Your content goes here */}
      <h2>Heading 1</h2>
      <p>Some content under heading 1.</p>
      <h3>Subheading 1.1</h3>
      <p>Some content under subheading 1.1.</p>
      <h2>Heading 2</h2>
      <p>Some content under heading 2.</p>
      <h4>Subheading 2.1</h4>
      <p>Some content under subheading 2.1.</p>
    </div>
  );
};

// Example usage
const App = () => {
  return (
    <div>
      <h1>My Document</h1>
      <AnchorLinks options={{ icon: '#', visible: 'hover', placement: 'right' }} />
    </div>
  );
};

export default App;