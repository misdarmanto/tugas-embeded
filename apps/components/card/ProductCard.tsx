import {
  AspectRatio,
  Box,
  Center,
  HStack,
  Heading,
  Stack,
  Image,
  Text
} from 'native-base'
import { toMoney } from '../../utilities/toMony'
import { widthPercentage } from '../../utilities/dimension'
import { BASE_COLOR } from '../../utilities/baseColor'
import { useEffect, useState } from 'react'
import { sliceString } from '../../utilities/sliceString'

interface IProductCardModel {
  title: string
  description: string
  images: string
  price: number
  discount: number
  totalSale: number
}

export function ProductCardComponent(props: IProductCardModel) {
  const [image, setImage] = useState(undefined)

  useEffect(() => {
    const convertImageToArray = JSON.parse(props.images)
    setImage(convertImageToArray[0])
  }, [props])

  return (
    <Box
      width={widthPercentage(47.5)}
      overflow='hidden'
      m={0.5}
      bg={'white'}
      borderColor='coolGray.100'
      borderWidth='1'
    >
      <Box>
        <AspectRatio w='100%' ratio={16 / 12}>
          <Image
            source={{
              uri: image
            }}
            alt='image'
          />
        </AspectRatio>
        {props.discount > 0 && (
          <Center bg={BASE_COLOR.primary} position='absolute' bottom='0' px='3' py='0.5'>
            <Text color='warmGray.50'>DISC {props.discount + ''}%</Text>
          </Center>
        )}
      </Box>
      <Stack p='2' space={1}>
        <Stack>
          <Heading size='sm'>{sliceString({ text: props.title, length: 17 })}</Heading>
          <Text fontSize='xs'>Terjual {props.totalSale}</Text>
        </Stack>

        <HStack alignItems='center' space={4} justifyContent='space-between'>
          <HStack alignItems='center'>
            <Text color={BASE_COLOR.primary} fontWeight='400'>
              Rp{toMoney(props.price)}
            </Text>
          </HStack>
        </HStack>
      </Stack>
    </Box>
  )
}
