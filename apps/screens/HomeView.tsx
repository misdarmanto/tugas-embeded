import { useState, useEffect, useRef } from 'react'
import { Text, View, Button, Platform, TouchableOpacity } from 'react-native'
import * as Device from 'expo-device'
import * as Notifications from 'expo-notifications'
import Constants from 'expo-constants'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { INavigationParamList } from '../models/navigationModel'
import { Card, Heading, Pressable } from 'native-base'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false
  })
})

type HomeViewPropsTypes = NativeStackScreenProps<INavigationParamList, 'Home'>

export default function HomeView({ navigation }: HomeViewPropsTypes) {
  const [expoPushToken, setExpoPushToken] = useState('')
  const [channels, setChannels] = useState<Notifications.NotificationChannel[]>([])
  const [notification, setNotification] = useState<
    Notifications.Notification | undefined
  >(undefined)
  const notificationListener = useRef<Notifications.Subscription>()
  const responseListener = useRef<Notifications.Subscription>()

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => token && setExpoPushToken(token))

    if (Platform.OS === 'android') {
      Notifications.getNotificationChannelsAsync().then((value) =>
        setChannels(value ?? [])
      )
    }
    notificationListener.current = Notifications.addNotificationReceivedListener(
      (notification) => {
        setNotification(notification)
      }
    )

    responseListener.current = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        console.log(response)
      }
    )

    return () => {
      notificationListener.current &&
        Notifications.removeNotificationSubscription(notificationListener.current)
      responseListener.current &&
        Notifications.removeNotificationSubscription(responseListener.current)
    }
  }, [])

  const [randomNumber, setRandomNumber] = useState(0)
  const increaseIntervalRef = useRef<any>(null)
  const decreaseIntervalRef = useRef<any>(null)

  const generateRandomNumber = () => {
    setRandomNumber((prevNumber) => {
      const randomNum = prevNumber + Math.floor(Math.random() * 100) + 1
      return randomNum > 100 ? 100 : randomNum
    })
  }

  const decreaseToZero = () => {
    setRandomNumber((prevNumber) => {
      const newNumber = prevNumber - 1
      if (newNumber <= 0) {
        clearInterval(decreaseIntervalRef.current)
        return 0
      }
      return newNumber
    })
  }

  const handlePressIn = () => {
    if (decreaseIntervalRef.current) {
      clearInterval(decreaseIntervalRef.current)
    }
    increaseIntervalRef.current = setInterval(generateRandomNumber, 100) // increase every 100 milliseconds
  }

  const handlePressOut = () => {
    clearInterval(increaseIntervalRef.current)
    decreaseIntervalRef.current = setInterval(decreaseToZero, 10) // decrease every 10 milliseconds
  }

  // async () => {
  //   await schedulePushNotification()
  // }

  useEffect(() => {
    if (randomNumber > 90) {
      schedulePushNotification()
    }
    console.log(randomNumber)
  }, [randomNumber])

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
      }}
    >
      <Card
        rounded={'full'}
        bgColor={'white'}
        size={'64'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Heading color={'gray.500'}>{randomNumber}%</Heading>
      </Card>
      <Pressable
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        width={'full'}
        position={'absolute'}
        top={10}
      >
        <Card h={'24'} shadow={'none'}></Card>
      </Pressable>
    </View>
  )
}

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Peringatan!',
      body: '🚨 Peringatan Kebakaran! Kebakaran terdeteksi di GKU1. Segera evakuasi ke titik aman terdekat! 🔥'
    },
    trigger: { seconds: 1 }
  })
}

async function registerForPushNotificationsAsync() {
  let token

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C'
    })
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync()
    let finalStatus = existingStatus
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync()
      finalStatus = status
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!')
      return
    }
    try {
      const projectId =
        Constants?.expoConfig?.extra?.eas?.projectId ?? Constants?.easConfig?.projectId
      if (!projectId) {
        throw new Error('Project ID not found')
      }
      token = (
        await Notifications.getExpoPushTokenAsync({
          projectId
        })
      ).data
      console.log(token)
    } catch (e) {
      token = `${e}`
    }
  } else {
    alert('Must use physical device for Push Notifications')
  }

  return token
}
