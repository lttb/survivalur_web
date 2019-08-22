import React, { PureComponent } from 'react';
import Types from 'prop-types';

import styled from 'reshadow';
import styles from './Logo.shadow.css';

class Logo extends PureComponent {
  static propTypes = {
    isFixed: Types.bool.isRequired,
  };

  constructor(props, context) {
    super();
    this.rootRef = React.createRef();
  }

  get root() {
    return this.rootRef;
  }

  render() {
    const { isFixed } = this.props;
    return styled(styles)(
      <img
        use:isFixed={isFixed}
        ref={this.rootRef}
        src={'/images/logo.png'}
        alt={'Survivalur'}
      />
    );
  }
}

export default Logo;
