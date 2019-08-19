import React, { Component } from 'react';

import { observer } from 'mobx-react';
import styled from 'styled-components';

const Container = styled.div`
  width: 1382px;
  background: linear-gradient(#85a2f8, #d4defe);
  position: relative;
  height: 400px;
  overflow: hidden;
`;

const Layer = styled.div`
  width: 1382px;
  background: url(${props => props.image}) 100% no-repeat;
  color: #fff;
  width: 100%;
  height: 500px;
  position: absolute;
  top: ${props => `${props.top}px` || 0}
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

  createDefaultOffsets() {
    const defaultOffsets = {};

    for (const layer of this.state.layers) {
      defaultOffsets[layer.id] = 0;
    };

    this.setState({
      offsets: defaultOffsets
    })
  }

  onScroll() {
    const reculcOffsets = {};
    const { layers } = this.state;

    for (const layer of layers) {
      reculcOffsets[layer.id] = window.scrollY / layer.sensitive;
    };

    this.setState({
      offsets: reculcOffsets
    })
  }

  render() {
    return(
      <Container>
        {
          this.state.layers.map(layer => <Layer key={layer.id} image={layer.image} top={this.state.offsets[layer.id]}>1</Layer>)
        }
      </Container>
    );
  }
}

export default Paralax;
