import React from 'react'
import { Feather, Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeView from '../screens/HomeView'
import { BASE_COLOR } from '../utilities/baseColor'
import { heightPercentage } from '../utilities/dimension'
import { INavigationParamList } from '../models/navigationModel'
import NotificationView from '../screens/Notification'

const Tab = createBottomTabNavigator<INavigationParamList>()

export function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { minHeight: heightPercentage(7) },
        headerTitleStyle: {
          fontFamily: 'lato',
          color: BASE_COLOR.text.primary
        },
        tabBarIcon: ({ color }) => {
          switch (route.name) {
            case 'Home':
              return <Feather name='home' size={25} color={color} />
            case 'Notification':
              return <Ionicons name='notifications-outline' size={25} color={color} />
            default:
              break
          }
        },
        tabBarActiveTintColor: BASE_COLOR.primary,
        tabBarInactiveTintColor: 'gray'
      })}
    >
      <Tab.Screen name='Home' component={HomeView} />
      <Tab.Screen name='Notification' component={NotificationView} />
    </Tab.Navigator>
  )
}
