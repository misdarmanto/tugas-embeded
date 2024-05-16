import React, { useEffect, useState } from 'react'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import StackNavigations from './stackNavigation'
import HomeSceenSkeleton from '../components/skeleton/screens/HomeScreen'

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(238, 77, 45)'
  }
}

export default function AppNavigations() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

  if (isLoading) return <HomeSceenSkeleton />

  return (
    <NavigationContainer theme={MyTheme}>
      <StackNavigations />
    </NavigationContainer>
  )
}
