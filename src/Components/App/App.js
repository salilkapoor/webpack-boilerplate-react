import React from 'react'

import ErrorBoundary from '../molecules/ErrorBoundary'

import './styles.scss'

const App = () => (
  <ErrorBoundary>
    <h1 className="app__title">React Boilerplate App</h1>
  </ErrorBoundary>
)

export default App
