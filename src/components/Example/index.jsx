import React, { PureComponent } from 'react';
import Types from 'prop-types';

import styled from 'reshadow';
import styles from './Example.shadow.css';

class Example extends PureComponent {
  static propTypes = {
  };

  constructor(props, context) {
    super();
  }

  render() {
    return styled(styles)(
      <h1>Это пример компонента</h1>
    );
  }
}

export default Example;
