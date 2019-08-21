import React, { Component } from 'react';
import Types from 'prop-types';

import styled from 'reshadow';
import styles from './Paralax.shadow.css';

import Layer from './Layer';

class Index extends Component {
  static propTypes = {
    layers: Types.array.isRequired
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { layers } = this.props;

    return styled(styles)(
      <div>
        <h3>Paralax component</h3>
        <contaner>
          {
            layers.map((layer, index) => {
              return (
                <Layer
                  key={index}
                  zIndex={layer.zIndex}
                  src={layer.src}
                  alt={layer.alt}
                />
              )
            })
          }
        </contaner>
      </div>
    );
  }
}

export default Index;
