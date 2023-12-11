import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { type RootBottomTabParamList } from './types'
import { HomeScreen, SearchAccountScreen, CreatePostScreen, ProfileScreen } from '..'

const Tab = createBottomTabNavigator<RootBottomTabParamList>()

const MyTabsScreen: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home'
        }}
      />
      <Tab.Screen
        name='SearchAccountScreen'
        component={SearchAccountScreen}
        options={{
          tabBarLabel: 'Search'
        }}
      />
      <Tab.Screen
        name='CreatePostScreen'
        component={CreatePostScreen}
        options={{
          tabBarLabel: 'Post'
        }}
      />
      <Tab.Screen
        name='ProfileScreen'
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile'
        }}
      />
    </Tab.Navigator>
  )
}

export default MyTabsScreen
