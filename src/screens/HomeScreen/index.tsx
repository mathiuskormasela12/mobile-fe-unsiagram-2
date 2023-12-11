import React from 'react'
import { Button, SafeAreaView, Text } from 'react-native'
import useHomeScreenHook from './useHomeScreen'

const HomeScreen: React.FC = () => {
  const { accessToken, handleToken } = useHomeScreenHook()

  return (
    <SafeAreaView>
      <Text>Home {accessToken !== null ? 'Token' : ''}</Text>
      <Button title='Token' onPress={handleToken} />
    </SafeAreaView>
  )
}

export default HomeScreen
