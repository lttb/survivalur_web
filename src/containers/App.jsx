import React, { PureComponent } from 'react'
import RouterView from 'src/modules/router/Router'
import { BrowserRouter as Router } from 'react-router-dom'

import { routes } from 'src/modules/router'

import 'src/resources/css/variables.css';
import 'src/resources/css/default.css';

class App extends PureComponent {
  render() {
    return (
      <Router>
        <RouterView routes={routes} />
      </Router>
    )
  }
}

export default App
