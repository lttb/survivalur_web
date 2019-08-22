import React, { Component } from 'react';
import Types from 'prop-types';

import styled from 'reshadow';
import styles from './Header.shadow.css';

import Logo from 'src/components/Logo';

class Header extends Component {
  static propTypes = {};

  constructor(props, context) {
    super();
    this.rootRef = React.createRef();
    this.triggerHeight = 0;
    this.state = {
      isFixed: false,
    };

    document.addEventListener('scroll', this.onScroll.bind(this));
  }

  componentDidMount() {
    this.setTriggerHeight();
  }

  onScroll() {
    const element = this.root.current;
    if (window.scrollY >= this.triggerHeight) {
      element.style.top = `${window.scrollY - this.triggerHeight}px`;
    } else {
      element.style.top = `0px`;
    }

    this.setState({
      isFixed: window.scrollY >= this.triggerHeight,
    });
  }

  setTriggerHeight() {
    this.triggerHeight = this.root.current.offsetTop;
  }

  get root() {
    return this.rootRef;
  }

  render() {
    const { isFixed } = this.state;
    return styled(styles)(
      <wrapper ref={this.rootRef}>
        <container>
          <Logo isFixed={isFixed} />
        </container>
      </wrapper>
    );
  }
}

export default Header;
