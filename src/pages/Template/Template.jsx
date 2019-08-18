import React, { Component } from 'react';

import { observer } from 'mobx-react';
import styled from 'reshadow';

import styles from './Template.shadow.css';

@observer
class Template extends Component {
  render() {
    return styled(styles)(<div>123</div>);
  }
}

export default Template;
