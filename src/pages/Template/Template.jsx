import React, { Component } from 'react';

import { observer } from 'mobx-react';
import styled from 'styled-components'

import Paralax from 'src/containers/Paralax';

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  position: relative;
  margin: 0 auto;
`;


@observer
class Template extends Component {
  render() {
    return (
      <Wrapper>
        <Paralax/>
      </Wrapper>
    );
  }
}

export default Template;

