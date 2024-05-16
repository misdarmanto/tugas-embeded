import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { BASE_COLOR } from '../utilities/baseColor'
import { INavigationParamList } from '../models/navigationModel'
import { TabNavigation } from './tabNavigation'

const Stack = createNativeStackNavigator<INavigationParamList>()

export default function StackNavigations() {
  return (
    <Stack.Navigator
      initialRouteName='Main'
      screenOptions={{
        headerTitleStyle: {
          fontFamily: 'lato',
          color: BASE_COLOR.text.primary
        }
      }}
    >
      <Stack.Screen
        name='Main'
        component={TabNavigation}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}
