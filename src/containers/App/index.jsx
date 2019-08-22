import React, { PureComponent } from 'react';
import styled from 'reshadow';
import RouterView from 'src/modules/router/Router';
import { BrowserRouter as Router } from 'react-router-dom';

import { routes } from 'src/modules/router/index';

import styles from './App.shadow.css';

class App extends PureComponent {
  render() {
    return styled(styles)(
      <Router>
        <RouterView routes={routes} />
      </Router>
    );
  }
}

export default App;
