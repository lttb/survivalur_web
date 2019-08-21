import React, { Component } from 'react';
import Types from 'prop-types';

import styled from 'reshadow';
import styles from './Layer.shadow.css';

class Layer extends Component {
  constructor(props, context) {
    super(props, context);
    this.rootRef = React.createRef();
  }

  get root() {
    return this.rootRef.current;
  }

  render() {
    const { src, alt, x, y } = this.props;
    return styled(styles)`
      top: ${y}px;
      left: ${x}px;
    `(<img ref={this.rootRef} src={src} alt={alt}/>);
  }
}

Layer.propTypes = {
  zIndex: Types.number,
  src: Types.string.isRequired,
  alt: Types.string.isRequired,
  x: Types.number.isRequired,
  y: Types.number.isRequired
};

Layer.defaultProps = {
  zIndex: 0,
};

export default Layer;
