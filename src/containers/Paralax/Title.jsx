import React, { Component } from 'react';

import styled from 'reshadow';
import styles from './Title.shadow.css'

// const Container = `
//   width: 100%;
//   height: 400px;
//   background: linear-gradient(#85a2f8, #d4defe);
//   position: relative;
//   overflow: hidden;
//   @media (max-width: 1150px) {
//     height: 300px;
//   }
//   @media (max-width: 875px) {
//     height: 200px;
//   }
//   @media (max-width: 580px) {
//     height: 130px;
//   }
// `;
//
// const Layer = styled.div`
//   width: 100%;
//   height: 500px;
//   background-image: url(${props => props.image});
//   background-size: 100%;
//   background-repeat: no-repeat;
//   color: #fff;
//   position: absolute;
//   // transition: top .3s ease-out;
//   will-change: top;
//   top: ${props => `${props.top}px` || 0};
//
//   @media (max-width: 1150px) {
//     height: 400px;
//   }
//   @media (max-width: 875px) {
//     height: 350px;
//   }
//   @media (max-width: 580px) {
//     height: 300px;
//   }
// `;
//
// const Content = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   align-items: center;
//   position: relative;
// `;
//
// const Title = styled.h1`
//   width: 100%;
//   max-width: 1200px;
//   text-align: center;
//   color: #ececec;
//   padding: 0;
//   margin: 0;
//   z-index: 2;
//   font-weight: 600;
//   font-size: 50px;
//   text-shadow: 3px 3px 3px #000000;
//   text-transform: uppercase;
//   font-family: "Minecraft",sans-serif;
//   top: calc(100% - ${props => props.offsetTop}px);
//   position: absolute;
//   height: 100px;
//   background-image: url('/images/logo.png');
//   background-size: 50%;
//   background-position: center;
//   background-repeat: no-repeat;
//   transition: background-size .2s ease-out;
//
//   @media (max-width: 1150px) {
//     top: calc(100% - 70px);
//   }
//   @media (max-width: 875px) {
//     top: calc(100% - 70px);
//     background-size: 90%;
//   }
//   @media (max-width: 580px) {
//     top: calc(100% - 70px);
//     background-size: 9s0%;
//   }
// `;

class Title extends Component {
  constructor() {
    super();
    this.currentRef = React.createRef();
  }

  get current() {
    return this.currentRef;
  }

  render() {
    const { offsetTop, children, ...props } = this.props;
    return styled(styles)`

    `(
      <h1 ref={this.currentRef} {...props} >{ children }</h1>
    );
  }
}

export default Title;
