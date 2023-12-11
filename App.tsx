import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Router from './src/Router'
import { ReduxWrapper } from './src/components/organisms'

const App: React.FC = () => {
  return (
    <ReduxWrapper>
      <StatusBar style='auto' translucent />
      <Router />
    </ReduxWrapper>
  )
}

export default App
