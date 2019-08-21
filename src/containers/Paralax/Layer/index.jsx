import React, { Component } from 'react';
import Types from 'prop-types';

import styled from 'reshadow';
import styles from './Layer.shadow.css';

class Layer extends Component {
  constructor(props, context) {
    super(props, context);
  }


  render() {
    return styled(styles)(<div>Layer component</div>);
  }
}

Layer.propTypes = {
  zIndex: Types.number,
  src: Types.string,
  alt: Types.string
};

Layer.defaultProps = {
  zIndex: 0,
};

export default Layer;
