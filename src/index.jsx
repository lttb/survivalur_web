import React from 'react'
import ReactDOM from 'react-dom'
import App from 'src/containers/App.jsx'

import 'src/styles/default.css'
import MainStore from 'src/stores/Main'

function initProject() {
  const root = document.getElementById('root');
  ReactDOM.render(<App store={MainStore} />, root)

}

initProject();
