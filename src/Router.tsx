import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { type RootStackParamList } from './types/Router.types'
import { SignInScreen, SignUpScreen } from './screens'
import MyTabsScreen from './screens/MyTabsScreen'

const Stack = createNativeStackNavigator<RootStackParamList>()

const Router: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='MyTabsScreen'>
        <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
        <Stack.Screen name='SignInScreen' component={SignInScreen} />
        <Stack.Screen name='MyTabsScreen' component={MyTabsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router
