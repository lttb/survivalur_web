import React, { Component } from 'react';

import { observer } from 'mobx-react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 400px;
  background: linear-gradient(#85a2f8, #d4defe);
  position: relative;
  overflow: hidden;
  @media (max-width: 1150px) {
    height: 300px;
  }
  @media (max-width: 875px) {
    height: 200px;
  }
  @media (max-width: 580px) {
    height: 130px;
  }
`;

const Layer = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${props => props.image});
  background-size: 100%;
  background-repeat: no-repeat;
  color: #fff;
  position: absolute;
  transition: top .3s ease-out;
  will-change: top;
  top: ${props => `${props.top}px` || 0};
  
  @media (max-width: 1150px) {
    height: 400px;
  }
  @media (max-width: 875px) {
    height: 350px;
  }
  @media (max-width: 580px) {
    height: 300px;
  }
`;

const Content = styled.div`
  
`;

const Title = styled.h1`
  color: #ececec;
  width: 100%;
  padding: 0;
  margin: 0;
  position: absolute;
  text-align: center;
  z-index: 222;
  bottom: -43px;
  font-weight: 600;
  font-size: 70px;
  text-shadow: 0 11px 11px #000000;
  text-transform: uppercase;
  font-family: "Minecraft",sans-serif;
`;

@observer
class Paralax extends Component {
  constructor() {
    super();
    this.state = {
      layers: [
        {
          id: 2,
          image: 'https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/startpage-hero/background.png',
          sensitive: 2.5
        },
        {
          id: 3,
          image: 'https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/startpage-hero/clouds.png',
          sensitive: -5
        },
        {
          id: 1,
          image: 'https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/startpage-hero/steve-alex.png',
          sensitive: -4.3
        },
      ],
      offsets: {}
    };
  }

  componentDidMount() {
    this.createDefaultOffsets();
    document.addEventListener('scroll',this.onScroll.bind(this));
  }

  onScroll() {
    const reculcOffsets = {};
    const { layers } = this.state;

    layers.forEach(layer => {
      reculcOffsets[layer.id] = window.scrollY / layer.sensitive;
    });

    this.setState({
      offsets: reculcOffsets
    })
  }

  createDefaultOffsets() {
    const { layers } = this.state;
    const defaultOffsets = {};

    layers.forEach(layer => {
      defaultOffsets[layer.id] = 0;
    });

    this.setState({
      offsets: defaultOffsets
    });
  }

  render() {
    const { layers, offsets } = this.state;
    return(
      <Content>
        <Container>
          {
            layers.map(layer => <Layer key={layer.id} image={layer.image} top={offsets[layer.id]}/>)
          }
        </Container>
        <Title>Survivalur</Title>
      </Content>

    );
  }
}

export default Paralax;
