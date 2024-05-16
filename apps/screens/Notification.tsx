import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useState } from 'react'
import { Box, FlatList, HStack, Heading, Text, Stack } from 'native-base'
import Layout from '../components/Layout'
import { INavigationParamList } from '../models/navigationModel'
import CartScreenSkeleton from '../components/skeleton/CartScreenSkeleton'
import { INotificationModel } from '../models/notificationsModel'
import { convertTime } from '../utilities/convertTime'

type NotificationViewPropsTypes = NativeStackScreenProps<
  INavigationParamList,
  'Notification'
>

export default function NotificationView({ navigation }: NotificationViewPropsTypes) {
  const [isLoading, setIsLoading] = useState(false)

  const getDate = () => {
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    const formattedTime = hours + ':' + minutes + ':' + seconds
    return `${date.toDateString()} - ${formattedTime}`
  }

  const [notifications, setNotifications] = useState<INotificationModel[]>([
    {
      notificationId: 'sds',
      notificationName: '🚨 Peringatan Kebakaran!',
      notificationMessage:
        'Kebakaran terdeteksi di GKU1. Segera evakuasi ke titik aman terdekat! 🔥',
      id: 1,
      createdAt: getDate(),
      updatedAt: '',
      deleted: 0
    },
    {
      notificationId: 's23',
      notificationName: '🚨 Peringatan Kebakaran!',
      notificationMessage:
        'Kebakaran terdeteksi di GKU1. Segera evakuasi ke titik aman terdekat! 🔥',
      id: 1,
      createdAt: getDate(),
      updatedAt: '',
      deleted: 0
    },
    {
      notificationId: 's23sdsdsd',
      notificationName: '🚨 Peringatan Kebakaran!',
      notificationMessage:
        'Kebakaran terdeteksi di LAB OZT. Segera evakuasi ke titik aman terdekat! 🔥',
      id: 1,
      createdAt: getDate(),
      updatedAt: '',
      deleted: 0
    },
    {
      notificationId: 's23sdsdssdsdd',
      notificationName: '🚨 Peringatan Kebakaran!',
      notificationMessage:
        'Kebakaran terdeteksi di GEDUNG C. Segera evakuasi ke titik aman terdekat! 🔥',
      id: 1,
      createdAt: getDate(),
      updatedAt: '',
      deleted: 0
    },
    {
      notificationId: 's23sdsdssdsddsdsdsd',
      notificationName: '🚨 Peringatan Kebakaran!',
      notificationMessage:
        'Kebakaran terdeteksi di GEDUNG C. Segera evakuasi ke titik aman terdekat! 🔥',
      id: 1,
      createdAt: getDate(),
      updatedAt: '',
      deleted: 0
    },
    {
      notificationId: 's23s3wewessdsdd',
      notificationName: '🚨 Peringatan Kebakaran!',
      notificationMessage:
        'Kebakaran terdeteksi di GEDUNG C. Segera evakuasi ke titik aman terdekat! 🔥',
      id: 1,
      createdAt: getDate(),
      updatedAt: '',
      deleted: 0
    }
  ])

  return (
    <Layout>
      {isLoading && <CartScreenSkeleton />}
      {!isLoading && notifications.length !== 0 && (
        <FlatList
          data={notifications}
          keyExtractor={(item) => item.notificationId}
          renderItem={({ item }) => {
            return (
              <Box
                rounded='lg'
                overflow='hidden'
                p={3}
                borderColor='coolGray.200'
                borderWidth='1'
                backgroundColor='white'
              >
                <HStack space={2}>
                  <Stack p='1' space={1}>
                    <Heading size='sm'>{item.notificationName}</Heading>
                    <Text>{item.notificationMessage}</Text>
                    <HStack justifyContent={'flex-end'}>
                      <Text>{convertTime(item.createdAt)}</Text>
                    </HStack>
                  </Stack>
                </HStack>
              </Box>
            )
          }}
        />
      )}
    </Layout>
  )
}
