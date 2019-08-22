import React, { Component } from 'react';
import Types from 'prop-types';

import Paralax from 'src/containers/Paralax';
import Header from 'src/containers/Header';

import styled from 'reshadow';
import styles from './Main.shadow.css';

class Main extends Component {
  static propTypes = {};

  constructor(props, context) {
    super();
  }

  render() {
    return styled(styles)(
      <container>
        <div
          style={{
            width: '100%',
            height: '50px',
            background: 'black',
            color: 'white',
          }}
        >
          123
        </div>
        <Header />
        <Paralax
          layers={[
            {
              zIndex: 2,
              src:
                'https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/startpage-hero/steve-alex.png',
              alt: 'Steve',
              sensitive: -0.2,
            },
            {
              zIndex: 1,
              src:
                'https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/startpage-hero/background.png',
              alt: 'Background',
              sensitive: 0.3,
            },
            {
              zIndex: 0,
              src:
                'https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/startpage-hero/clouds.png',
              alt: 'Clouds',
              sensitive: 0.1,
            },
          ]}
          aspectRatio="18:6"
        />
      </container>
    );
  }
}

export default Main;
