import React, { Component } from 'react';

import styled from 'reshadow';
import styles from './Layer.shadow.css';


class Layer extends Component {
  constructor() {
    super();
    this.currentRef = React.createRef();
  }

  get current() {
    return this.currentRef;
  }

  render() {
    const { image = '', top = 0, ...props } = this.props;

    return styled(styles)`
      content {
        background-image: ${`url('${image}')`};
        top: ${top}px;
      }
    `(
      <content ref={this.currentRef}>
      </content>
    );
  }
}

export default Layer;
