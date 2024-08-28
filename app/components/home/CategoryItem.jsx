import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CategoryItem = ({item,onCatPress}) => {
  return (
    <View className='px-4 py-6' >
        <TouchableOpacity onPress={()=>onCatPress(item)} >
        <Image source={{uri:item.icon}} width={60} height={40} />
    <Text className='font-bold pl-2 text-gray-400 py-2'>{item.name}</Text>

        </TouchableOpacity>
</View>
  )
}

export default CategoryItem