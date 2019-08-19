import React, { Component } from 'react';

import { observer } from 'mobx-react';
import styled from 'styled-components'

import Paralax from 'src/containers/Paralax';

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

const Title = styled.h1`
  color: #011033ж
  padding: 0;
  margin: 0;
  font-weight: 400
  position: fixed;
`;

@observer
class Template extends Component {
  render() {
    return (
      <Wrapper>
        <Title>
          Survivalur
        </Title>
        <Paralax/>
      </Wrapper>
    );
  }
}

export default Template;

