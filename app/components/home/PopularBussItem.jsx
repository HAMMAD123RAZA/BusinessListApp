import { View, Text, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const PopularBussItem = ({item}) => {
  return (
    <View className='bg-gray-200 px-2 py-2 rounded-lg mx-4 my-2 w-56' >
      <Image source={{uri:item.img}} style={{borderRadius:12}} width={210} height={130}  />
        <Text className='font-bold py-2 text-xl' >{item.title}</Text>
        <Text>Lorem ipsum dolor sit amet  Similique numquam distinctio</Text>
        <View className='flex-row justify-between pt-3' >
            <View className='flex-row gap-2' >
            <Ionicons name='star' color='orange' size={18} />
            <Text>4.5</Text>
            </View>
        <Text className='bg-[#6e99d2] px-3 py-1 font-bold text-white rounded-md ' >{item.name}</Text>
        </View>
    </View>
  )
}

export default PopularBussItem