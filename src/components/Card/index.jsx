import React, { PureComponent } from 'react';
import Types from 'prop-types';

import styled from 'reshadow';
import styles from './Card.shadow.css';

class Card extends PureComponent {
  static propTypes = {
  };

  constructor(props, context) {
    super();
  }

  render() {
    const { className } = this.props;
    return styled(styles)(
      <container className={className}>
        <title>Название товара</title>
        <description>Описание товара</description>
        <img
          src={'https://www.minecraft.net/content/dam/minecraft/dungeons/Arch-Illager.png'}
        />
      </container>
    );
  }
}

export default Card;
