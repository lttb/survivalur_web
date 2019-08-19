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
  // transition: top .3s ease-out;
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
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Title = styled.h1`
  width: 100%;
  max-width: 1200px;
  text-align: center;
  color: #ececec;
  padding: 0;
  margin: 0;
  z-index: 2;
  font-weight: 600;
  font-size: 50px;
  text-shadow: 3px 3px 3px #000000;
  text-transform: uppercase;
  font-family: "Minecraft",sans-serif;
  top: calc(100% - ${props => props.offsetTop}px);
  position: absolute;
  height: 100px;
  background-image: url('/images/logo.png');
  background-size: 50%;
  background-position: center;
  background-repeat: no-repeat;
  transition: background-size .2s ease-out;
  
  @media (max-width: 1150px) {
    top: calc(100% - 70px);
  }
  @media (max-width: 875px) {
    top: calc(100% - 70px);
  }
  @media (max-width: 580px) {
    top: calc(100% - 70px);
  }
`;

@observer
class Paralax extends Component {
  constructor() {
    super();
    this.layers = [
      {
        id: 2,
        image: 'https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/startpage-hero/background.png',
        sensitive: 2.5,
        ref: React.createRef()
      },
      {
        id: 3,
        image: 'https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/startpage-hero/clouds.png',
        sensitive: -5,
        ref: React.createRef()
      },
      {
        id: 1,
        image: 'https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/startpage-hero/steve-alex.png',
        sensitive: -4.3,
        ref: React.createRef()
      },
    ];

    this.settings = {
      title: {
        offset: {
          top: 43
        }
      }
    };

    this.containerRef = React.createRef();
    this.titleRef = React.createRef();

  }

  componentDidMount() {
    document.addEventListener('scroll',this.onScroll.bind(this));
  }

  onScroll() {
    const { layers } = this;
    const titleStyle = this.titleRef.current.style;
    if (window.innerWidth > 980) {
      if (window.scrollY < this.containerRef.current.offsetHeight - this.settings.title.offset.top) {
        layers.forEach(layer => {
          const element = layer.ref.current;
          element.style.top = `${window.scrollY / layer.sensitive}px`
        });

        titleStyle.backgroundSize = '50%';
        titleStyle.position = 'absolute';
        titleStyle.top = `calc(100% - ${this.settings.title.offset.top}px)`;
      } else {
        titleStyle.backgroundSize = '30%';
        titleStyle.position = 'fixed';
        titleStyle.top = 0;
      }
    }
  }

  render() {
    return(
      <Content>
        <Container ref={this.containerRef}>
          {
            this.layers.map(layer => <Layer ref={layer.ref} key={layer.id} image={layer.image} top={0} />)
          }
        </Container>
        <Title offsetTop={this.settings.title.offset.top} ref={this.titleRef}/>
      </Content>

    );
  }
}

export default Paralax;
