import React, { Component } from 'react';

import { observer } from 'mobx-react';
import styled from 'styled-components';

const Layer = styled.div`
  width: 100%;
  background: black;
  color: #fff;
  width: 100%;
  height: 500px;
  background: #2d6169;
`;

@observer
class Template extends Component {
  render() {
    return (
      <div>
        <Layer>1</Layer>
      </div>
    );
  }
}

export default Template;
