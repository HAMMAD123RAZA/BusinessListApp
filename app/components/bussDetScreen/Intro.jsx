import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

const Intro = ({businessData}) => {

  const {width}=Dimensions.get('window')

  const router=useRouter()
  return (
    <View>
      <View className=' px-3 absolute  z-10 '>
        <View className='left-1' >
          <TouchableOpacity onPress={()=>{router.back()}} >
          <Ionicons name='arrow-back-circle' size={28} color='blue' />

          </TouchableOpacity>
        </View>
        <View className='left-80 bottom-7'>
        <Ionicons name='heart-outline' size={28} color='blue
        ' />

        </View>

      </View>
<Image source={{uri:businessData.img}} width={width} height={300}/>

    <View className='absolute bg-gray-300 bottom-1 w-full ' >

    <View className=' mx-2 rounded-lg' >
      <Text className='font-bold text-xl pl-7 ' >{businessData.name}</Text>
      <Text className='pl-7' >Lorem ipsum dolor sit  elit Cumqutate </Text>
    </View>
    </View>

    </View>
  )
}

export default Intro