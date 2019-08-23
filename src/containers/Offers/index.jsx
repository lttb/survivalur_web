import React, { PureComponent } from 'react';
import Types from 'prop-types';

import styled from 'reshadow';
import styles from './Offers.shadow.css';

import Card from 'src/components/Card';

class Offers extends PureComponent {
  static propTypes = {
  };

  constructor(props, context) {
    super();
  }

  render() {
    return styled(styles)(
      <content>
        <Card />
        <Card />
        <Card />
        <Card />
      </content>
    );
  }
}

export default Offers;
